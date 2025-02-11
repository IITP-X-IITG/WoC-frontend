import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register/register.css';

export default function LoginForm() {
    const handleSubmit = (event) => {};

    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" name="email" required />
                </div>

                <div className="input-field">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        name="password"
                        required
                    />
                </div>

                <div className="button-container">
                    <div className="login-radio-container">
                    <input className="login-radio" type="radio" name="payment" id="card"/>
                    <label className='login-label btn' htmlFor="card"><div>Student</div></label>
                    <input className='login-radio' type="radio" name="payment" id="cash" />
                    <label className='login-label btn' htmlFor="cash"><div>Mentor</div></label>

                    </div>
                    <button type="submit" className="btn btn-primary login-btn">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
