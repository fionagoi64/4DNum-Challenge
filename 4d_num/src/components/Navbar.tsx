import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { GrLanguage } from "react-icons/gr";
import { MdLightMode } from "react-icons/md";
import { GrRefresh } from "react-icons/gr";
import logos from "../img/magnum-small.svg";


const Navbar = () => {
  return (
  
    <nav className='bg-white py-3 px-3 md:rounded-none md:static rounded-b-3xl absolute z-10 w-full'>
        {/* web view */}
        <div></div>

        {/* tablet view */}
        <div className='md:flex xl:hidden hidden justify-between'>
            {/* nav icon */}
            <button>
            <RxHamburgerMenu className='icon' />
            </button>
            {/* 4D logo */}
            {/* logos */}
            {/* date */}
            {/* refresh */}
            <button className='bg-blue-indigo rounded-full p-3'>
            <GrRefresh className='bg-blue-indigo text-white'/>
            </button>
            {/* theme toggle */}
            <div className='flex items-center '>
              <MdLightMode className='icon'/>
              <h1>Light Mode</h1>
            </div>
            {/* language */}
            <button>
            <GrLanguage className='icon'/>
            </button>
        </div>

         {/* mobile view */}
         <div className='md:hidden flex justify-between rounded-b-2xl'>
            <img src={logos} alt=''></img>
        </div>
    </nav>
  )
}

export default Navbar;