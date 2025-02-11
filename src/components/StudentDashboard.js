import React from 'react';
import './Dashboard.css';
import BTable from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const StudentDashboard = () => {
    return (
        <>
            <div className='dashboard-table-container'>
                <div className="dashboard-table">
                    <BTable responsive borderless hover>
                        <thead className="dashboard-thead">
                            <tr className="dashboard-tr">
                                <th className="dashboard-middle-id">Project Name</th>
                                <th className="dashboard-right-score">Your Score</th>
                            </tr>
                        </thead>
                        <tbody className="dashboard-tbody">
                            <tr className="dashboard-tr">
                                <td className="dashboard-middle-id">Sample Project#1</td>
                                <td className="dashboard-right-score">100</td>
                            </tr>
                        </tbody>
                    </BTable>
                </div>
                <div className="dashboard-btn-container">
                    <button className='btn btn-primary'>Change Password</button>
                    <button className='btn btn-danger'>Log Out</button>
                </div>
            </div>
        </>
    );
};

export default StudentDashboard;
