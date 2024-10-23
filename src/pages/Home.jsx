import React from 'react';
import bgVideo from '../assets/background-video.mp4'
import JobListings from '../components/JobListings';


const Home = () => (
  <>
  <div className='overflow-x-hidden bg-video relative w-full h-screen' >
    <video src={bgVideo} loop autoPlay muted className='object-cover h-full w-full -z-10 opacity-20'></video>
    <div className='text-4xl w-3/6 flex justify-center absolute left-20 gap-y-6 top-0 h-screen flex-col text-white'>
      <h5 className='text-lg'>Software Development & Consultancy</h5>
      <h2 className='text-6xl'>Business Innovation
      Through Technology</h2>
      <p className='text-lg'>Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
        <div className='flex gap-x-4 mt-4'>
          <button class="btn w-36 h-14 relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-500 rounded hover:bg-indigo-500 group py-1.5 px-2.5">
      <span class="w-56 h-48 rounded bg-white absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative w-full text-center text-white transition-colors duration-300 ease-in-out group-hover:text-indigo-500">Lets Talk</span>
      </button>
          <button class="btn w-36 h-14 relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-500 rounded hover:bg-indigo-500 group py-1.5 px-2.5">
      <span class="w-56 h-48 rounded bg-white absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
      <span class="relative w-full text-center text-white transition-colors duration-300 ease-in-out group-hover:text-indigo-500">Read More</span>
      </button>
          
        </div>
      </p>
    </div>
  </div>
    <JobListings/>
  </>
  )



export default Home;
