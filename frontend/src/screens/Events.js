import React, { useEffect, useState } from 'react'
import RunEvents from "../components/RunEvents"
import { useDispatch, useSelector } from "react-redux"
import { getAllEvents, removeEvent } from "../actions/eventActions"


const Events = () => {


    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    const eventList = useSelector(state => state.allEvents)
    const { events } = eventList

    useEffect(() => {
        setIsLoading(true)
        dispatch(getAllEvents())
        // setIsLoading(false)
    }, [dispatch])

    const deleteEvent = async (e, id) => {
        e.preventDefault()
        dispatch(removeEvent(id))
        dispatch(getAllEvents())
        console.log(id)
    }





    return (
        <>
            <h1 className="event-title">Let's check out the upcoming events</h1>
            {isLoading &&
                <div className="all-events">
                    {

                        events.map(event => (<RunEvents event={event} deleteEvent={deleteEvent} />
                        ))
                    }


                </div>
            }
        </>

    )
}

export default Events
