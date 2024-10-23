import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/zidio-logo.png';

const Navbar = () => (
  <nav className='flex flex-row justify-between pt-7 pb-7 items-center bg-stone-300 sticky top-0 z-10'>

  <nav className='flex flex-row justify-between pt-7 pb-7 items-center bg-stone-300 sticky top-0'>
    <img className='w-44 ml-10' src={logo} alt="" />
    <ul className='flex justify-evenly w-2/5'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/careers">Careers</Link></li>
    </ul>
  </nav>
  </nav>
);

export default Navbar;
