import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear, addDays, isSameMonth, isSameYear } from "date-fns";
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Datepicker = ({
  onSelectDate,
}: {
  onSelectDate: (date: Date) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const selectedDate = startDate.toISOString().split("T")[0];

  const datePickerRef = useRef<HTMLDivElement | null>(null);

  const range = (start: number, end: number, step = 1) => {
    let arr = [];
    for (let i = start; i < end; i += step) {
      arr.push(i);
    }
    return arr;
  };

  const years = range(1985, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const maxSelectableDate = addDays(new Date(), 0);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      onSelectDate(date);
      setIsOpen(false);
    }
  };

  const handleMonthChange = (date: Date) => {
    setCurrentDate(date);
  };

  // Function to filter dates based on the displayed month and year
  const filterDates = (date: Date) => {
    return isSameMonth(date, currentDate) && isSameYear(date, currentDate);
  };

  // Effect for detecting clicks outside the date picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="date-picker" className="relative" ref={datePickerRef}>
      <button
        className="bg-white-100 rounded-xl shadow-all border border-transparent 
        text-gray-400 hover:text-purple-300  hover:border-purple-300 hover:transition hover:duration-300 
        dark:bg-gray-600 dark:text-gray-100 dark:hover:text-white-100 dark:hover:border-white-100"
        onClick={handleClick}
      >
        <div className="flex flex-row gap-2 items-center justify-center p-2 md:px-5 xl:px-10 font-semibold">
          <IoCalendarOutline className="text-lg" />
          {selectedDate}
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-11">
          <div className="relative">
            <div className="absolute left-20 z-30 w-3 h-3 border-t-[0.2px] border-l-[0.2px] border-gray-300 bg-white-400 transform rotate-45"></div>
            <div className="absolute top-[6.5px]">
              <DatePicker
                inline
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    <button
                      onClick={() => {
                        decreaseMonth();
                        const newDate = new Date(date);
                        newDate.setMonth(date.getMonth() - 1);
                        handleMonthChange(newDate);
                      }}
                      disabled={prevMonthButtonDisabled}
                    >
                      <IoIosArrowBack />
                    </button>
                    <select
                      className="bg-white-300"
                      value={getYear(date)}
                      onChange={({ target: { value } }) => {
                        const newDate = new Date(date);
                        changeYear(Number(value));
                        newDate.setFullYear(Number(value));
                        handleMonthChange(newDate);
                      }}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      className="bg-white-300"
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) => {
                        const newDate = new Date(date);
                        changeMonth(months.indexOf(value));
                        newDate.setMonth(months.indexOf(value));
                        handleMonthChange(newDate);
                      }}
                    >
                      {months.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => {
                        increaseMonth();
                        const newDate = new Date(date);
                        newDate.setMonth(date.getMonth() + 1);
                        handleMonthChange(newDate);
                      }}
                      disabled={nextMonthButtonDisabled}
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>
                )}
                selected={startDate}
                onChange={(date) => handleDateChange(date)}
                maxDate={maxSelectableDate}
                filterDate={filterDates}
                disabledKeyboardNavigation
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
