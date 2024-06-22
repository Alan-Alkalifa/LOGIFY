'use client'
import React from 'react';
import Image from "next/image";

const SideNav = () => {
  const navigate = (path) => {
    window.location.href = path;
  }

  return (
    <div className="bg-[#EFC0C0] min-h-screen h-full w-60 text-black  flex flex-col items-start px-10 py-8 space-y-10 ">
      {/* Logo or title at the top */}
      <div className="">
        <Image src="/logo-main.svg" alt="Reheal Massage" width={100} height={100} />
      </div>
      {/* Navigation links */}
      <li className="mr-6 flex flex-row items-center gap-1 border-[#EFC0C0] border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-home.svg" alt="logo" width={20} height={20} />
          <a href="/home">HOME</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-[#EFC0C0] border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-profile.svg" alt="logo" width={20} height={20} />
          <a href="/profile">PROFILE</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-[#EFC0C0] border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-services.svg" alt="logo" width={20} height={20} />
          <a href="/#">SERVICE</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-[#EFC0C0] border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-orders.svg" alt="logo" width={20} height={20} />
          <a href="/orders">ORDERS</a>
        </li>
        <li className="mr-6 flex flex-row items-center gap-1 border-[#EFC0C0] border-b-2 hover:border-b-2 hover:border-[#F40075]">
          <Image src="/icon-booking.svg" alt="logo" width={20} height={20} />
          <a href="/booking">BOOKING</a>
        </li>
    </div>
  );
}

export default SideNav;