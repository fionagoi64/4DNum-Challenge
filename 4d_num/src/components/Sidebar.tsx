import React from 'react'
import { LuMenuSquare } from "react-icons/lu";

import { IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <section className="xl:block fixed top-0 -z-10 hidden bg-white w-full max-w-72 h-screen py-20 px-8 rounded-r-[60px]">
    <div>
      <h1 className="font-bold text-xs pt-4">Results</h1>
      <ul>
        <li className="flex gap-2 items-center py-3 hover:bg-light-grey hover:rounded-md">
          {/* <img src={nav_icon} alt="" /> */}
          <LuMenuSquare />
          <a href="/" className="text-sm text-dark-grey">
            Dashboard
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h1 className="font-bold text-xs pt-4">Install App</h1>
      <div className="flex items-center gap-2">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  </section>
  )
}

export default Sidebar;