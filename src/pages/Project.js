import React from "react";
import NavBar from "../components/Navigation";
import project_style from './Project.css';
import Projectsection from "../components/Project/Project_Section";
import Footer from '../components/footer';
function Project(){
    return<div styles={project_style} className="project-class">
        <NavBar/>
        <Projectsection/>
        <Footer/>
    </div>
}
export default Project;