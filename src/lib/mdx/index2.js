import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'

const rootDirectory = path.join(process.cwd(), 'src', 'content')

export const getPostBySlug = async slug => {
    const realSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, `${realSlug}.mdx`)

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
    })
    
    return {
        meta: {
            ...frontmatter,
            slug: realSlug
        },
        content
    }
}

export const getAllPostMeta = async () => {
    const files = fs.readdirSync(rootDirectory)
    let posts = []

    for (const file of files) {
        const { meta } = await getPostBySlug(file)
        posts.push(meta)
    }
    return posts
}