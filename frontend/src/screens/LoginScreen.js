import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/userActions"
const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");


    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)


    useEffect(() => {
        console.log(userLogin)
    })
    const loginUser = (e) => {
        e.preventDefault();
        dispatch(
            login(email, password)
        )

        history.push(`/`)
    }

    return (
        <div>

            <form className="login-form" onSubmit={loginUser}>
                <h1>Please Login </h1>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="email" name="email" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="password-input">
                    <label htmlFor="email">
                        <input type="password" name="password" placeholder="Please enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="submit-btn">
                    <button type="submit">Login</button>
                    <Link to="/register">Need to sign up ...</Link>
                </div>


            </form>
        </div>
    )
}

export default LoginScreen
