import React from 'react';
import Timeline from '../components/Timeline';
import TeamProfiles from '../components/TeamProfiles';
import ClientReviews from '../components/ClientReviews';
import bgVideo from '../assets/background-video.mp4'


const Home = () => (
  <div className='overflow-x-hidden' >
    <video src={bgVideo} loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>
    <h1 className='text-4xl flex justify-center items-center h-screen '>Welcome to Zidio Development</h1>
    <Timeline />
    <TeamProfiles />
    <ClientReviews />
  </div>
);

export default Home;
