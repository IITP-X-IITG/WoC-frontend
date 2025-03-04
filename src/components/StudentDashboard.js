import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const StudentDashboard = ({ github, email }) => {
  const [projects, setProjects] = useState([]);
  const giturl = github;

  useEffect(() => {
    if (giturl) {
      const fetchProjects = async () => {
        try {
          const response = await fetch(`/api/transactions/student-project?student=${encodeURIComponent(giturl)}`);
          const responseData = await response.json();
          if (responseData.data) {
            setProjects(
              responseData.data.map((item) => ({
                name: item.project,
                score: item.points,
              }))
            );
          }
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };
      fetchProjects();
    }
  }, [github]);

  return (
    <>
      <div className='dashboard-table-container'>
        {email && (
          <div className="text-light mb-3 text-center">
            <strong>Email:</strong> {email}
          </div>
        )}
        
        <h4 className="text-light text-center mb-3">Project Name</h4>
        
        <div className="dashboard-table">
          <div className="dashboard-thead">
            <div className="dashboard-tr">
              <div className="dashboard-middle-id">Project Name</div>
              <div className="dashboard-right-score">Your Score</div>
            </div>
          </div>
          <div className="dashboard-tbody">
            <div className="dashboard-tr" style={{ flexDirection: 'column', width: '100%' }}>
              {projects.length === 0 ? (
                <div style={{ display: 'flex', width: '100%' }}>
                  <div className="dashboard-middle-id">No projects found</div>
                  <div className="dashboard-right-score"></div>
                </div>
              ) : (
                projects.map((project, index) => (
                  <div key={index} style={{ display: 'flex', width: '100%' }}>
                    <div className="dashboard-middle-id">{project.name}</div>
                    <div className="dashboard-right-score">{project.score}</div>
                  </div>
                ))
              )}
            </div>
          </div>
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