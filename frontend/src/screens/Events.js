import React, { useEffect, useState } from 'react'
import RunEvents from "../components/RunEvents"
import { useDispatch, useSelector } from "react-redux"
import { getAllEvents } from "../actions/eventActions"
const Events = () => {
    // const [event, setEvent] = useState()
    const dispatch = useDispatch()
    const eventList = useSelector(state => state.eventCreate)
    const { loading, event } = eventList
    console.log(event)
    useEffect(() => {
        dispatch(getAllEvents())
        // setEvent(eventList)
        // console.log(event)
    }, [dispatch])
    return (
        <div>
            {

                event.map(event => (


                    <RunEvents event={event} />



                ))
            }


        </div>
    )
}

export default Events
