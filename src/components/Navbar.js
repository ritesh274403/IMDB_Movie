import React from 'react'
import logo from "../pngwing.com.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className='border pl-12 flex space-x-8 items-center py-4'>
    <img className='w-[50px] md:w-[80px]' src={logo} width={50} height={50}></img>
    <Link to="/" className='text-blue-400 font-bold text-xl md:text-3xl'>Home</Link>
    <Link to="favourites" className='text-blue-400 font-bold text-xl md:text-3xl'>Favourites</Link>

    </div>
    </>
  )
}

export default Navbar