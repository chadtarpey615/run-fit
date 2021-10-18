import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllEvents } from "../actions/eventActions"
const Events = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const { data } = dispatch(getAllEvents())

        console.log(data)
    })
    return (
        <div>
            <h1>All Events</h1>
        </div>
    )
}

export default Events
