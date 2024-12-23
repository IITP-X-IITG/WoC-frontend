import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
export default function StudentForm() {
    return (
        <div className="form-container">
            <form className="form">
                <div className="input-field">
                    <label>Email*</label>
                    <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>

                <div className="input-field">
                    <label>First Name*</label>
                    <input type="text" className="form-control" placeholder="Enter your first name" required />
                </div>

                <div className="input-field">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter your last name" />
                </div>

                <div className="input-field">
                    <label>Contact No. (preferably Whatsapp)*</label>
                    <input type="tel" className="form-control" placeholder="Enter your contact number" required />
                </div>

                <div className="input-field">
                    <label>Email provided by your Institute</label>
                    <input type="email" className="form-control" placeholder="Enter your work email" />
                </div>

                <div className="input-field">
                    <label>University/Institute*</label>
                    <input type="text" className="form-control" placeholder="Enter your institute" required />
                </div>

                <div className="input-field">
                    <label>GitHub Profile URL*</label>
                    <input type="url" className="form-control" placeholder="Enter your GitHub profile URL" required />
                </div>

                <div className="input-field">
                    <label>GitLab Profile URL</label>
                    <input type="url" className="form-control" placeholder="Enter your GitLab profile URL" />
                </div>

                <div className="input-field">
                    <label>Other Profile URL(s) [Bitbucket/LinkedIn/Your Personal Website]</label>
                    <input type="url" className="form-control" placeholder="Enter other profile URLs" />
                </div>

                <div className="input-field">
                    <label>First time participating as a student in CodePeak/NWoC? (Yes / No)*</label>
                    <select className="form-control" required>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
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
