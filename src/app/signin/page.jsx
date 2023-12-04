'use client'
import Navbar from '@/components/navbar/Navbar'
import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default function page() {
  // const { session, status } = useSession(authOptions)
  const status = "//"
  console.log(status)
  const GoogleLogin = () => {
    signIn("google")
  }
  const SignOut = () => {
    signOut()
  }
  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session?.user.email}</p>
        <button onClick={SignOut}>登出</button>
      </>
    )
  } else {
    return (
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 mt-10">
          <p className="text-xl font-bold">請選擇您的登入方式</p>
          <button onClick={GoogleLogin}>Google登入</button>
        </div>
      </div>
    )
  }
}

