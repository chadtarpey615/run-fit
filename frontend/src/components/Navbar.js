import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <li><Link to="/">Home</Link></li>
                <li>Login</li>
                <li>Sign Up</li>



            </nav>
        </>
    )
}

export default Navbar
