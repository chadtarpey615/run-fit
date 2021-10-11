import React from 'react'
import Tile from "../components/Tile"
import moment from 'moment'
const CalendarScreen = () => {
    return (
        <>
            <h1 className="title">Run Fit Calendar</h1>
            <div className="date">
                {moment().format('MMMM ')}
            </div>
            <div className="blocks">
                <Tile date={moment()} />
            </div>
        </>
    )
}

export default CalendarScreen
