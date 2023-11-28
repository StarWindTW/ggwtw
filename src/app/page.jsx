import { Chip, ChipContainer } from "@/components/chip/Chip"
import Navbar from "@/components/navbar/Navbar"
import { getAllPostMeta } from "@/lib/mdx"
import Link from "next/link"
import { IoChevronForwardOutline } from 'react-icons/io5'

export default async function Home() {
  const posts = await getAllPostMeta()
  return (
    <main className="space-y-2">
      <Navbar />
      <div className="mx-auto max-w-7xl w-full space-y-2">
        <ChipContainer>
          <Chip />
        </ChipContainer>
        <div className="bg-white relative p-1.5 space-y-1.5 border rounded-2xl overflow-hidden">
          {posts?.map((post, index) => (
            <div key={index}>
              <Link href={`/${post.slug}`}>
                <div className="w-full bg-gray-50 rounded-2xl p-4 px-6 flex relative justify-between items-center hover:bg-gray-100 cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex space-x-1.5 items-center">
                      <div className="bg-gray-200 w-7 h-7 rounded-full"></div>
                      <p className="text-gray-600">admin</p>
                    </div>
                    <div className="">
                      <p className="text-lg font-bold">{post.title}</p>
                      <p className="text-sm text-gray-400">{post.author}</p>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <p className="text-sm text-gray-400">{post.date}</p>
                      <p className="text-gray-400">·</p>
                      <div className="flex space-x-1">
                        {post.hashtag.map((item) => (
                          <div key={item} className="bg-gray-200 p-1.5 px-3 rounded-full">
                            <p className="text-xs">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <IoChevronForwardOutline className="text-2xl text-gray-300" />
                  {/* <div className={left-6 right-6 absolute h-[1px] bottom-0 bg-gray-200 ${posts.length === index + 1 ? "hidden" : "block"}} /> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}