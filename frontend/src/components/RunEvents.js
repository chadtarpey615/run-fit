import React, { useEffect } from 'react'

const RunEvents = ({ event }) => {
    useEffect(() => {
        console.log(event)
    }, [])
    return (
        <div>




            <>
                <h1>{event.name}</h1>
                <h4>{event.date}</h4>
                <h4>{event.distance}</h4>
            </>
                    )

        </div>
    )
}

export default RunEvents
