"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 w-full p-3 bg-white border-b'>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <p className='font-bold text-xl'>GGWTW</p>
                </Link>
                <div className="flex space-x-2">
                    <Link href={"/signin"}>
                        <div className='cursor-pointer flex items-center border border-[#00A9fe] bg-[#00A9FE] hover:bg-[#00B1FE] text-white px-3.5 py-1 rounded-lg'>
                            <p>登入</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar