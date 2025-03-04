"use client"

import { useState, useEffect, use } from "react"
import { Container, Row, Col, Card, Button, Form, Modal } from "react-bootstrap"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function MentorDashboard({ mentorGit, email }) {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([])
  const [issues, setIssues] = useState([])
  const [pullRequests, setPullRequests] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [projectDetailPop, setProjectDetailPop] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  const [projectData, setProjectData] = useState({})
  const [groupedProjects, setGroupedProjects] = useState({})

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState('');


  const handleDeleteProject = async () => {
    if (deleteConfirmText !== selectedProject) return;

    setIsDeleting(true);
    setDeleteError('');

    try {
      const response = await fetch(`/api/projects/${selectedProject}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) throw new Error('Failed to delete project');

      const updatedProjects = projects.filter(p => p.name !== selectedProject);
      setProjects(updatedProjects);

      const newGrouped = { ...groupedProjects };
      delete newGrouped[selectedProject];
      setGroupedProjects(newGrouped);

      const newProjectData = { ...projectData };
      delete newProjectData[selectedProject];
      setProjectData(newProjectData);

      if (activeProject === selectedProject) {
        setActiveProject(updatedProjects[0]?.name || null);
      }

      setShowDeleteModal(false);
      setDeleteConfirmText('');
    } catch (error) {
      setDeleteError(error.message || 'Failed to delete project');
    } finally {
      setIsDeleting(false);
    }
  };

  const [issuePoints, setIssuePoints] = useState({})
  const [prPoints, setPrPoints] = useState({})

  const handleIssuePointChange = (id, value) => {
    // Ensure value is not negative
    const points = Math.max(0, Number.parseInt(value) || 0)
    setIssuePoints({
      ...issuePoints,
      [id]: points,
    })
  }

  const handlePRPointChange = (id, value) => {
    // Ensure value is not negative
    const points = Math.max(0, Number.parseInt(value) || 0)
    setPrPoints({
      ...prPoints,
      [id]: points,
    })
  }

  const handleOnSubmit = async (id, points) => {
    try {
      // Find the item in either issues or pull requests
      let item = issues.find(issue => issue.id === id);
      if (!item) {
        item = pullRequests.find(pr => pr.id === id);
      }

      if (!item) {
        console.error('Could not find item with id:', id);
        alert('Error: Item not found');
        return;
      }

      // Get the project url from item
      const projectUrl = item.url;

      let studentUrl = "";
      data.forEach(element => {
        if(element._id === id)
          studentUrl = element.student;
      });

      let reqValue="";
      const allcookies = document.cookie.split(';');
      allcookies.map(async (cookie, index) => {
        const [key, value] = cookie.split('=');
        if (key.trim() === 'token') {
          reqValue = value;
        }
      });

      const response = await fetch("/api/transactions/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" ,
          authorization: `Bearer ${reqValue}`
        },
        body: JSON.stringify({
          student: studentUrl || "", // Use item.student if available, or empty string
          project: projectUrl,
          open: false,
          points: points
        })
      });
      const result = await response.json();

      if (response.ok) {
        // Success case - update UI by removing the item that has been assigned points
        if (issues.some(issue => issue.id === id)) {
          // Remove the issue from the list
          setIssues(issues.filter(issue => issue.id !== id));
          
          // Clean up the points state
          const updatedIssuePoints = { ...issuePoints };
          delete updatedIssuePoints[id];
          setIssuePoints(updatedIssuePoints);
        } else if (pullRequests.some(pr => pr.id === id)) {
          // Remove the pull request from the list
          setPullRequests(pullRequests.filter(pr => pr.id !== id));
          
          // Clean up the points state
          const updatedPrPoints = { ...prPoints };
          delete updatedPrPoints[id];
          setPrPoints(updatedPrPoints);
        }

        // Show success message
        alert('Points updated successfully!');
      } else {
        alert(`Failed to update points: ${result.message || "Unknown error"}`)
        console.error("Error updating points:", result)
      }
    } catch (error) {
      console.error("Error submitting points:", error)
      alert("Failed to submit points. Please try again.")
    }
  }

  useEffect(() => {
    const mentorGitUrl = mentorGit
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/transactions/mentor-project?mentor=${encodeURIComponent(mentorGitUrl)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const result = await response.json();
        setData(result.data);

        console.log(result);
        // Parse and organize data
        const projectGroups = {}
        const projectDataMap = {}

        result.data.forEach(item => {
          // Skip items where open is false
          if (item.open === false) return;
          
          // Extract project URL and name
          const repoName = item.project.split('/')[4];

          // Group projects by name
          if (!projectGroups[repoName]) {
            projectGroups[repoName] = {
              name: repoName,
              urls: new Set([item.project]),
              description: `Repository for ${repoName}`, 
              repoUrl: `https://github.com/HelloSniperMonkey/${repoName}`,
              students: new Set([item.student]),
            }
          } else {
            projectGroups[repoName].urls.add(item.project)
            projectGroups[repoName].students.add(item.student)
          }

          if (!projectDataMap[repoName]) {
            projectDataMap[repoName] = {
              issues: [],
              pullRequests: [],
            }
          }

          const formattedItem = {
            id: item._id,
            number: Number.parseInt(item.project.split("/").pop()), // Extract number from URL
            points: item.points,
            url: item.project,  // Store the full URL for linking
            open: item.open
          };

          // Sort into issues or PRs
          if (item.type === 'issues') {
            projectDataMap[repoName].issues.push(formattedItem);
          } else if (item.type === 'pull') {
            projectDataMap[repoName].pullRequests.push(formattedItem);
          }
        })

        const groupedProjectsList = Object.values(projectGroups)

        setGroupedProjects(projectGroups)
        setProjects(groupedProjectsList)
        setProjectData(projectDataMap)

        if (groupedProjectsList.length > 0) {
          const firstProject = groupedProjectsList[0]
          setActiveProject(firstProject.name)
          setIssues(projectDataMap[firstProject.name]?.issues || [])
          setPullRequests(projectDataMap[firstProject.name]?.pullRequests || [])
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    if (mentorGitUrl) {
      fetchData()
    }
  }, [mentorGit])

  const handleModalOpen = (project) => {
    setSelectedProject(project)
    console.log('hello', project);
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProject(null);
    setDeleteConfirmText("");

  }
  const handleDeleteModalClose=()=>{
    setDeleteConfirmText("");
    setShowDeleteModal(false);

  }

  const handleProjectClick = (projectName) => {
    setActiveProject(projectName)
    setIssues(projectData[projectName]?.issues || [])
    setPullRequests(projectData[projectName]?.pullRequests || [])
  }

  const handleProjectDetail = () => {
    setProjectDetailPop(true)
    setShowModal(false)
  }

  return (
    <div className="d-flex">

      {projectDetailPop && selectedProject && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(5px)",
            zIndex: 1050,
            padding: "80px 20px 20px",
            overflow: "auto",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
              width: "100%",
              maxWidth: "600px",
              padding: "24px",
              position: "relative",
              animation: "fadeIn 0.3s ease-out",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "bold",
                marginBottom: "16px",
                borderBottom: "1px solid #e0e0e0",
                paddingBottom: "12px",
              }}
            >
              {selectedProject} Project Details
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <h5 style={{ fontWeight: "bold", marginBottom: "8px" }}>Repository</h5>
              <div className="d-flex align-items-center">
                <a
                  href={groupedProjects[selectedProject]?.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#0366d6",
                    textDecoration: "none",
                  }}
                >
                  <FaGithub style={{ marginRight: "8px" }} />
                  {groupedProjects[selectedProject]?.repoUrl}
                  <FaExternalLinkAlt style={{ marginLeft: "8px", fontSize: "0.8rem" }} />
                </a>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h5 style={{ fontWeight: "bold", marginBottom: "8px" }}>Description</h5>
              <p>{groupedProjects[selectedProject]?.description || "No description available."}</p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h5 style={{ fontWeight: "bold", marginBottom: "8px" }}>Contributors</h5>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {Array.from(groupedProjects[selectedProject]?.students || []).map((student, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#f6f8fa",
                      borderRadius: "6px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FaGithub style={{ marginRight: "8px", color: "#333" }} />
                    <a
                      href={student}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#0366d6", textDecoration: "none" }}
                    >
                      {student.split("/").pop() || student}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h5 style={{ fontWeight: "bold", marginBottom: "8px" }}>Activity Summary</h5>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    minWidth: "120px",
                    backgroundColor: "#f1f8ff",
                    borderRadius: "8px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#0366d6" }}>
                    {projectData[selectedProject]?.issues.length || 0}
                  </div>
                  <div>Open Issues</div>
                </div>
                <div
                  style={{
                    flex: "1",
                    minWidth: "120px",
                    backgroundColor: "#f1f8ff",
                    borderRadius: "8px",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#0366d6" }}>
                    {projectData[selectedProject]?.pullRequests.length || 0}
                  </div>
                  <div>Pull Requests</div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <Button
                variant="secondary"
                onClick={() => setProjectDetailPop(false)}
                style={{
                  borderRadius: "6px",
                  padding: "8px 16px",
                  fontWeight: "500",
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}



      <div
        className="border-end"
        style={{
          width: "250px",
          minHeight: "50vh",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(5px)",
          padding: "30px 10px",
        }}
      >
        <h5
          className="text-white mb-4"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          Projects
        </h5>
        <div className="list-group">
          {projects.map((project) => (
            <div
              key={project.name}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              style={{
                background: project.name === activeProject ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                borderRadius: "12px",
                padding: "16px 20px",
                margin: "8px 0",
                cursor: "pointer",
              }}
              onClick={() => handleProjectClick(project.name)}
            >
              <span>{project.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleModalOpen(project.name)
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  padding: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "3px",
                    paddingTop: "3px",
                  }}
                >
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "white" }}></div>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "white" }}></div>
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "white" }}></div>
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
              <h4
                className="text-white mb-4"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  cursor: "pointer",
                  backdropFilter: "blur(5px)",
                }}
              >
                Project: {activeProject}
              </h4>
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
                              <div className="d-flex align-items-center">
                                  <Form.Control
                                    type="number"
                                    value={issuePoints[issue.id] !== undefined ? issuePoints[issue.id] : issue.points}
                                    onChange={(e) => handleIssuePointChange(issue.id, e.target.value)}
                                    placeholder="Points"
                                    style={{ width: "70px" }}
                                    min="0"
                                  />
                                  <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  className="ms-2"
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    handleOnSubmit(issue.id, issuePoints[issue.id])
                                  }}
                                  disabled={!issuePoints[issue.id] || issuePoints[issue.id] === 0}
                                >
                                  Submit
                                </Button>
                              </div>
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

                              <div className="d-flex align-items-center">
                                <Form.Control
                                  type="number"
                                  value={prPoints[pr.id] !== undefined ? prPoints[pr.id] : pr.points}
                                  onChange={(e) => handlePRPointChange(pr.id, e.target.value)}
                                  placeholder="Points"
                                  style={{ width: '70px' }}
                                  min="0"
                                />
                                <Button
                                  variant="outline-secondary"
                                  size="sm"
                                  className="ms-2"
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    handleOnSubmit(pr.id, prPoints[pr.id])
                                  }}
                                  disabled={!prPoints[pr.id] || prPoints[pr.id] === 0}
                                >
                                  Submit
                                </Button>
                              </div>
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


      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="d-grid gap-2">
            <Button variant="outline-primary" onClick={handleProjectDetail}>
              View Project Details
            </Button>
            <Button variant="outline-secondary">Edit Project</Button>
            <Button
              variant="outline-danger"
              onClick={() => {
                setShowDeleteModal(true);
                // handleModalClose();
              }}
            >
              Remove Project
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteError && <div className="text-danger mb-3">{deleteError}</div>}

          <p className="mb-3">
            To confirm deletion of <strong>{selectedProject}</strong>,
            please type the project name below:
          </p>


          <Form.Control
            type="text"
            value={deleteConfirmText}
            onChange={(e) => setDeleteConfirmText(e.target.value)}
            placeholder="Enter project name"
            className="mb-3"
            autoFocus
          />

          <div className="text-muted small">
            This action cannot be undone. This will permanently delete the project
            and remove all associated data.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteModal(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDeleteProject}
            disabled={deleteConfirmText !== selectedProject || isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete Project'}
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

