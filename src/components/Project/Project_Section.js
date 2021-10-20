import React from "react";
import { useState } from "react";
// import Project2018 from "./2018_Projects";
import Project2018 from "./2018_Projects_search";
import Project2019 from "./2019_Projects";
import Project2020 from './2020_Projects';
import Project2021 from "./2021_Projects";
function Projectsection() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section>
    <div className="container-project">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          2021
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          2020
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          2019
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          2018
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Project2021/>
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          
          <Project2020/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         
          <Project2019/>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
    
         <Project2018/>
        </div>

      </div>
    </div>
    </section>
  );
}
export default Projectsection;
