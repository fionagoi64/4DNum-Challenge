import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <section className="bg-white pt-12 ">
    <IoCloseOutline className="" />
    <div>
      <h3>Results</h3>
      <ul>
        <li className="active-nav">
          <img src="" alt="" />
          <h1> Dashboard </h1>
        </li>
      </ul>
    </div>
    <div>
      <h2>Install App</h2>
      <div className="flex gap-3">
        <img src="" alt="App Store" />
        <img src="" alt="APK" />
      </div>
    </div>
  </section>
  )
}

export default Sidebar;