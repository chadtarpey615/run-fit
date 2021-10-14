import React, { useState } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Tile from "../components/Tile"
import moment from 'moment'
// import { useDispatch, useSelector } from "react-redux"

const CalendarScreen = () => {

    const [selectDay, setSelectDay] = useState(null)
    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventDistance, setEventDistance] = useState("")

    // const handleDay = (e) => {
    //     setSelectDay(e)
    // }

    const enterEventHandler = (e) => {
        e.preventDefault()

        console.log(eventDate)
    }

    return (
        <>

            <DayPicker onDayClick={(e) => setSelectDay(e)}

            />
            <button onClick={(e) => setSelectDay(null)}></button>
            {selectDay ? (
                <form className="run-form" onSubmit={enterEventHandler}>
                    <h1>Add run event form </h1>

                    <div >
                        <label htmlFor="name" > </label>
                        <input type="text" placeholder="Add Event Name" onChange={(e) => setEventName(e.target.value)} />

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <input type="text" placeholder={`Event Date ${selectDay}`} onMouseEnter={(e) => setEventDate(selectDay)} clicked />

                    </div>
                    <div >
                        <label htmlFor="distance" > </label>
                        <input type="text" placeholder="Add Event Total Distance" onChange={(e) => setEventDistance(e.target.value)} />

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
