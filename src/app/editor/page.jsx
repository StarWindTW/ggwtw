import Navbar from '@/components/navbar/Navbar'
import { getAllPostMeta } from '@/lib/mdx'
import Link from 'next/link'
import React from 'react'
import { MdOutlineModeEdit, MdOutlineSelectAll } from 'react-icons/md'
import { IoTrashOutline, IoCheckmarkOutline } from 'react-icons/io5'
import { VscNewFile } from 'react-icons/vsc'

const Editor = async () => {
    const posts = await getAllPostMeta()
    return (
        <div className='space-y-2'>
            <Navbar />
            <div className="mx-auto max-w-7xl w-full space-y-2">
                <div className="flex justify-between">
                    <div className="flex items-center bg-white h-10 p-2 px-3 space-x-2 border rounded-lg cursor-pointer">
                        <MdOutlineSelectAll className="text-lg text-gray-600" />
                        <p className='text-gray-600'>全選</p>
                    </div>
                    <div className="flex bg-white h-10 border rounded-lg overflow-hidden">
                        <div className="flex aspect-square items-center justify-center cursor-pointer hover:bg-black/5">
                            <VscNewFile className="text-lg text-gray-600" />
                        </div>
                        <div className="flex aspect-square items-center justify-center cursor-pointer hover:bg-black/5">
                            <IoTrashOutline className="text-lg text-gray-600" />
                        </div>
                    </div>
                </div>
                <div className="bg-white relative border rounded-2xl overflow-hidden">
                    {posts?.map((post, index) => (
                        <div key={index} className="w-full p-4 px-6 flex relative justify-between items-center cursor-pointer">
                            <div className="flex items-center space-x-4">
                                <label className='relative w-6 h-6 cursor-pointer' htmlFor={`${post.title}`}>
                                    <input className="before:content[''] peer outline-none w-6 h-6 cursor-pointer appearance-none border rounded-md checked:bg-[#009AFE]" type="checkbox" name="" id={`${post.title}`} />
                                    <IoCheckmarkOutline className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white' />
                                </label>
                                <div className="z-1">
                                    <p className="text-lg font-bold">{post.title}</p>
                                    <p className=" text-gray-400">{post.author}</p>
                                </div>
                            </div>
                            <div className="flex bg-white overflow-hidden border rounded-lg">
                                <Link href={`editor/${post.slug}`}>
                                    <div className="flex items-center justify-center w-10 h-10 hover:bg-black/5">
                                        <MdOutlineModeEdit className="text-lg text-gray-400" />
                                    </div>
                                </Link>
                                <div className="flex items-center justify-center w-10 h-10 hover:bg-red-600/10">
                                    <IoTrashOutline className="text-lg text-gray-400" />
                                </div>
                            </div>
                            <div className={`left-6 right-6 absolute h-[1px] bottom-0 bg-gray-200 ${posts.length === index + 1 ? "hidden" : "block"}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Editor