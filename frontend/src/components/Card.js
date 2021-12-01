import React from 'react'
import "../style/Card.css"


const Card = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card
