import React from "react";
import NavBar from "../../components/Navigation";
import project_style from "./Project.css";
import ProjectSection from "../../components/Project/Project_Section";
import Footer from "../../components/footer";
import AnimatedBG from "../../components/Animatedbg";

function Project() {
  return (
    <div styles={project_style} className="project-class">
      <AnimatedBG />
      <NavBar />
      <ProjectSection />
      <Footer />
    </div>
  );
}
export default Project;
