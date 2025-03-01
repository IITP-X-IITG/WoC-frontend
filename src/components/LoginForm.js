import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register/register.css';

export default function LoginForm() {
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formdata = new FormData(form);
        const final = {};
        for (const p of formdata) {
            final[p[0]] = p[1];
        }
        if (final["student_or_mentor"] === undefined) return alert("Please Select Your Role: Student or Mentor");
        const isstudent = final["student_or_mentor"] === 'student';
        delete final["student_or_mentor"];

        fetch(`/api/login/${isstudent?"students":"mentors"}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(final)
        }).then(async resp => {
            if (resp.ok) window.location.reload();
            else throw resp;
        }).catch(async resp => {
            let data = await resp.json();
            if ("message" in data) {
                alert(data.message);
            }else if (typeof data.error == "string") {
                alert(data.error);
            } else {
                alert(data.error[0].msg);
            }
        })
    };

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
                        <input className="login-radio" type="radio" name="student_or_mentor" id="isstudent" value="student"/>
                        <label className='login-label btn' htmlFor="isstudent"><div>Student</div></label>
                        <input className='login-radio' type="radio" name="student_or_mentor" id="ismentor" value="mentor"/>
                        <label className='login-label btn' htmlFor="ismentor"><div>Mentor</div></label>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}