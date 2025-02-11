import React from 'react';
import './Dashboard.css';
import BTable from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const GivePoints = () => {
    return (
        <>
            <div className='dashboard-table-container'>
                <div className="dashboard-table">
                    <BTable responsive borderless hover>
                        <thead className="dashboard-thead">
                            <tr className="dashboard-tr">
                                <th className="dashboard-middle-id">GitHub ID</th>
                                <th className="dashboard-right-score">Score</th>
                            </tr>
                        </thead>
                        <tbody className="dashboard-tbody">
                            <tr className="dashboard-tr">
                                <td className="dashboard-middle-id">Sample ID#1</td>
                                <td className="dashboard-right-score">100</td>
                            </tr>
                        </tbody>
                    </BTable>
                </div>
            </div>
        </>
    );
};

export default GivePoints;
