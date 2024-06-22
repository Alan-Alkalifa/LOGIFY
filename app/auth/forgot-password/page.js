'use client'
import React from 'react';
import Image from "next/image";

const ForgotPassword = () => {
  const [email, setEmail] = React.useState(''); // State to hold the email input

  const handleContinue = () => {
    if (email) {
      window.location.href = '/auth/login'; // Use window.location for redirection
    } else {
      alert('Please fill in your email.'); // Alert if email is empty
    }
  };

  return (
    <div className="flex justify-center items-center text-left" style={{ backgroundImage: "url('/main-bg.svg')", backgroundSize: 'cover', width: '100%', height: '100vh' }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 m-4 bg-opacity-90">
        <div className="flex flex-col">
            <div className='flex justify-center items-center'>
          <Image src="/logo-main.svg" alt="Reheal Massage" width={100} height={100} />
          </div>
          <h1 className="text-3xl font-medium text-black mt-4 text-left">Forgot password</h1>
          <p className="text-sm text-gray-600 mt-2">Enter your email for the verification process, we will send a 4 digits code to your email.</p>
          <p className="text-sm text-gray-600 mt-5 text-left">Email</p>
          <input
              required
              type="email"
              placeholder="Enter email"
              className="border rounded-lg p-3 border-gray-300 w-full mt-4 ring-1 text-black ring-gray-300 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Set email state on change
            />
            <button
              className="bg-[#EE9BF0] text-white rounded-lg px-20 py-2 mt-4"
              onClick={handleContinue} // Add onClick event handler
            >
              Continue
            </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;