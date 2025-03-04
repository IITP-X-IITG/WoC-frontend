import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { useNavigate } from 'react-router-dom';

export default function StudentForm() {
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        
        event.preventDefault();
        const form = event.target;
        const formdata = new FormData(form);
        const final = {};
        for (const p of formdata) {
            final[p[0]] = p[1];
        }
        fetch("/api/register/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(final)
        }).then(resp => resp.json()).then(data => {
            if ("message" in data) {
                navigate('/register/confirmation');
            } else {
                if (typeof data.error == "string") {
                    alert(data.error);
                } else {
                    alert(data.error[0].msg);
                }
            }
        });
        
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label>Email*</label>
                    <input type="email" className="form-control" placeholder="Enter your email" name="email" required />
                </div>

                <div className="input-field">
                    <label>Password*</label>
                    <input type="password" className="form-control" placeholder="Enter your password" name="password" required />
                </div>

                <div className="input-field">
                    <label>First Name*</label>
                    <input type="text" className="form-control" placeholder="Enter your first name" name="firstname" required />
                </div>

                <div className="input-field">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter your last name" name="lastname" />
                </div>

                <div className="input-field">
                    <label>Contact No. (preferably Whatsapp)*</label>
                    <input type="tel" className="form-control" placeholder="Enter your contact number" name="phoneno" required />
                </div>

                <div className="input-field">
                    <label>Email provided by your Institute</label>
                    <input type="email" className="form-control" placeholder="Enter your work email" name="instituteEmail" required />
                </div>

                <div className="input-field">
                    <label>University/Institute*</label>
                    <input type="text" className="form-control" placeholder="Enter your institute" name="institute" required />
                </div>

                <div className="input-field">
                    <label>GitHub Profile URL*</label>
                    <input type="url" className="form-control" placeholder="Enter your GitHub profile URL" name="githubProfile" required />
                </div>

                <div className="input-field">
                    <label>GitLab Profile URL</label>
                    <input type="url" className="form-control" placeholder="Enter your GitLab profile URL" name="gitlabProfile" />
                </div>

                <div className="input-field">
                    <label>Other Profile URL(s) [Bitbucket/LinkedIn/Your Personal Website]</label>
                    <input type="url" className="form-control" placeholder="Enter other profile URLs" name="otherProfile" />
                </div>

                <div className="input-field">
                    <label>First time participating as a student in CodePeak/NWoC? (Yes / No)*</label>
                    <select className="form-control" name="firstTime" required>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>

                <div className="button-container">
                    <button type="submit" className="btn btn-primary submit-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
/* vi: set et sw=4: */
