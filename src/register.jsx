import React, {useState} from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && email && pass) {
            // REGISTER SUCCESSFUL
            /// NEW USER OBJ
            const newUser = { fullName: name, email, password: pass };

            /// PASS NEW USER TO USERS DATA
            props.onRegister(newUser);

        } else {
            // REGISTER UNSUCCESSFUL
            console.log("Please fill in all fields");
        }
    };

    return (
    <div className="auth-form-container">
        <h2>REGISTER</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">full name</label>
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="full name"
            id="name"
            name="name"
        />

        <label htmlFor="email">email</label>
        <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
        />

        <label htmlFor="password">password</label>
        <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="**********"
            id="password"
            name="password"
        />

        <button type="submit">Sign Up</button>
        </form>
        <button
        className="link-btn"
        onClick={() => props.onFormSwitch("login")}
        >
        Already have an account? Log in here.
        </button>
    </div>
    )
}