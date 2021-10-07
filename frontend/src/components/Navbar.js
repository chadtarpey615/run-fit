import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Sign Up</Link></li>
                <li><Link to="/">Home</Link></li>

            </nav>
        </>
    )
}

export default Navbar
