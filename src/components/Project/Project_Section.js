import React, { useState } from "react";
import Project2019 from "./2019Projects";
import Project2020 from "./2020Projects";
import Project2021 from "./2021Projects";
import Project2022 from "./2022Projects";
import Project2023 from "./2023Projects";

function ProjectSection() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section>
      <div className="container-project">
        <div className="bloc-tabs">
          <button disabled
            className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(0)}
          >
            2023
          </button>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            2022
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            2021
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            2020
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            2019
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 0 ? "content  active-content" : "content"
            }
          >
            <Project2023 />
          </div>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Project2022 />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Project2021 />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Project2020 />
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <Project2019 />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProjectSection;
