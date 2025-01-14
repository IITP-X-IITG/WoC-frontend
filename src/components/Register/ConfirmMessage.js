import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { NavLink } from "react-router-dom";
export default function ConfirmMessage() {
    return (
        
        <div className="confirm-container">
            <h4>Registration Successful!</h4>
            <br/>
            You have successfully registered for CodePeak 2025.
            <NavLink to="/">
                <button className="btn btn-primary btn-apply return-button" type="button">
                    Return to Home
                </button>
            </NavLink>

        </div>
    );
}