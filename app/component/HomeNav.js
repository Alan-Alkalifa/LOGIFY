import React from 'react'
import Image from 'next/image'

const HomeNav = () => {
  return (
    <nav className="bg-white text-black p-4">
      <ul className="flex flex-wrap justify-center items-center py-4">
        <li className="mr-6 flex flex-row items-center gap-1 border-white border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-home.svg" alt="logo" width={20} height={20} />
          <a href="/home">HOME</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-white border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-profile.svg" alt="logo" width={20} height={20} />
          <a href="/profile">PROFILE</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-white border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-services.svg" alt="logo" width={20} height={20} />
          <a href="/#">SERVICE</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-white border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-orders.svg" alt="logo" width={20} height={20} />
          <a href="/orders">ORDERS</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-white border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-booking.svg" alt="logo" width={20} height={20} />
          <a href="/booking">BOOKING</a>
        </li>
      </ul>
    </nav>
  )
}

export default HomeNav