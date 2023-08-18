import React, { useState } from "react";


export const Login = (props) => {
    const { users, onFormSwitch, onLogin, onRecoveryFormSwitch } = props;
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    // SEARCH FOR USER CREDENTIALS IN DATABASE
    const user = users.find((u) => u.email === email);

    if (user && user.password === pass) {
        // LOGIN SUCCESSFUL
        console.log("Logged in:", email);

        // UPDATE APP'S STATE
        onLogin(user);
    } else {
        // LOGIN UNSUCCESSFUL
        console.log("Wrong credentials")
    }
    }

    return (
    <div className="auth-form-container">
        <h2>LOGIN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
        />

        <label htmlFor="password">Password</label>
        <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="**********"
            id="password"
            name="password"
        />

        <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => onFormSwitch('register')}>
        Don't have an account? Register here.
        </button>

        <button className="link-btn" onClick={onRecoveryFormSwitch}>
        Forgot Password? Click here.
        </button>
    </div>
    );
};