
import React from 'react'
import service1 from '../assets/service-1.png'
import service2 from '../assets/service-2.png'
import service3 from '../assets/service-3.png'
import service4 from '../assets/service-4.png'
import service5 from '../assets/service-5.png'
import service6 from '../assets/service-6.png'

function JobListings() {
  return (
    <div className='py-20 services '>
      <p className='text-center text-lg text-indigo-600'>IT Support For Business</p>
      <h2 className='text-center text-4xl font-bold text-white pb-7 pt-6'>What we are offering</h2>
    <div className='flex justify-center items-center h-screen gap-6 my-6 flex-wrap'>
      <div className='w-96 h-96 flex flex-col justify-center gap-y-5 items-start border px-9 bg-slate-100 isolate relative rounded-md overflow-y-hidden before:absolute before:w-full before:h-full before:bg-indigo-500 before:-top-full before:left-0 before:duration-500 before:-z-10 before:hover:top-0 hover:text-white '>
        <img src={service1} alt="" />
        <h3 className='text-2xl font-bold'>Graphic Design</h3>
        <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
        <button className=''>Read More</button>
      </div>
      <div className='w-96 h-96 flex flex-col justify-center gap-y-5 items-start border px-9 bg-slate-100 isolate relative rounded-md overflow-y-hidden before:absolute before:w-full before:h-full before:bg-indigo-500 before:-top-full before:duration-500 before:left-0 before:-z-10 hover:before:top-0 hover:text-white '>
        <img src={service2} alt="" />
        <h3 className='text-2xl font-bold'>Cloud Solutions</h3>
        <p>Deliver scalable cloud solutions to enhance your business's flexibility and operational efficiency.</p>
        <button className=''>Read More</button>

      </div>
      <div className='w-96 h-96 flex flex-col justify-center gap-y-5 items-start border px-9 bg-slate-100 isolate relative rounded-md overflow-y-hidden before:absolute before:w-full before:h-full before:bg-indigo-500 before:-top-full before:duration-500 before:left-0 before:-z-10 hover:before:top-0 hover:text-white '>
        <img src={service3} alt="" />
        <h3 className='text-2xl font-bold'>Web Development</h3>
        <p>Design and build responsive, high-performance websites using the latest web technologies.</p>
        <button className=''>Read More</button>

      </div>
      <div className='w-96 h-96 flex flex-col justify-center gap-y-5 items-start border px-9 bg-slate-100 isolate relative rounded-md overflow-y-hidden before:absolute before:w-full before:h-full before:bg-indigo-500 before:-top-full before:duration-500 before:left-0 before:-z-10 hover:before:top-0 hover:text-white '>
        <img src={service4} alt="" />
        <h3 className='text-2xl font-bold'>Digital Marketing</h3>
        <p>Boost your online presence with tailored digital marketing strategies that drive engagement and growth</p>
        <button className=''>Read More</button>

      </div>
      <div className='w-96 h-96 flex flex-col justify-center gap-y-5 items-start border px-9 bg-slate-100 isolate relative rounded-md overflow-y-hidden before:absolute before:w-full before:h-full before:bg-indigo-500 before:-top-full before:duration-500 before:left-0 before:-z-10 hover:before:top-0 hover:text-white '>
        <img src={service5} alt="" />
        <h3 className='text-2xl font-bold'>3D Vector Illustration</h3>
        <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
        <button className=''>Read More</button>

      </div>
      <div className='w-96 h-96 flex flex-col justify-center gap-y-5 items-start border px-9 bg-slate-100 isolate relative rounded-md overflow-y-hidden before:absolute before:w-full before:h-full before:bg-indigo-500 before:-top-full before:duration-500 before:left-0 before:-z-10 hover:before:top-0 hover:text-white '>
        <img src={service6} alt="" />
        <h3 className='text-2xl font-bold'>Hosting Services</h3>
        <p>Monotonectally synergize grants to business visualize strategic infomediaries</p>
        <button className=''>Read More</button>

      </div>
      
    </div>
    </div>
  ) 
}

export default JobListings

