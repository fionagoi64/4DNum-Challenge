import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { getMonth, getYear, addDays } from "date-fns"; // Import addDays
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Datepicker = ({
  onSelectDate,
}: {
  onSelectDate: (date: Date) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState(new Date());
  const selectedDate = startDate.toISOString().split("T")[0];

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

  const currentDate = new Date(); // Get current date
  const maxSelectableDate = addDays(currentDate, 0); // Disable dates from tomorrow

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      onSelectDate(date);
      setIsOpen(false);
    }
  };

  return (
    <div id="date-picker" className="relative">
      <button
        className="bg-nav_item rounded-xl shadow-all border border-picker_border hover:border-picker_hover hover:transition hover:duration-300 "
        onClick={handleClick}
      >
        <div className="flex flex-row gap-2 items-center justify-center p-2 md:px-5 xl:px-10 text-picker_text hover:text-picker_hover hover:transition hover:duration-300 font-semibold">
          <IoCalendarOutline className="text-lg" />
          {selectedDate}
        </div>
      </button>
      {isOpen && (
        <div className="absolute top-11">
          <div className="relative">
            <div className="absolute left-20 z-30 w-3 h-3 border-t-[0.2px] border-l-[0.2px] border-gray-500 bg-gray-100 transform rotate-45"></div>
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
                      <IoIosArrowBack />
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
                      <IoIosArrowForward />
                    </button>
                  </div>
                )}
                selected={startDate}
                onChange={(date) => handleDateChange(date)} // Update handleDateChange function
                maxDate={maxSelectableDate} // Set the minimum selectable date
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
