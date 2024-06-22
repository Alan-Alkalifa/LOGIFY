import React from 'react'
import HomeNav from '../component/HomeNav';
import Image from 'next/image';

const Home = () => {
  return (
    <>
    <HomeNav/>
     <div className="flex flex-col bg-white font-body">
    <div style={{ backgroundImage: `url('/hero.png')`, height: '', width: '' }} alt="logo" className=" min-w-max h-full bg-gray-700 bg-opacity-50">
    <div class="container mx-auto px-4 py-8 flex flex-row items-center justify-arround">
        
    <div className='flex flex-col justify-start items-start'>
    <h1 class="text-4xl font-bold text-left px-4 py-2 rounded-md mx-auto mt-8 block text-white">Welcome To <br/> Reheal Massage</h1>
    <button class="bg-[#FCC5C0] text-white px-4 py-2 mx-4 rounded-md mt-8 self-start border-b-2 hover:border-b-2 hover:border-[#F40075]">Booking</button>
    </div>
    
    
    <div class="container mx-auto px-4 py-8 flex">
    <p class="text-base font-light text-left mt-4 text-white">After a busy day at work, if you feel tired, stressed and need a <br/> massage but you don't want to go out from your place.<br/> Have no worries, we will come to you! Just book us</p>
  </div>
  </div>
     </div>

     <div className="container mx-auto px-10 py-20 gap-10">
       <h2 className="text-2xl font-semibold text-center mb-6 text-black">Why Choose Us?</h2>
       <h3 className="text-sm  text-center mb-6 text-black">Advantages of ours Massage</h3>
       <div className="flex justify-around gap-10 w-full h-full py-20">
         <div className="flex flex-col items-center bg-white p-10 text-black text-wrap rounded-lg shadow-lg">
           <img src="/icon-profesional.svg" alt="Professional" className=" w-32 h-44"/>
           <h3 className="text-lg font-medium mt-2">PROFESSIONAL</h3>
           <p className="text-sm text-center mt-1">Reheal Spa Massage always provides professional services, attention is always number one.</p>
         </div>
         <div className="flex flex-col items-center bg-white p-10 text-black text-wrap rounded-lg shadow-lg">
           <img src="/icon-theraphist.svg" alt="Expert Therapist" className=" w-32 h-44"/>
           <h3 className="text-lg font-medium mt-2">EXPERT THERAPIST</h3>
           <p className="text-sm text-center mt-1">We have female therapists who are skilled and very well versed in professional massage techniques.</p>
         </div>
         <div className="flex flex-col items-center bg-white p-10 text-black text-wrap rounded-lg shadow-lg">
           <img src="/icon-thrusted.svg" alt="Trusted" className=" w-32 h-44"/>
           <h3 className="text-lg font-medium mt-2">TRUSTED</h3>
           <p className="text-sm text-center mt-1">During our 10 years of experience in on-call massage services, we've always provide top-notch service to gain customer trust.</p>
         </div>
         <div className="flex flex-col items-center bg-white p-10 text-black text-wrap rounded-lg shadow-lg">
           <img src="/icon-24h.svg" alt="24 Hours" className=" w-32 h-44"/>
           <h3 className="text-lg font-medium mt-2">24 HOURS</h3>
           <p className="text-sm text-center mt-1">We accept massage services for 24 hours to help tired customers so that relaxation can easily make reservations.</p>
         </div>
       </div>
     </div>

     <div className='flex flex-row justify-center'>
        <div className='flex flex-col items-center'>
            <Image src="/hero3.svg" width={600} height={450} alt="Professional" className=""/>
        </div>
        <div className='text-left text-black'>
            <h2 className='pt-24 px-2 text-[30px] text-[#FCC5C0]'>About Us</h2>
            <h1 className='pt-4 px-2 text-[30px] font-bold'>REHEAL MASSAGE</h1>
            <p className='pt-4  px-2 text-[15px]'>We have reliable and experienced therapists who are ready to <br/> serve you and provide a comfortable massage.</p>
            <button className='py-2 px-4 mx-2 mt-10 bg-[#FCC5C0] text-white border-b-2 hover:border-b-2 hover:border-[#F40075]'>Learn More</button>
        </div>
     </div>

<div className='flex justify-center w-full h-full py-20'>
    <Image src="/hero2.svg" width={1920} height={100} alt="Professional" className=""/>
</div>

       <div className="container mx-auto px-10 py-20 gap-10 justify-center items-center">
       <h2 className="text-sm font-semibold text-center mb-6 text-[#FCC5C0]">OUR SERVICES</h2>
       <h3 className="text-4xl font-bold  text-center mb-6 text-black">Popular Treatments</h3>
       <div className="flex justify-around gap-10 w-full h-full">
         <div className="flex flex-col items-center bg-white p-10 text-black text-wrap rounded-lg shadow-lg border-2 hover:border-[#FCC5C0]">
           <img src="/bg-service1.svg" alt="Professional" className="w-full h-44"/>
           <h3 className="text-lg font-medium mt-2">TRADITIONAL MASSAGE</h3>
           <p className="text-sm text-center mt-1">60, 90, or 120 minutes Full body massage Only out call for hotels & apartments.</p>
           <button className='py-4 px-4 mx-2 mt-3 bg-[#FCC5C0] text-white'>Booking</button>
         </div>
         <div className="flex flex-col items-center bg-white p-10 text-black text-wrap rounded-lg shadow-lg border-2 hover:border-[#FCC5C0]">
           <img src="/bg-service2.svg" alt="Expert Therapist" className="w-full h-44"/>
           <h3 className="text-lg font-medium mt-2">FACIAL MASSAGE</h3>
           <p className="text-sm text-center mt-1">60, 90, or 120 minutes Full face massage Only out call for hotels & apartments</p>
           <button className='py-4 px-4 mx-2 mt-3 bg-[#FCC5C0] text-white'>Booking</button>
         </div>
         <div className="flex flex-col items-center bg-white p-10 text-black text-wrap rounded-lg shadow-lg border-2 hover:border-[#FCC5C0]">
           <img src="/bg-service3.svg" alt="Trusted" className="w-full h-44"/>
           <h3 className="text-lg font-medium mt-2">TANTRIC MASSAGE</h3>
           <p className="text-sm text-center mt-1">60, 90, or 120 minutes Full body massage Only out call for hotels & apartments</p>
           <button className='py-4 px-4 mx-2 mt-3 bg-[#FCC5C0] text-white'>Booking</button>
         </div>
       </div>
       <div className="flex justify-center items-center py-10"> 
       <div className="flex flex-col items-center bg-[#C4C4C4] bg-opacity-50 rounded-lg shadow-lg p-6 w-[900px] h-[400px]">
         <img src="/icon-love.svg" alt="Testimonial" className="w-full h-24"/>
         <p className="text-center text-2xl mt-4 text-black py-10">What a great experience getting a very satisfying massage service</p>
         <p className="text-lg text-[#FCC5C0] mt-2">Smith</p>
         <p className="text-sm text-black ">Jakarta</p>
         <p className="text-2xl text-black ">.     .</p>
       </div>
     </div>

     <div className="flex justify-center items-center py-10"> 
       <div className="flex flex-col items-center bg-white bg-opacity-50 rounded-lg shadow-lg p-6 w-[900px] h-[400px]">
         <p className="text-center font-bold text-3xl mt-4 text-black py-10">WE ALWAYS PROVIDE THE BEST SERVICE FOR OUR CUSTOMERS</p>
         <p className="text-lg text-black text-center mt-2">Reheal Massage is more than just an escape and pleasure. We give a touch through a professional female therapist massage
that will make you feel tired, lethargic, tired, tired, less enthusiastic and the stress level in your body instantly disappears.</p>

<button className='py-4 px-4 mx-2 mt-3 bg-[#FCC5C0] border-b-2 hover:border-b-2 hover:border-[#F40075]'>Book Now</button>
       </div>
     </div>
     </div>

     <footer className="bg-[#F8F8F8] w-full m-auto p-auto flex justify-around items-center py-20 border-3 border-b border-[#F40075]">
       <div className="flex flex-col  p-4">
         <img src="/logo-footer.svg" alt="Reheal Massage Logo" className="w-32 h-32 py-2"/>
         <p className="text-sm text-left text-gray-600 mt-2">We are Jakarta Call Massage, Jakarta Private Massage, <br/> Massage Near Me, Hotel Massage Jakarta, Online <br/> Massage, ready to serve you 24 hours.</p>
       </div>
       <div className="flex flex-wrap justify-between mt-10">
         <div className="mr-20 flex flex-col gap-4">
           <h3 className="font-semibold text-gray-800">Navigation</h3>
           <ul className="flex flex-col text-gray-600 gap-2">
             <a href='/'>Home</a>
             <a href='/'>About</a>
             <a href='/'>Services</a>
             <a href='/'>Gallery</a>
             <a href='/'>Contact Us</a>
           </ul>
         </div>
         <div className='flex  flex-col gap-4'>
           <h3 className="font-semibold text-gray-800">Contact</h3>
           <div className='flex gap-2 items-center'>
           <img src="/icon-location-footer.svg" alt="Reheal Massage Logo" className="w-4 h-4"/>
           <a href='/' className="text-gray-600">Jakarta</a>
           </div>
           <div className='flex gap-2 items-center'>
           <img src="/icon-call-footer.svg" alt="Reheal Massage Logo" className="w-4 h-4"/>
           <a href='/' className="text-gray-600">+628561618089</a>
           </div>
           <div className='flex gap-2 items-center'>
           <img src="/icon-email-footer.svg" alt="Reheal Massage Logo" className="w-4 h-4"/>
           <a href='/' className="text-gray-600">info@rehealmassage.com</a>
           </div>
           <div className='flex gap-2 items-center'>
           <img src="/icon-time-footer.svg" alt="Reheal Massage Logo" className="w-4 h-4"/>
           <a href='/' className="text-gray-600">24/7</a>
           </div>
         </div>
       </div>
     </footer>




     </div>

     </>
  );
}

export default Home