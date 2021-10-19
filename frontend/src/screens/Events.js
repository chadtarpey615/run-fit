import React, { useEffect, useState } from 'react'
import RunEvents from "../components/RunEvents"
import { useDispatch, useSelector } from "react-redux"
import { getAllEvents } from "../actions/eventActions"
const Events = () => {
    // const [event, setEvent] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEvents())



    }, [dispatch])
    const eventList = useSelector(state => state.allEvents)
    const { events } = eventList



    console.log(events)





    return (
        <>
            <h1 className="event-title">Let's check out the upcoming events</h1>
            <div className="all-events">
                {

                    events.map(event => (


                        <RunEvents event={event} />



                    ))
                }


            </div>
        </>
    )
}

export default Events
