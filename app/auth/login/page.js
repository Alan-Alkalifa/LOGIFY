'use client'
import React, { useState } from 'react';
import Image from "next/image";

const Login = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  const handleLogin = () => {
    if (username && password) {
      window.location.href = "/home";
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <>    
    <div className='bg-white'><Image src="/logo-main.svg" alt="Spa logo" width={150} height={150} className='mx-5' /></div>
    <div className="flex justify-end items-center" style={{ backgroundImage: "url('/main-bg.svg')", backgroundSize: 'cover', width: '100%', height: '100vh' }}>
      <div className="flex justify-center w-fit h-fit px-4 mx-10">
      <div className="flex justify-center items-center">
      <div className="w-full bg-white rounded-2xl shadow-xl p-8 m-20 bg-opacity-60">
        <div className="text-left flex justify-between gap-10">
            <div>
          <h1 className="text-xl text-gray-900 mb-4">Welcome to Reheal Massage</h1>
          <h2 className="text-5xl font-semibold text-[#FF71D7] mb-6">Log in</h2>
            </div>
            <div>
            <a href='/auth/register' className="text-sm text-gray-900 mb-4 text-wrap">No Account?<br/> Sign Up</a>
            </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-6">
          <button className="border rounded-full p-2 border-gray-300 text-[#4285F4] flex gap-4">
            <Image src="/icon-google.svg" alt="Google" width={24} height={24} />
            Sign In with Google
          </button>
          <button className="border rounded-full p-2 border-gray-300">
            <Image src="/icon-facebook.svg" alt="Facebook" width={24} height={24} />
          </button>
          <button className="border rounded-full p-2 border-gray-300">
            <Image src="/icon-apple.svg" alt="Facebook" width={24} height={24} />
          </button>
        </div>
        <div className="flex flex-col gap-4">
            <p className="text-sm text-gray-900">Enter your username or email address</p>
          <input
            required
            type="text"
            placeholder="Enter your username or email address"
            className="border rounded-lg p-3 border-gray-300 w-full ring-1 text-black ring-gray-300 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="text-sm text-gray-900">Enter your password</p>
          <input
            required
            type="password"
            placeholder="Enter your Password"
            className="border rounded-lg p-3 border-gray-300 w-full ring-1 text-black ring-gray-300 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-end items-end mt-6 gap-10">
        <a href="/auth/forgot-password" className="text-sm text-[#4285F4]">Forgot Password?</a>
          <button onClick={handleLogin} className="bg-[#EE9BF0] text-white rounded-lg px-20 py-2">Log in</button>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>

  )
}

export default Login;
