'use server'
import { ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage';
import { compileMDX } from 'next-mdx-remote/rsc';
import { storage } from '../../../firebase';
import { unified } from 'unified'
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';

const storageBucketPath = 'mdx';

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = `${realSlug}.mdx`;

  const fileRef = ref(storage, `${storageBucketPath}/${filePath}`);
  const fileURL = await getDownloadURL(fileRef);

  const response = await fetch(fileURL);
  const fileContent = await response.text();

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
  const title = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeCodeTitles)
    .use(rehypePrism, { showLineNumbers: true })
    .use(rehypeStringify)
    .process(matter(fileContent).content)
  const result = title.toString()
  return {
    meta: {
      ...frontmatter,
      slug: realSlug,
    },
    content,
    result
  };
};
export const getPageFillBySlug = async (slug) => {
  const storageRef = ref(storage, 'file/' + slug);
  const result = await listAll(storageRef)
  const files = await Promise.all(
    result.items.map(async (fileRef) => {
      const fileURL = await getDownloadURL(fileRef);
      const data = await getMetadata(fileRef);
      console.log(data)
      const kb = Math.round((data.size / 1024) * 100) / 100 + " KB";
      const type = data.contentType
      return {
        title: fileRef.name,
        size: kb,
        url: fileURL,
        type: type
      }
    }))
  return files
}
export const getAllPostMeta = async () => {
  const storageRef = ref(storage, storageBucketPath);
  const result = await listAll(storageRef);
  console.log(result);
  const posts = await Promise.all(
    result.items.map(async (fileRef) => {
      const fileURL = await getDownloadURL(fileRef);

      const response = await fetch(fileURL, { cache: 'force-cache' });
      const fileContent = await response.text();

      const { frontmatter } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true },
      });

      return {
        ...frontmatter,
        slug: fileRef.name.replace(/\.mdx$/, ''),
      };
    })
  );

  return posts;
};
