import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register/register.css';

export default function ChangePasswordForm() {
    const handleSubmit = (event) => {};

    return (
        <div className="login-container">
            <form className="form" onSubmit={handleSubmit}>
                

                <div className="input-field">
                    <label>Old Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your old password"
                        name="password"
                        required
                    />
                </div>
                <div className="input-field">
                    <label>New Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your new password"
                        name="password"
                        required
                    />
                </div>
                <div className="input-field">
                    <label>Confirm New Password*</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm your new password"
                        name="password"
                        required
                    />
                </div>

                <div className="button-container">
                    
                    <button type="submit" className="btn btn-primary login-btn">
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
}
