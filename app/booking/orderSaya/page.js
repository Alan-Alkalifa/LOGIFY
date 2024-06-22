import React from 'react';
import SideNav from '../../component/SideNav';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link at the top of your file

const OrderSaya = () => {
  return (
    <div className='flex'>
      <SideNav />
      <div className="flex justify-center items-center text-left" style={{ backgroundImage: "url('/main-bg.svg')", backgroundSize: 'cover', width: '100%', height: '100vh' }}>
    <div className='flex justify-center items-center h-screen rounded-lg'>
      <div className="bg-[#B0578D] bg-opacity-50 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex justify-between mb-4">
          <Link href="/booking" className='bg-[#B0578D] bg-opacity-20 hover:bg-slate-500 text-white py-2 px-4 w-full text-center'>
            <p className="">Order Baru</p>
          </Link>
          <Link href="/booking/orderSaya" className='bg-[#B0578D] bg-opacity-20 hover:bg-slate-500 text-white py-2 px-4 w-full text-center'>
            <p className="">Order Saya</p>
          </Link>
        </div>
        <div>
        
        <div className='flex flex-row'>

            <div className='w-full p-2 flex items-center justify-center flex-col'>
                <Image src="/icon-profileAcc.svg" width={100} height={100} alt="Profile" className="object-cover" />
                <h1 className='gap-2'>Vina Putriani</h1>
                <p className='gap-4 text-center'>Your order has been taken by Vina Putriyani Please wait!</p>
                <div className='flex flex-row gap-4'>
                  <button><Image src="/icon-whatsaap.svg" width={50} height={50} alt="Phone" className="object-cover"/></button>
                  <button><Image src="/icon-chat.svg" width={50} height={50} alt="Location" className="object-cover"/></button>
                </div>
                <button className='p-3 bg-[#E5358B] m-4'>
                    Rp. 120.000
                </button>
            </div>


            <div className='w-full p-2'>
                <Image src="/icon-map.svg" width={50} height={50} alt="Map" className="w-full object-cover" />
            </div>
        </div>




        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default OrderSaya;