import React from 'react'
import { Link } from "react-router-dom"

import "../style/homeScreen.css"
import logo from "../style/download.jpeg"


const HomeScreen = () => {
    return (
        <div className="main">
            <div className="main-heading">
                <header className="heading">
                    Welcome to Run-Fit
                    <span className="header-line"></span>
                    <p className="header-text">Where the running community comes together</p>

                </header>
                <div className="header-image">
                    <img src={logo} alt="" />
                </div>



            </div>
            <div className="main-btn">
                <Link to="/login"><button>LogIn</button></Link>
                <Link to="/register" ><button>SignUp</button></Link>
            </div>
        </div>
    )
}

export default HomeScreen
