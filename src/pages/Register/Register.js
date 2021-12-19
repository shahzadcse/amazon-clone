import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
     }

    return (
        <div className="register">
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="Amazon" className="register-logo" />
            </Link>
            <div className="register-container">
                <h1>Create account</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="primary" onClick={register} type="submit" >
                        Continue
                    </button>
                    <div className="detail">
                        <p>Already have an account?</p>
                        <Link to="/login" className="signin-link"><p >Sign In</p></Link>
                    </div>
                </form>
            </div>
            

        </div>
    )
}

export default Register
