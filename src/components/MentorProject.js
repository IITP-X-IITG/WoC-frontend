import React, { useRef, useState, useEffect } from 'react';
import './Dashboard.css';

export default function MentorProject() {
    const [formData, setFormData] = useState({
        githubProfile: '',
        projectList: '',
        projectDetails:''
            
    });
    const githubProfileRef = useRef();
    const projectDetailsRef = useRef();
    const projectListRef = useRef();

    useEffect(() => {
        projectDetailsRef.current.style.height = 'auto';
        projectDetailsRef.current.style.height = projectDetailsRef.current.scrollHeight + 'px';
    });

    useEffect(() => {
        projectListRef.current.style.height = 'auto';
        projectListRef.current.style.height = projectListRef.current.scrollHeight + 'px';
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="dashboard-table-container">
            <div className="dashboard-form-container">
                <form className="form">
                    <div className="input-field">
                        <label>GitHub Profile URL</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="Enter your GitHub profile URL"
                            name="githubProfile"
                            required
                            value={formData.githubProfile}
                            onChange={handleChange}
                            ref={githubProfileRef}
                        />
                    </div>

                    <div className="input-field">
                        <label>List links to the projects that you wish to be a part of CodePeak</label>
                        <textarea
                            className="form-control"
                            style={{
                                height: projectListRef.current ? projectListRef.current.scrollHeight + 'px' : 'auto',
                            }}
                            placeholder="Enter project links"
                            name="projectList"
                            required
                            value={formData.projectList}
                            onChange={handleChange}
                            ref={projectListRef}
                        ></textarea>
                    </div>

                    <div className="input-field">
                        <label>Details about the project</label>
                        <textarea
                            className="form-control"
                            style={{
                                height: projectDetailsRef.current
                                    ? projectDetailsRef.current.scrollHeight + 'px'
                                    : 'auto',
                            }}
                            placeholder="Provide project details"
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            ref={projectDetailsRef}
                        ></textarea>
                    </div>

                    <div className="button-container">
                        <button className="btn btn-primary">Edit Details</button>
                    </div>
                </form>
            </div>
            <div className="dashboard-btn-container">
                <a className="btn btn-primary" href='/changePassword'>Change Password</a>
                <a className="btn btn-danger" href='/logout'>Log Out</a>
            </div>
            </div>
        </>
    );
}
