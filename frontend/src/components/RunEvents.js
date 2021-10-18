import React from 'react'

const RunEvents = ({ event }) => {

    return (
        <div >



            <section className="events">
                <i class="fa fa-5x fa-road" aria-hidden="true"></i>
                <h1>{event.name}</h1>
                <h4>{event.date}</h4>
                <h4>{event.distance}</h4>
                <button>Click here to view</button>
                <button>Remove event</button>
            </section>


        </div>
    )
}

export default RunEvents
