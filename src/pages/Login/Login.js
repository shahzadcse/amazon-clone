import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();


    }


    return (
        <div className="login">
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="Amazon" className="login-logo" />    
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={ signIn } className=" primary">
                        Sign In
                    </button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p> 
            </div>
            <p>New to Amazon ?</p>
            <Link to='/register'>
               <button  className="login-register"> Create your Amazon Account </button>
            </Link>
        </div>
    )
}

export default Login
