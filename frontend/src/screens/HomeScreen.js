import React from 'react'
import { Link } from "react-router-dom"
const HomeScreen = () => {
    return (
        <div className="main-heading">
            <header className="heading">
                Welcome to Run-Fit
            </header>

            <div className="main-btn">
                <Link to="/login"><button>LogIn</button></Link>
                <Link to="/register" ><button>SignUp</button></Link>
            </div>
        </div>
    )
}

export default HomeScreen
