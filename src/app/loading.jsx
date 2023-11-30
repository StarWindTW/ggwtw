import Navbar from '@/components/navbar/Navbar'
import React from 'react'
const LoadingCircle = () => {
  return <div className='w-10 h-10 border-2 border-transparent border-r-[#00A9FE] rounded-full border-b-[#00A9FE] animate-spin'></div>
}
const Loading = () => {
  return (
    <div className='space-y-4'>
      <div className="fixed inset-0 flex items-center justify-center">
          <LoadingCircle />
      </div>
    </div>
  )
}

export default Loading