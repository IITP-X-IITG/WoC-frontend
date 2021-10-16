import React from "react";

import Logo from "../pages/Images/logo_right.png";
function Firstsection() {
  return (
    <>
     
      <section className="first-section">
        <h1 className="heading">About CodePeak</h1>
        <div className="flex-item">
          <div>
            <p className="info">
              Code Peak is a month-long programme conducted by Coding Club IIT
              Guwahati and NJACK IIT Patna that helps students understand the
              paradigm of Open Source contribution and gives them real-world
              software development experience. The event targets first-timers
              who wish to participate in Free and Open Source(FOSS)
              Contributions and the experienced developers who want to show
              their skills by contributing to real-world projects.
            </p>
            <p className="info">
              The programme follows a mentor-mentee format where we select
              mentors who bring their own projects to which the participants can
              contribute keeping the spirit of Open Source in mind. The main aim
              of the entire event is to lay a foundational base and promote the
              culture of Open Source in India and prepare them for potentially
              larger Open Source Events at a global level.
            </p>
          </div>
       <img src={Logo} alt="logo_right" className="right-logo"/>
        </div>

        <h1 className="heading heading1">How it works?</h1>
        <p className="info info1">
          Participants can apply for the program either as a student or as a
          mentor. Mentors are selected through a selection process. The selected
          mentors propose projects, the best of which are chosen to be included
          in the program. Students work on these projects in their winter
          vacations. The mentors review the pull requests and the overall work
          on their project by various contributors throughout the coding period
          of the program. At the end of the coding period, the students are
          compared on the basis of most contributions.
        </p>
      </section>
    </>
  );
}
export default Firstsection;
