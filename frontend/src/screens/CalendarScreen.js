import React from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Tile from "../components/Tile"
import moment from 'moment'
// import { useDispatch, useSelector } from "react-redux"

const CalendarScreen = () => {
    return (
        <>
            {/* <h1 className="title">Run Fit Calendar</h1>
            <div className="date">
                {moment().format('MMMM ')}
            </div>
            <div className="blocks">
                <Tile />
            </div> */}
            <DayPicker />
        </>
    )
}

export default CalendarScreen
