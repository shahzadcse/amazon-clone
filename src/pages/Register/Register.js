import React, { useState, useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import './Register.css'
import { useSelector, useDispatch } from 'react-redux';
import { registerInitiate } from '../../redux/action';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let dispatch = useDispatch();

    const { user } = useSelector(state => state.data)

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');    
        }
          
    }, [user, navigate])
     
    const register = (e) => {

        e.preventDefault();
        dispatch(registerInitiate(email, password));
        setEmail("");
        setPassword("");
    };

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
