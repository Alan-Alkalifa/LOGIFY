import React from 'react'
import SideNav from '../component/SideNav';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className='flex'>
      <SideNav />
      <div className="flex justify-center items-center text-left" style={{ backgroundImage: "url('/main-bg.svg')", backgroundSize: 'cover', width: '100%', height: '100vh' }}>
      <div className="flex flex-1 justify-center items-center w-full">
        <div className="bg-[#B0578D] bg-opacity-60   text-black rounded-lg shadow-lg w-fit">

        <h1 className='text-2xl text-center text-white bg-pink-400 w-full'>Edit Profile</h1>
          <div className="flex flex-row items-center pb-4 text-black  ">
            <div className="bg-pink-2000 p-10 rounded-full">
              <p className='text-white'>Profile Picture</p>
              <Image src="/icon-profileAcc.svg" alt="logo" width={100} height={100} />
            </div>
            <div className='flex flex-col p-10 gap-4'>
            <button className="mt-2 bg-pink-500 text-white py-4 px-4 text-sm">Change Pic</button>
            <button className="mt-1 bg-pink-500 text-white py-4 px-4 text-sm">Delete</button>
            </div>
          </div>

          <form className="flex flex-col space-y-4 p-10 ">
            
            <p className=' text-white text-xl font-bold'>Nama</p>
            <input type="text" className="border p-2 rounded bg-white bg-opacity-75"/>
            <p className=' text-white text-xl font-bold'>Email</p>
            <input type="email" className="border p-2 rounded bg-white bg-opacity-75"/>
            <p className='text-white text-xl font-bold'>No Telp</p>

            <div className='flex justify-between gap-60'>
            <input type="tel" className="border p-2 rounded bg-white bg-opacity-75 w-[200px]"/>
            <button type="submit" className="bg-pink-500 text-white py-2 px-4 ">Save</button>
            </div>
          </form>

        </div>
      </div>



      </div>
    </div>
  )
}

export default Profile