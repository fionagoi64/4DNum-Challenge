import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import "react-datepicker/dist/react-datepicker.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

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

  const scrollToCard = (ref: HTMLDivElement | null) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };



  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar scrollToCard={scrollToCard} toggleDisplayMode={toggleDisplayMode} darkMode={darkMode} onSelectDate={handleDateSelect} />
      <Main selectedDate={selectedDate} />
    </div>
  );
}

export default App;
