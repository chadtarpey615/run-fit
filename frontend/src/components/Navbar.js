import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../actions/userActions"

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
                    <>
                        <li>Welcome {userInfo.data.name}</li>
                        <li><Link to="/calendar">Home</Link></li>
                        <li onClick={logoutHandler}><Link to="/login">Logout</Link></li>

                    </>
                ) :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Sign Up</Link></li>

                    </>
                }



            </nav>
        </>
    )
}

export default Navbar
