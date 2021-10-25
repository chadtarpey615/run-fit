import React, { useState, useEffect } from 'react'
import DayPicker from 'react-day-picker';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createEvent } from "../actions/eventActions"
import { getAllEvents } from "../actions/eventActions"
import 'react-day-picker/lib/style.css';
import Tile from "../components/Tile"
import moment from 'moment'

const CalendarScreen = () => {
    const dispatch = useDispatch()

    const [selectDay, setSelectDay] = useState(null)
    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventDistance, setEventDistance] = useState("")
    // const regex = /T/i
    // const handleDay = (e) => {
    //     setSelectDay(e)
    // }

    const enterEventHandler = (e) => {
        e.preventDefault()

        dispatch(createEvent({
            name: eventName,
            date: eventDate.toLocaleDateString(),
            distance: eventDistance
        }))
    }

    // const eventList = useSelector(state => state.allEvents)
    // const { events } = eventList

    // console.log(events)
    // useEffect(() => {
    //     dispatch(getAllEvents())


    // }, [dispatch])

    return (
        <>

            <DayPicker onDayClick={(e) => setSelectDay(e)}

            />
            <div className="event-btn">
                <button className="clear-btn" onClick={(e) => setSelectDay(null)}>Clear Input</button>
                <Link to="/all-events"><button className="show-btn">See all Events</button></Link>
            </div>
            {selectDay ? (
                <form className="run-form" onSubmit={enterEventHandler}>
                    <h1>Add run event form </h1>

                    <div >
                        <label htmlFor="name" > </label>
                        <input type="text" placeholder="Add Event Name" onChange={(e) => setEventName(e.target.value)} />

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <input type="text" placeholder={`Event Date ${selectDay}`} onMouseEnter={(e) => setEventDate(selectDay)} />

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
