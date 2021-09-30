import React from 'react'

const LoginScreen = () => {
    return (
        <div>

            <form className="login-form">
                <h1>Please Login </h1>
                <div className="email-input">
                    <label htmlFor="email">
                        <input type="text" name="email" placeholder="Please enter your email" />
                    </label>
                </div>
                <div className="password-input">
                    <label htmlFor="email">
                        <input type="text" name="password" placeholder="Please enter your password" />
                    </label>
                </div>
                <div className="submit-btn">
                    <button>Login</button>
                </div>


            </form>
        </div>
    )
}

export default LoginScreen
