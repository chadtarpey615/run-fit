import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../actions/userActions"
import logo from "../style/images.jpeg"
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
                    <div className="navbar-container">
                        <div className="navbar-logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <ul className="navbar-left">
                            <li>Welcome {userInfo.data.name || "User"}</li>
                            <li><Link className="link" to="/calendar">Home</Link></li>
                        </ul>


                        <ul className="navbar-right">

                            <li onClick={logoutHandler}><Link className="link" to="/login">Logout</Link></li>
                        </ul>
                    </div>
                ) :
                    <div className="navbar-container">
                        <div className="navbar-logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <ul className="navbar-left">
                            <li><Link className="link" to="/">Home</Link></li>
                        </ul>
                        <ul className="navbar-right">
                            <li><Link className="link" to="/login">Login</Link></li>
                            <li><Link className="link" to="/register">Sign Up</Link></li>
                        </ul>
                    </div>
                }



            </nav>
        </>
    )
}

export default Navbar
