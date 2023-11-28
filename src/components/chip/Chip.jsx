import React from 'react'

export const Chip = () => {
    return (
        <div className='bg-[#00A9FE] hover:bg-[#00B1FE] p-1.5 px-4 rounded-full cursor-pointer'>
            <p className='font-bold text-white/80'>全部</p>
        </div>
    )
}

export const ChipContainer = ({children}) => {
    return (
        <div className='w-full flex'>
            {children}
        </div>
    )
}