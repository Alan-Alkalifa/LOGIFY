import React from 'react';
import SideNav from '../component/SideNav';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link at the top of your file

const Booking = () => {
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
          <form className='p-3'>
          <div className=' bg-pink-200 bg-opacity-50 rounded-lg p-3'>
            <label className="text-white text-lg ">Alamat</label>
            <br/>
            <input type="text" className="border p-2 rounded bg-pink-200 bg-opacity-20 w-[800px] mb-4 text-black"/>
            <br/>
            
            <br/>
            <select className="border p-2 rounded bg-pink-200 bg-opacity-20 w-[500px] mb-4 text-black">
              <option>Pilih Layanan</option>
              <option>Traditional Massage</option>
              <option>Facial Massage</option>
              <option>Tantic Massage</option>

            </select>
            
            <br/>
            
            <br/>
            <select className="border p-2 rounded bg-pink-200 bg-opacity-20 w-[500px] mb-4 text-black">
              <option>Pilih Durasi</option>
              <option>60 Menit</option>
              <option>90 Menit</option>
              <option>120 Menit</option>
              <option>150 Menit</option>
            </select>
            <br/>
            
            <br/>
            <select className="border p-2 rounded bg-pink-200 bg-opacity-20 w-[500px] mb-4 text-black">
              <option>Pilih Jenis Kelamin</option>
              <option>Pria</option>
              <option>Wanita</option>
            </select>
            </div>

             <div className='flex flex-col py-3'>
             waktu peminjaman
             <div className='flex gap-10'>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="checkbox1" name="checkbox1" value="Checkbox1" className="mr-2"/>
              <label htmlFor="checkbox1">Saat ini</label>
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" id="checkbox2" name="checkbox2" value="Checkbox2" className="mr-2"/>
              <label htmlFor="checkbox2">Reservasi</label>
            </div>
            </div>
            </div>

            
            <select className="border p-2 rounded bg-[#B0578D] bg-opacity-20 w-full mb-4">
              <option>Pilih Preferensi</option>
            </select>
          </form>
        </div>

        <div className='flex justify-between'>
        <div className='flex justify-start items-center w-full px-3 text-xs'>
        Dengan mengirimkan data pribadi, saya setuju dengan penggunaan dan pengolahannya.
        </div>
         <div className="flex justify-end gap-4 p-5">
          <button type="button" className="bg-[#F393DE] text-white py-2 px-14 rounded-lg">RP.0</button>
          <button type="button" className="bg-[#F393DE] text-white py-2 px-14 rounded-lg">Mememesan</button>
        </div>
        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default Booking;