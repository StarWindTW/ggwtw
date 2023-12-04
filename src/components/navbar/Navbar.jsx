"use client"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    // const { session, status } = useSession(authOptions)
    // console.log(session)
    const status = "ww"
    return (
        <div className='sticky top-0 z-50 w-full p-3 bg-white border-b'>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <p className='font-bold text-xl'>GGWTW</p>
                </Link>
                {/* {status === "authenticated" ?
                    <div className="py-1">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                            <Image
                                className='w-full h-full'
                                src={session?.user.image}
                                alt='User Image'
                            />
                        </div>
                    </div>
                    :
                    <div className="flex space-x-2">
                        <Link href={"/signin"}>
                            <div className='cursor-pointer flex items-center border border-[#00A9fe] bg-[#00A9FE] hover:bg-[#00B1FE] text-white px-3.5 py-1 rounded-lg'>
                                <p>登入</p>
                            </div>
                        </Link>
                    </div>
                } */}
            </div>
        </div>
    )
}

export default Navbar