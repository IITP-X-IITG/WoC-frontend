import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export default function MentorDashboard({ mentorGit, email }) {
  const [projects, setProjects] = useState([]);
  const [issues, setIssues] = useState([]);
  const [pullRequests, setPullRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [projectData, setProjectData] = useState({});
  const [groupedProjects, setGroupedProjects] = useState({});

  // Use the mentorGit prop instead of hardcoding
  const mentorGitUrl = mentorGit || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/transactions/mentor-project?mentor=${encodeURIComponent(mentorGitUrl)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const result = await response.json();

        console.log(result);
        // Parse and organize data
        const projectGroups = {};
        const projectDataMap = {};

        result.data.forEach(item => {
          // Extract project URL and name
          const repoName = item.project.split('/')[4];
          
          // Group projects by name
          if (!projectGroups[repoName]) {
            projectGroups[repoName] = {
              name: repoName,
              urls: new Set([item.project])
            };
          } else {
            projectGroups[repoName].urls.add(item.project);
          }

          if (!projectDataMap[repoName]) {
            projectDataMap[repoName] = {
              issues: [],
              pullRequests: []
            };
          }

          // Create formatted item
          const formattedItem = {
            id: item._id,
            number: parseInt(item.project.split('/').pop()), // Extract number from URL
            points: item.points,
            url: item.project  // Store the full URL for linking
          };

          // Sort into issues or PRs
          if (item.type === 'issues') {
            projectDataMap[repoName].issues.push(formattedItem);
          } else if (item.type === 'pull') {
            projectDataMap[repoName].pullRequests.push(formattedItem);
          }
        });

        // Convert grouped projects to array
        const groupedProjectsList = Object.values(projectGroups);
        
        // Update state
        setGroupedProjects(projectGroups);
        setProjects(groupedProjectsList);
        setProjectData(projectDataMap);

        // Set first project as active by default if available
        if (groupedProjectsList.length > 0) {
          const firstProject = groupedProjectsList[0];
          setActiveProject(firstProject.name);
          setIssues(projectDataMap[firstProject.name]?.issues || []);
          setPullRequests(projectDataMap[firstProject.name]?.pullRequests || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (mentorGitUrl) {
      fetchData();
    }
  }, [mentorGitUrl]);

  const handleModalOpen = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleProjectClick = (projectName) => {
    setActiveProject(projectName);
    setIssues(projectData[projectName]?.issues || []);
    setPullRequests(projectData[projectName]?.pullRequests || []);
  };

  return (
    <div className="d-flex">

      {/* Sidebar with transparent background */}
      <div className="border-end" style={{
        width: '250px',
        minHeight: '50vh',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)'
      }}>
        <div className="p-3"></div>
        <h5 className="text-white mb-4" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>Projects</h5>
        <div className="list-group">
          {projects.map((project) => (
            <div
              key={project.name}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              style={{
                background: project.name === activeProject ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                borderRadius: '12px',
                padding: '16px 20px',
                margin: '8px 0',
                cursor: 'pointer'
              }}
              onClick={() => handleProjectClick(project.name)}
            >
              <span>{project.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the parent onClick
                  handleModalOpen(project.name);
                }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  padding: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '3px',
                  paddingTop: '3px'
                }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></div>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></div>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'white' }}></div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <Container fluid className="">
          {activeProject ? (
            <>
              <h4 className="text-white mt-3 mb-4">Project: {activeProject}</h4>
              <Row className="g-4">
                {/* Issues Column */}
                <Col md={6}>
                  <Card>
                    <Card.Header>Issues</Card.Header>
                    <Card.Body>
                      <ul className="list-group">
                        {issues.length > 0 ? (
                          issues.map((issue) => (
                            <li
                              key={issue.id}
                              className="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <div className="d-flex align-items-center">
                                <span className="fw-bold">Issue #{issue.number}</span>
                                <Button 
                                  variant="outline-secondary" 
                                  size="sm" 
                                  className="ms-2"
                                  as="a" 
                                  href={`${issue.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaGithub />
                                </Button>
                              </div>
                              <Form.Control
                                type="number"
                                value={issue.points}
                                onChange={() => { }}
                                placeholder="Points"
                                style={{ width: '70px' }}
                              />
                            </li>
                          ))
                        ) : (
                          <p className="text-muted">No issues found for this project.</p>
                        )}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Pull Requests Column */}
                <Col md={6}>
                  <Card>
                    <Card.Header>Pull Requests</Card.Header>
                    <Card.Body>
                      <ul className="list-group">
                        {pullRequests.length > 0 ? (
                          pullRequests.map((pr) => (
                            <li
                              key={pr.id}
                              className="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <div className="d-flex align-items-center">
                                <span className="fw-bold">Pull #{pr.number}</span>
                                <Button 
                                  variant="outline-secondary" 
                                  size="sm" 
                                  className="ms-2"
                                  as="a" 
                                  href={`${pr.url}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaGithub />
                                </Button>
                              </div>
                              <Form.Control
                                type="number"
                                value={pr.points}
                                onChange={() => { }}
                                placeholder="Points"
                                style={{ width: '70px' }}
                              />
                            </li>
                          ))
                        ) : (
                          <p className="text-muted">No pull requests found for this project.</p>
                        )}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-center h-100">
              <p className="text-muted">Select a project to view details</p>
            </div>
          )}
        </Container>
      </div>

      {/* Add Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your modal content here */}
          <div className="d-grid gap-2">
            <Button variant="outline-primary">View Project Details</Button>
            <Button variant="outline-secondary">Edit Project</Button>
            <Button variant="outline-danger">Remove Project</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
