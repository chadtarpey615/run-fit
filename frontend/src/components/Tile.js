import React from 'react'
import moment from 'moment'

const Tile = () => {
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


    const addEvent = (e) => {
        e.preventDefault();
        console.log(moment)

        console.log(e.target.outerText)
    }
    const layout = tiles.map((tile, index) => {
        return (
            <div className="tiles" key={index} value={moment} onMouseDown={addEvent}>
                {tile}
            </div>
        )
    })

    return layout;
}

export default Tile
