import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { getMonth, getYear } from 'date-fns';
import { IoCalendarOutline } from "react-icons/io5";

const DatePickerComponent = () => {

    const [isCalendarOpen, SetisCalendarOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const range = (start: number, end: number, step = 1) => {
        let arr = [];
        for (let i = start; i < end; i += step) {
            arr.push(i);
        }
        return arr;
    };

    const years = range(1985, getYear(new Date()) + 1, 1);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handleCalendar = () => {
        SetisCalendarOpen(!isCalendarOpen)
    }

    return (
        <div className='flex z-20 justify-center'>
            <DatePicker
                customInput={
                    <button onClick={handleCalendar} className="w-52 white-bg font-semibold text-dark-grey rounded-xl py-2 border-[0.5px] border-gray-100 shadow-md hover:border-blue-indigo hover:text-blue-indigo">
                        <div className='flex flex-row gap-5 justify-center items-center'>
                            <IoCalendarOutline className='text-lg' />
                            <p className='pt-[0.8px] pr-1'>2024-07-05</p>
                        </div>
                    </button>}
                renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                    <div style={{ margin: 10, display: "flex", justifyContent: "center", gap: "20px" }}>
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            {"<"}
                        </button>
                        <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(Number(value))}>
                            {years.map((option: number) => (
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
                            {months.map((option: string, index: number) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {">"}
                        </button>
                    </div>
                )}
                selected={startDate}
                onChange={(date: Date | null) => {
                    if (date) {
                        setStartDate(date);
                    }

                }}


            />
        </div >
    );
};

export default DatePickerComponent;
