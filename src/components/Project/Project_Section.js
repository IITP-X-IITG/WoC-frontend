import React from "react";
import { useState } from "react";
import Project2018 from "./2018_Projects";
import Project2019_Search from "./2019_Projects";
import Project2020_Search from "./2020_Projects";
import Project2021_Search from "./2021_Projects";
import Project2022_Search from "./2022_Projects";

function Projectsection() {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section>
      <div className="container-project">
        <div className="bloc-tabs">
          {/* <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            2022
          </button> */}
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
          {/* <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          2018
        </button> */}
        </div>

        <div className="content-tabs">
          {/* <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <Project2022_Search />
          </div> */}

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <Project2021_Search />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <Project2020_Search />
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <Project2019_Search />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projectsection;
