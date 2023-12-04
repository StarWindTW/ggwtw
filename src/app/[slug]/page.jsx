import Navbar from '@/components/navbar/Navbar'
import { getPageFillBySlug, getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote';
import "@/styles/prism-vs.css"
import "@/styles/prism-plus.css"
import Link from 'next/link';
import React from 'react'
import { IoArrowBackOutline, IoCodeSlashOutline, IoDownloadOutline, IoBookmarksOutline } from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsFiletypePptx, BsFileEarmark, BsFileEarmarkMinus } from "react-icons/bs";

const getPageContent = async slug => {
  const { meta, content, result } = await getPostBySlug(slug)
  return { meta, content, result }
}
export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)
  return { title: meta.title }
}

const MdxPage = async ({ params }) => {
  const { meta, content, result } = await getPageContent(params.slug)
  const files = await getPageFillBySlug(params.slug);
  console.log(files)
  return (
    <div className="mx-auto overflow-auto relative max-w-7xl w-full">
      <div className="px-4 mt-8">
        <div className="space-y-4 xl:space-y-6 max-w-4xl mx-auto xl:mx-0">
          <div className="flex flex-col sm:flex-row space-y-1 sm:justify-between sm:items-end">
            <div className="flex items-center space-x-4">
              <Link className='outline-none' href={"/"}>
                <div className="w-10 h-10 flex items-center justify-center hover:bg-black/5 hover:border cursor-pointer rounded-full">
                  <IoArrowBackOutline className='text-xl text-gray-500' />
                </div>
              </Link>
              <div className="">
                <p className='text-3xl font-bold'>{meta.title}</p>
                <p className='text-gray-400'>{meta.author}</p>
                <p className='text-gray-400 text-sm'>{meta.date}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex h-10 bg-white border overflow-hidden rounded-xl">
                <div className="px-3 space-x-1.5 hover:bg-black/5 flex items-center justify-center cursor-pointer">
                  <AiOutlineLike />
                  <p className='text-sm'>0</p>
                </div>
                <div className="py-1.5">
                  <div className="w-[1px] h-full bg-gray-200"></div>
                </div>
                <div className="w-10 hover:bg-black/5 flex items-center justify-center cursor-pointer">
                  <AiOutlineDislike />
                </div>
                <div className="py-1.5">
                  <div className="w-[1px] h-full bg-gray-200"></div>
                </div>
                <div className="flex hover:bg-black/5 space-x-1.5 px-3 items-center cursor-pointer">
                  <IoBookmarksOutline />
                  <p className='text-sm'>儲存</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-[1px] bg-gray-300' />
          <div className="xl:fixed xl:right-[max(0px,calc(50%-40rem))] top-16 right-4 xl:max-w-[21rem] w-full space-y-2">
            <p className='text-lg font-bold'>附加檔案</p>
            <div className="flex overflow-auto">
              <div className="bg-white xl:w-full border flex xl:block p-1.5 rounded-xl space-x-1.5 xl:space-x-0 xl:space-y-1.5">
                {files.length === 0 ?
                  <div className="p-3 py-2 flex space-x-4 xl:space-x-0 items-center justify-between bg-gray-100 rounded-xl">
                    <div className="flex space-x-2 items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <BsFileEarmarkMinus />
                      </div>
                      <div className="">
                        <p className='truncate overflow-hidden'>沒有附加檔案</p>
                      </div>
                    </div>
                  </div> :
                  files?.map(async (files, index) => (
                    <div key={index}>
                      <a href={files?.url}>
                        <div className="p-3 py-2 flex space-x-4 xl:space-x-0 items-center justify-between bg-gray-100 hover:bg-[#f0f0f0] rounded-xl cursor-pointer">
                          <div className="flex space-x-2 items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              {files?.type == "application/vnd.openxmlformats-officedocument.presentationml.presentation" ?
                                <BsFiletypePptx /> :
                                <BsFileEarmark />}
                            </div>
                            <div className="">
                              <p className='truncate overflow-hidden'>{files?.title}</p>
                              <p className='text-xs text-gray-400'>{files?.size}</p>
                            </div>
                          </div>
                          <IoDownloadOutline className='text-xl mx-0.5 text-gray-500' />
                        </div>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="max-w-4xl prose w-full" dangerouslySetInnerHTML={{ __html: result }}>
            {/* <MDXRemote {content/> */}
            {/* {result} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MdxPage
