import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/userActions"

import "../style/login.css"
const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)


    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)


    useEffect(() => {
        console.log(userLogin)
    })
    const loginUser = async (e) => {
        e.preventDefault();

        try {
            if (!email || !password) {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000)

            } else {
                dispatch(
                    login(email, password)
                )
                history.push(`/calendar`)

            }



        } catch (error) {

        }
    }

    return (
        <div className="login-container">

            <form onSubmit={loginUser}>
                <p className="login-heading">Please Login </p>
                {error && (
                    <div><h3 style={{ color: "red" }}>Please fill out all forms </h3></div>
                )}
                <div className="login-box" >
                    <p>Email</p>

                    <div>
                        <label htmlFor="email">
                            <input type="email" name="email" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <p>Password</p>

                    <div >
                        <label htmlFor="email">
                            <input type="password" name="password" placeholder="Please enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div >
                        <button className="login-btn" type="submit">
                            Login
                        </button>
                        <p className="text">Don't have an account? <Link className="login-link" to="/register">Sign Up</Link></p>
                    </div>
                </div>


            </form>



        </div>
    )
}

export default LoginScreen
