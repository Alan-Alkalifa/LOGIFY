'use client'
import React, { useState } from 'react';
import SideNav from '../component/SideNav';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link at the top of your file

const Order = () => {
  const [rating, setRating] = useState(0); // Add state to track the rating

  return (
    <div className='flex'>
      <SideNav />
      <div className="flex justify-center items-center text-left" style={{ backgroundImage: "url('/main-bg.svg')", backgroundSize: 'cover', width: '100%', height: '100vh' }}>
    <div className='flex justify-center items-center h-screen rounded-lg'>
      <div className="bg-[#B0578D] bg-opacity-50 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex justify-center text-2xl bg-[#B0578D]">
         <h1>Riwayat Pemesanan</h1>
        </div>
        <div className='flex flex-col items-center justify-center p-4 bg-[#B0578D] bg-opacity-50'>
          <div className='w-full max-w-4xl rounded-lg'>
            <div className='flex justify-stretch items-center text-black gap-60'>
            <div className='text-center text-[#B0578D] text-opacity-0 '>
                <p className='text-sm'>Friday, 14 Jun, 18:44</p>
                <p className='text-sm'>Order F-336274656</p>
              </div>
              <div className='flex items-center'>
                <Image src="/icon-profileAcc.svg" width={100} height={100} alt="Profile" className="object-cover rounded-full p-2 bg-pink-500" />
              </div>
              <div className='text-center text-white'>
                <p className='text-sm'>Friday, 14 Jun, 18:44</p>
                <p className='text-sm'>Order F-336274656</p>
              </div>
            </div>
          </div>
          <div className='m-4 text-center items-center justify-center'>
                  <h1 className='text-xl'>Vina Putriyani</h1>
                  <p className='text-sm'>Your order was fulfilled by Vina Putriyani</p>
                  <p className='text-sm'>Thank you for booking us!</p>
                  <p className='text-sm'>How was the massage?</p>
                  <div className="flex items-center justify-center">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <svg
                      key={index}
                      onClick={() => setRating(index)} // Add onClick handler to set the rating
                      className={`w-10 h-10 ${index <= rating ? 'text-yellow-500' : 'text-gray-300'} fill-current`} // Change color based on rating
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.5 3.3 1-5.7L1 8.6l5.8-.8L10 3l2.2 4.8 5.8.8-4.2 3.9 1 5.7z" />
                    </svg>
                  ))}
                </div>
                <h2 className="text-lg text-left  text-black">Order details</h2> 
               <div className="flex flex-col p-4 mt-3 bg-pink-100 bg-opacity-50 rounded-lg shadow-lg">
                    <div className="flex flex-col items-start justify-between w-full p-2">
                       <div className="flex flex-col text-left items-left w-full mb-4">
                         <span className="text-sm text-gray-600">Location</span>
                         <input type="text" placeholder="Serpong Park Cluster Brilliance" className="text-sm p-2 border text-black border-gray-300 rounded"  />
                       </div>
                       <div className="flex flex-col text-left items-left w-full mb-4">
                     <span className="text-sm text-gray-600">Purchase</span>
                         <input type="text" placeholder="Facial Massage" className="text-sm p-2 border text-black border-gray-300 rounded"  />
                       </div>
                       <div className="flex flex-row text-center items-left w-full mb-4 gap-4">
                        <div className='flex justify-between flex-row gap-60'>
                         <span className="text-sm text-gray-600">Price</span>
                         <span className="text-sm text-gray-600">120,000</span>
                         </div>
                         
                         <div className='w-[150px]'>
                         <button className="w-full bg-[#E5358B] text-white py-2 px-4 rounded hover:bg-[#B0578D]/80 transition duration-300">Re Order</button>
                         </div>
                    </div>
                </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Order;
