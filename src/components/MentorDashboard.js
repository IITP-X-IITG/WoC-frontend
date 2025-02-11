import './Dashboard.css';
import BTable from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import MentorProject from './MentorProject';
import GivePoints from './GivePoints';

function MentorDashboard() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section>
      <div className="container-dashboard">
        <div className="dashboard-bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Your Project
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Give Points
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content active-content" : "content"
            }
          >
            <MentorProject />
          </div>
          <div
            className={
              toggleState === 2 ? "content active-content" : "content"
            }
          >
            <GivePoints />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentorDashboard;
