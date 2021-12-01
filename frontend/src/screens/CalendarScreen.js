import React, { useState, useEffect } from 'react'
import DayPicker from 'react-day-picker';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createEvent } from "../actions/eventActions"
import { getAllEvents } from "../actions/eventActions"
import 'react-day-picker/lib/style.css';
import "../style/calendarScreen.css"

const CalendarScreen = () => {
    const dispatch = useDispatch()

    const [selectDay, setSelectDay] = useState(null)
    const [eventName, setEventName] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventDistance, setEventDistance] = useState("")
    const [user, setUser] = useState(null)




    const activeUser = useSelector(state => state.userLogin)
    const { userInfo } = activeUser




    const enterEventHandler = async (e) => {

        await dispatch(createEvent({
            name: eventName,
            date: eventDate,
            distance: eventDistance,
            creator: userInfo.data.name
        }))

        setEventDate("")
        setEventDistance("");
        setEventName("")
        e.preventDefault()

    }

    const clearInputs = (e) => {

        setEventDate("")
        setEventDistance("");
        setEventName("")
        e.preventDefault()


    }

    // const eventList = useSelector(state => state.allEvents)
    // const { events } = eventList

    // console.log(events)
    // useEffect(() => {
    //     dispatch(getAllEvents())


    // }, [dispatch])

    return (
        <section className="calendar-container">
            <div className="calender-left">
                <h1>Run Fit</h1>

                <DayPicker onDayClick={(e) => setSelectDay(e)}

                />
                <div className="event-btn">
                    <button className="clear-btn" onClick={clearInputs}>Clear Input</button>
                    <Link to="/all-events"><button className="show-btn">See all Events</button></Link>
                </div>
            </div>


            <div className="calendar-right">
                <form className="run-form" onSubmit={enterEventHandler}>
                    <h1>Add run event form </h1>

                    <div >
                        <label htmlFor="name" > </label>
                        <input type="text" placeholder="Add Event Name" onChange={(e) => setEventName(e.target.value)} />

                    </div>
                    <div >
                        <label htmlFor="date" > </label>
                        <input type="text" placeholder={`date: ${selectDay}`} onMouseEnter={(e) => setEventDate(selectDay)} />

                    </div>
                    <div >
                        <label htmlFor="distance" > </label>
                        <input type="text" placeholder="Add Event Total Distance" onChange={(e) => setEventDistance(e.target.value)} />

                    </div>
                    <div >
                        <button>Enter Event</button>

                    </div>
                </form>
            </div>


        </section>
    )
}

export default CalendarScreen
