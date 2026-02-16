import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandle = (e)=>{
        e.preventDefault()
        setEmail('')
        setPassword('')
    }

    return (
        <div className='bg-black flex h-screen w-screen items-center justify-center'>
            <div className='p-15 border-2 border-blue-400 rounded-2xl'>
                <form onSubmit={(e)=>{
                    submitHandle(e)
                }} className='flex flex-col items-center justify-center'>
                    <input className='border-2 bg-transparent border-blue-400 text-xl rounded-full px-5 py-3 placeholder:text-gray-400 text-white outline-none' placeholder='Enter your email' type="email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <input className='border-2 bg-transparent border-blue-400 text-xl rounded-full px-5 py-3 mt-4 placeholder:text-gray-400 text-white outline-none' placeholder='Enter your password' type="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} />
                    <button className='px-6 py-2 text-lg text-white bg-blue-400 outline-none rounded-full mt-6'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login