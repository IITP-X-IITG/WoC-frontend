import React, { useState } from "react";
import Project2019 from "./2019Projects";
import Project2020 from "./2020Projects";
import Project2021 from "./2021Projects";
import Project2022 from "./2022Projects";
import Project2023 from "./2023Projects";
import Project2024 from "./2024Projects";
import { NavLink } from "react-router-dom";
import "../../pages/Projects/Project.css"


function ProjectSection() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section>
      <div className="container-project">
        <div className="project-btn-container">
        <button className="btn btn-primary" onClick={() => toggleTab(toggleState === 0 ? 1 : 0)}>{toggleState === 0 ? "Past" : "Current"} Projects</button>
        <NavLink to="/studentProfile" className="btn btn-primary" >Your Dashboard</NavLink>
        </div>
        <div className="bloc-tabs-container">
        <div className={toggleState === 0 ? "project-title" : "bloc-tabs-hidden"}>
                <h1>
                    2024 Projects
                </h1>
                <hr />
            </div>
        <div className={toggleState === 0 ? "bloc-tabs bloc-tabs-hidden" : "bloc-tabs"}>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            2023
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            2022
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            2021
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            2020
          </button>
          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            2019
          </button>
        </div>
        </div>


        <div className="content-tabs">
          <div
            className={
              toggleState === 0 ? "content  active-content" : "content"
            }
          >
            <Project2024 />
          </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Project2023 />
          </div>
          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Project2022 />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Project2021 />
          </div>

          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <Project2020 />
          </div>
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <Project2019 />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
export default ProjectSection;
