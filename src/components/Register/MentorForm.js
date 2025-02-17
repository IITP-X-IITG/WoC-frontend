import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css';
import { useNavigate } from 'react-router-dom';

export default function MentorForm() {
    let navigate = useNavigate();
    const [projectDetails, setProjectDetails] = useState("");
    const [projectList, setProjectList] = useState("");
    const projectDetailsRef = useRef();
    const projectListRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formdata = new FormData(form);
        const final = {};
        for (const p of formdata) {
            final[p[0]] = p[1];
        }
        fetch("/api/register/mentor", {
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
    };

    useEffect(() => {
        projectDetailsRef.current.style.height = 'auto';
        projectDetailsRef.current.style.height = projectDetailsRef.current.scrollHeight + 'px';
    }, [projectDetails]);

    useEffect(() => {
        projectListRef.current.style.height = 'auto';
        projectListRef.current.style.height = projectListRef.current.scrollHeight + 'px';
    }, [projectList]);

    const handleProjectDetailsChange = (e) => {
        setProjectDetails(e.target.value);
    };

    const handleProjectListChange = (e) => {
        setProjectList(e.target.value);
    };

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
                    <label>Contact No.*</label>
                    <input 
                        type="tel"
                        className="form-control"
                        placeholder="Enter your contact number"
                        name="phoneno"
                        pattern="[0-9]*"
                        maxLength="10"
                        onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        required 
                    />
                </div>

                <div className="input-field">
                    <label>University/Institute/Organization/Company*</label>
                    <input type="text" className="form-control" placeholder="Enter your organization" name="organization" required />
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
                    <label>Other Profile URL(s) [Bitbucket/LinkedIn/Your Personal Website]*</label>
                    <input type="url" className="form-control" placeholder="Enter other profile URLs" name="otherProfile" required/>
                </div>

                <div className="input-field">
                    <label>List links to the projects that you wish to be a part of CodePeak *</label>
                    <textarea
                        className="form-control"
                        style={{ height: projectListRef.current ? projectListRef.current.scrollHeight + 'px' : 'auto' }}
                        placeholder="Enter project links"
                        name="projectList"
                        required
                        value={projectList}
                        onChange={handleProjectListChange}
                        ref={projectListRef}
                    ></textarea>
                </div>

                <div className="input-field">
                    <label>Will you be reviewing PRs to these projects? (Yes / No / Maybe)*</label>
                    <select className="form-control" name="willReview" required>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Maybe">Maybe</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>First time participating as a mentor in CodePeak/NWoC? (Yes / No)*</label>
                    <select className="form-control" name="firstTime" required>
                        <option value="">Select</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>

                <div className="input-field">
                    <label>Details about the project</label>
                    <textarea
                        className="form-control"
                        style={{ height: projectDetailsRef.current ? projectDetailsRef.current.scrollHeight + 'px' : 'auto' }}
                        placeholder="Provide project details"
                        name="projectDetails"
                        value={projectDetails}
                        onChange={handleProjectDetailsChange}
                        ref={projectDetailsRef}
                    ></textarea>
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
