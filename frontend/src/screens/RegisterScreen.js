import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { register } from "../actions/userActions"


const RegisterScreen = ({ history }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")


    const dispatch = useDispatch()

    const registerUser = (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert("passwords does not match")
        } else {
            dispatch(register(name, email, password))
            history.push("/home")
        }
    }
    return (
        <div>
            <form className="register-form" onSubmit={registerUser}>
                <h1>Please Sign up </h1>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="name" name="name" placeholder="Please enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="email" name="email" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="password" name="password" placeholder="Please enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="password" name="password2" placeholder="Please verify your password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    </label>
                </div>
                <div className="submit-btn">
                    <button type="submit">Register</button>
                    <Link to="/">Have an account, click here to login.</Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen
