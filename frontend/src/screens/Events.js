import React, { useEffect, useState } from 'react'
import RunEvents from "../components/RunEvents"
import { useDispatch, useSelector } from "react-redux"
import { getAllEvents } from "../actions/eventActions"
const Events = () => {
    // const [event, setEvent] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllEvents())
        // setEvent(eventList)
        // console.log(event)
    }, [dispatch])

    const eventList = useSelector(state => state.eventCreate)
    const { loading, event } = eventList
    console.log(event)

    return (
        <>
            <h1 className="event-title">Let's check out the upcoming events</h1>
            <div className="all-events">
                {

                    event.map(event => (


                        <RunEvents event={event} />



                    ))
                }


            </div>
        </>
    )
}

export default Events
