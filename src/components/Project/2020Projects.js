import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from './2020_details.json';

function Project2020() {
    let [projects, setProjects] = useState(data);

    const searchHandler = (e) => {
        console.log(e.target.value)
        let query = e.target.value.toLowerCase().trim();
        let temp = [];
        data.forEach((project) => {
            let flag = false;
            project.tag.map((t) => {
                if (t.toLowerCase().includes(query))
                    flag = true;
            })
            project.lang.map((lan) => {
                if (lan.toLowerCase().includes(query))
                    flag = true;
            })
            if (flag) temp.push(project);
        })
        setProjects(temp);
    }

    return <>
        <input
            type="search"
            name="searchBar"
            id="searchBar"
            placeholder="Search for Project using tags and stack used"
            onChange={(e) => searchHandler(e)}
        />
        <div className="row">
            {projects.map((el) => {
                return (
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="nwoc-repo-card">
                          <div className="repo-heading">  <img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/mark-github.svg" alt=""/>
                            <a className="repo-title" href={el["repo-url"]} target="_blank" rel="noreferrer">{el.title}</a>
                            </div>  <div className="repo-desc">{el.desc}</div>
                            <div className="repo-mentors">Mentors: {"  "}
                                {
                                    el.mentors.map((mentor) =>
                                        (<a href={"https://github.com/" + mentor} target="_blank" rel="noreferrer">{mentor + " "}</a>)
                                    )
                                }
                            </div>
                            <ul className="repo-stats">
                                <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg" alt=""/> {
                                    el.lang.toString().replaceAll(',', '/')
                                }</li>
                                <li><img className="githubimg" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg" alt=""/> {el.tag.toString().replaceAll(',', '/')}</li>
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div></>
}
export default Project2020;