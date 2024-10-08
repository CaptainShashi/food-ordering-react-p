import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt='Close' 
                    />
                </div>

                <div className='login-popup-inputs'>
                    {
                        currState === 'Sign Up' && 
                        <input 
                            type='text' 
                            placeholder='Your name' 
                            required 
                        />
                    }
                    <input 
                        type='email' 
                        placeholder='Your email' 
                        required 
                    />
                    <input 
                        type='password' 
                        placeholder='Your password' 
                        required 
                    />
                </div>

                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>

                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p>By continuing I agree to the terms of use & Privacy Policy</p>
                </div>

                {
                    currState === 'Login' ?
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Click Here</span></p>
                }
            </form>
        </div>
    );
}

export default Login;
