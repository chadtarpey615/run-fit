import React from 'react'

const CalendarScreen = () => {

    const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    blocks.map((day) => {
        return (
            <div className="blocks">
                {day}
            </div>
        )
    })
    return (
        <div>
            {blocks}
        </div>
    )
}

export default CalendarScreen
