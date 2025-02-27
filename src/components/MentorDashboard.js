import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

export default function MentorDashboard() {
  const [projects, setProjects] = useState([]);
  const [issues, setIssues] = useState([]);
  const [pullRequests, setPullRequests] = useState([]);

  const mentorGit = "https://github.com/HelloSniperMonkey/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/transactions/mentor-project?mentor=${encodeURIComponent(mentorGit)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const result = await response.json();

        console.log(result);
        // Parse and organize data
        const uniqueProjects = new Set();
        const issuesData = [];
        const prsData = [];

        result.data.forEach(item => {
          // Extract project URL
          uniqueProjects.add(item.project);

          // Create formatted item
          const formattedItem = {
            id: item._id,
            number: parseInt(item.project.split('/').pop()), // Extract number from URL
            points: item.points
          };

          // Sort into issues or PRs
          if (item.type === 'issues') {
            issuesData.push(formattedItem);
          } else if (item.type === 'pr') {
            prsData.push(formattedItem);
          }
        });

        // Update state
        setProjects(Array.from(uniqueProjects));
        setIssues(issuesData);
        setPullRequests(prsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex m-3">
      {/* Sidebar with transparent background */}
      <div className="border-end" style={{ 
        width: '250px', 
        minHeight: '50vh',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)'
      }}>
        <div className="p-3">
          <h5 className="text-white mb-4" style={{ 
            fontSize: '1.5rem',
            fontWeight: 'bold'
          }}>Projects</h5>
          <div className="list-group">
            {projects.map((project) => (
              <div 
                key={project} 
                className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
              >
                {project}
                <Button 
                  variant="outline-light" 
                  size="sm"
                  style={{
                    backdropFilter: 'blur(5px)'
                  }}
                >
                  <FaGithub />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <Container fluid className="">
          <Row className="g-4">
            {/* Issues Column */}
            <Col md={6}>
              <Card>
                <Card.Header>Issues</Card.Header>
                <Card.Body>
                  <ul className="list-group">
                    {issues.map((issue) => (
                      <li 
                        key={issue.id} 
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <div className="d-flex align-items-center">
                          <span className="fw-bold">Issue #{issue.number}</span>
                          <Button variant="outline-secondary" size="sm" className="ms-2">
                            <FaGithub />
                          </Button>
                        </div>
                        <Form.Control
                          type="number"
                          value={issue.points}
                          onChange={() => {}}
                          placeholder="Points"
                          style={{ width: '70px' }}
                        />
                      </li>
                    ))}
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
                    {pullRequests.map((pr) => (
                      <li 
                        key={pr.id} 
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <div className="d-flex align-items-center">
                          <span className="fw-bold">Pull #{pr.number}</span>
                          <Button variant="outline-secondary" size="sm" className="ms-2">
                            <FaGithub />
                          </Button>
                        </div>
                        <Form.Control
                          type="number"
                          value={pr.points}
                          onChange={() => {}}
                          placeholder="Points"
                          style={{ width: '70px' }}
                        />
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}