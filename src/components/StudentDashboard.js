import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import BTable from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const StudentDashboard = ({ gitHub, email }) => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        // If we have a GitHub URL, fetch the student's projects
        if (gitHub) {
            // You can implement an API call here to fetch projects based on gitHub
            // For now, we'll just use the existing sample data
            setProjects([
                { name: "Sample Project#1", score: 100 }
                // This would normally be populated from an API call
            ]);
        }
    }, [gitHub]);
    
    return (
        <>
            <div className='dashboard-table-container'>
                {email && (
                    <div className="text-light mb-3">
                        <strong>Email:</strong> {email}
                    </div>
                )}
                
                <div className="dashboard-table">
                    <BTable responsive borderless hover>
                        <thead className="dashboard-thead">
                            <tr className="dashboard-tr">
                                <th className="dashboard-middle-id">Project Name</th>
                                <th className="dashboard-right-score">Your Score</th>
                            </tr>
                        </thead>
                        <tbody className="dashboard-tbody">
                            {projects.map((project, index) => (
                                <tr className="dashboard-tr" key={index}>
                                    <td className="dashboard-middle-id">{project.name}</td>
                                    <td className="dashboard-right-score">{project.score}</td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr className="dashboard-tr">
                                    <td className="dashboard-middle-id" colSpan="2">No projects found</td>
                                </tr>
                            )}
                        </tbody>
                    </BTable>
                </div>
                <div className="dashboard-btn-container">
                    <a className="btn btn-primary" href='/changePassword'>Change Password</a>
                    <a className="btn btn-danger" href='/logout'>Log Out</a>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;
