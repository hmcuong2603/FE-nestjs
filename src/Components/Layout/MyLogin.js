import React, { useState } from 'react';
import './MyLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Store/apiRequest';
export default function MyLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        loginUser(newUser, dispatch, navigate)
    }
    return (
        <>
            <div className='container-login' >
                <div className='content-login'>
                    <h1 className='wlc'>Log In</h1>
                    <h3 className='wlc-b'>login here using your email and password</h3>
                    <form className="form-tab-register tab-login" onSubmit={handleSubmit}>
                        <div className="Fieldset">
                            <label className="Label" htmlFor="email">Email:</label>
                            <input className="Input" type="email" name="email" value={email} onChange={handleEmailChange} required />
                        </div>
                        <div className="Fieldset">
                            <label className="Label" htmlFor="password">Password:</label>
                            <input className="Input" type="password" name="password" autocomplete="on" value={password} onChange={handlePasswordChange} required />
                        </div>
                        <div className='err-input'>
                            {/* {error && <p className='err-login'>{error}</p>} */}
                        </div>
                        <button className=" btn-btnlogin" type="submit">Log in</button>
                        <div className='rg-fg'>
                            <Link className='btn-lock btn-rg' to="/register">Register</Link>
                            <Link className='btn-lock btn-rg' to="/forgot">Forgot Password</Link>
                        </div>
                        <span className="or-singin or-login">Or Sing In with ?</span>
                        <div className="face face-login">
                            <div className="sing-or"><i className="fa-brands fa-facebook-f"></i>FaceBook</div>
                            <div className="sing-or"><i className="fa-brands fa-twitter"></i>Twitter</div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
}