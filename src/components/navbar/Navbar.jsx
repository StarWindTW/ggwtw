import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky top-0 w-full p-4 bg-white border-b'>
            <div className="max-w-7xl mx-auto">
                <Link href={"/"}>
                    <p className='font-bold text-xl'>GGWTW</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar