import React, { useState } from 'react'

const RegisterScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const registerUser = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <div>
            <form className="register-form" onSubmit={registerUser}>
                <h1>Please Sign up </h1>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="name" name="name" placeholder="Please enter your name" value={name} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="email" name="email" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="email" name="email" placeholder="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen
