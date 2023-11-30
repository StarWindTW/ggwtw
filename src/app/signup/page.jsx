"use client"
import React, { useState } from 'react'

const page = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div>
            <input type="email" onChange={(e)=> setEmail(e.target.value)} name="" id="account" />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" id="password" />
            <button onClick={handleEmailSignUp}>確認</button>
        </div>
    )
}

export default page