import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { register } from "../actions/userActions"

import "../style/register.css"

const RegisterScreen = ({ history }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [error, setError] = useState(false)



    const dispatch = useDispatch()

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            if (password !== password2) {
                setError(true)

            }
            if (email || name === "") {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000)
            }
            else {
                dispatch(register(name, email, password))
                // history.push("/calendar")
            }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="register-container">


            <form onSubmit={registerUser}>
                <p className="register-heading">Create Account</p>
                {error && (
                    <div><h4 style={{ color: "red" }}>Sorry user already exist or invalid credentials </h4></div>
                )}
                <div className="register-box">
                    <p>Name</p>
                    <div >
                        <label htmlFor="name">
                            <input type="name" name="name" placeholder="Please enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    <p>Email</p>
                    <div >
                        <label htmlFor="email">
                            <input type="email" name="email" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <p>Password</p>
                    <div >
                        <label htmlFor="password">
                            <input type="password" name="password" placeholder="Please enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <p>Confirm Password</p>
                    <div >
                        <label htmlFor="password">
                            <input type="password" name="password2" placeholder="Please verify your password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                        </label>
                    </div>
                    <div >
                        <button className="register-btn" type="submit">Register</button>
                    </div>
                    <p className="text">
                        Have an account, click here to <Link className="register-link" to="/login">Login.</Link>
                    </p>
                </div>
            </form>


        </div>
    )
}

export default RegisterScreen


