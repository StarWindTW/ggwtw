"use client"
import Navbar from '@/components/navbar/Navbar'
import React, { useState } from 'react'
import { useEffect } from 'react'

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-10">
        <p className="text-xl font-bold">請選擇您的登入方式</p>
        <button>Google登入</button>
      </div>
    </div>
  )
}

export default page