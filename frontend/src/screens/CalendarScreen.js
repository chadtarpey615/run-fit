import React, { useState } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Tile from "../components/Tile"
import moment from 'moment'
// import { useDispatch, useSelector } from "react-redux"

const CalendarScreen = () => {

    const [selectDay, setSelectDay] = useState(null)

    const handleDay = (e) => {
        setSelectDay(e)
    }

    return (
        <>

            <DayPicker onDayClick={handleDay}

            />
            <button onClick={(e) => setSelectDay(null)}></button>
            {selectDay ? (
                <form className="run-form">
                    <h1>Add run event form </h1>

                    <div >
                        <label htmlFor="name" > </label>
                        <input type="text" placeholder="Add Event Name" />

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <input type="text" placeholder="Add Event Date" />

                    </div>
                    <div >
                        <label htmlFor="length" > </label>
                        <input type="text" placeholder="Add Event Total Distance" />

                    </div>
                    <div >
                        <button>Enter Event</button>

                    </div>
                </form>
            ) : <></>}
        </>
    )
}

export default CalendarScreen
