import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../actions/userActions"

import "../style/navbar.css"

const Navbar = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    // useEffect(() => {
    //     console.log(userLogin)
    // })
    return (
        <>
            <nav className="navbar">

                {userInfo ? (
                    <div className="nav-links">
                        <li>Welcome {userInfo.data.name}</li>

                        <ul className="nav-menu">
                            <li><Link to="/calendar">Home</Link></li>
                            <li onClick={logoutHandler}><Link to="/login">Logout</Link></li>
                        </ul>
                    </div>
                ) :
                    <div className="nav-links">
                        <ul className="nav-menu">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Sign Up</Link></li>
                        </ul>
                    </div>
                }



            </nav>
        </>
    )
}

export default Navbar
