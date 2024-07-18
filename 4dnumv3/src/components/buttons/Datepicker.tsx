import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMonth, getYear, addDays } from "date-fns";
import { IoCalendarOutline } from "react-icons/io5";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const selectedDate = startDate.toISOString().split("T")[0];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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

  const currentDate = new Date(); // Get current date
  const maxSelectableDate = addDays(currentDate, 0); // Disable dates from tomorrow

  return (
    <div className="relative">
      <button
        className=" bg-navitem rounded-xl shadow-all"
        onClick={handleClick}
      >
        <div className="flex flex-row gap-2 items-center justify-center p-2 md:px-5 xl:px-10">
          <IoCalendarOutline className="text-lg text-gray-400" />
          <p className="text-sm font-semibold md:text-base text-gray-500">
            {" "}
            {selectedDate}
          </p>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-11">
          <div className="relative">
            <div className="absolute left-14 z-30 w-3 h-3 border-t-[0.2px] border-l-[0.2px] border-gray-500 bg-gray-100 transform rotate-45"></div>
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
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    >
                      {"<"}
                    </button>
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) =>
                        changeYear(Number(value))
                      }
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    >
                      {">"}
                    </button>
                  </div>
                )}
                selected={startDate}
                // onChange={handleDateChange} // Update handleDateChange function
                maxDate={maxSelectableDate} // Set the minimum selectable date
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
