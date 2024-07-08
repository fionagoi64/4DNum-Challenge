import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import "react-datepicker/dist/react-datepicker.css"
import { MdLightMode } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode")
    if (!savedMode) {
      const savedMode = "light"
      setDarkMode(false)
      localStorage.setItem("displayMode", savedMode)
    } setDarkMode(savedMode === 'dark' ? true : false)
  }, [])

  const toggleDisplayMode = () => {
    setDarkMode(!darkMode)
  }


  return (
    <div className={`${darkMode ? "dark" : ""}`}>

      <div className='absolute z-30'>
        <div className="flex gap-3 items-center ">
          {darkMode ? <MdLightMode className="text-xl" /> : <AiFillMoon className="text-xl" />}
          <h1 className="text-sm">{` ${darkMode ? "Light Mode" : "Dark Mode"}`}</h1>
          <button onClick={toggleDisplayMode}>
            <div className={`relative w-7 h-4 rounded-full ${darkMode ? "bg-gray-200" : "bg-purple"}`}>
              <div className={`absolute h-3 w-3 bg-white rounded-full ${darkMode ? "left-0" : "right-0"}`} />
            </div>
          </button>
        </div>
      </div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
