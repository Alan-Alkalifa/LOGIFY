'use client'
import React, { useState } from 'react';
import Image from "next/image";

const Register = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [email, setEmail] = useState(''); // State for username
  const [contact, setContact] = useState(''); // State for password

  const handleRegister = () => {
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
          <h2 className="text-5xl font-semibold text-[#FF71D7] mb-6">Sign Up</h2>
            </div>
            <div>
            <a href='/auth/login' className="text-sm text-gray-900 mb-4 text-wrap">Have an Account?<br/> Login</a>
            </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-900">Enter your username or email address</p>
          <input
            required
            type="email"
            placeholder="Enter your username or email address"
            className="border rounded-lg p-3 border-gray-300 w-full ring-1 text-black ring-gray-300 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <div className='flex flex-row gap-2'>
        
         <div className='flex flex-col gap-2'>   
          <p className="text-sm text-gray-900">Username</p>
          <input
            required
            type="text"
            placeholder="Username"
            className="border rounded-lg p-3 border-gray-300 w-full ring-1 text-black ring-gray-300 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
            </div>
        
         <div className='flex flex-col gap-2'>
          <p className="text-sm text-gray-900">Contact Number </p>
          <input
            required
            type="number"
            placeholder="Contact Number"
            className="border rounded-lg p-3 border-gray-300 w-full ring-1 text-black ring-gray-300 focus:ring-blue-500"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          </div>

          </div>
          <p className="text-sm text-gray-900">Enter your Password</p>
          <input
            required
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3 border-gray-300 w-full ring-1 text-black ring-gray-300 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-end items-end mt-10 gap-10">
          <button onClick={handleRegister} className="bg-[#EE9BF0] text-white rounded-lg px-20 py-2">Sign Up</button>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>

  )
}

export default Register;
