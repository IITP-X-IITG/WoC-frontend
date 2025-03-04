import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./2024_details.json";
import dagshub from "../../pages/Images/dagshub.png";
import clueless from "../../pages/Images/clueless.png";
import flutterK from "../../pages/Images/flutterK.png";

function Project2023_Search() {
    let [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        const fetchData = async () => {
            try {
                const response = await fetch("/api/add-project/get-all");
                const result = await response.json();
                console.log(result.data);
                console.log(projects)
                setProjects(result.data || []);
            } catch (error) {
                console.error("Error fetching additional projects:", error);
            }
        };
        
        fetchData();
    }, []);

    const searchHandler = (e) => {
        console.log(e.target.value);
        let query = e.target.value.toLowerCase().trim();
        let temp = [];
        data.forEach((project) => {
            let flag = false;
            project.tags.map((t) => {
                if (t.toLowerCase().includes(query)) flag = true;
            });
            project.languages.map((lan) => {
                if (lan.toLowerCase().includes(query)) flag = true;
            });
            if (flag) temp.push(project);
        });
        setProjects(temp);
    };

    return (
        <>
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
                            {el.special === true ? (
                                [
                                    el.dagshub === true ? (
                                        <div className="nwoc-repo-card">
                                            <a href={el["githubLink"]} target="_blank" rel="noreferrer">
                                                <div className="repo-heading">
                                                    <img
                                                        src={dagshub}
                                                        style={{ width: "6rem", float: "left" }}
                                                        alt="dagshub"
                                                    />
                                                    <a
                                                        className="repo-title-aviyel"
                                                        href={el["githubLink"]}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        {el.title}
                                                    </a>
                                                </div>
                                            </a>{" "}
                                            <div className="repo-desc">{el.description}</div>
                                            <ul className="repo-stats">
                                                <li>
                                                    <img
                                                        className="githubimg"
                                                        src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg"
                                                        alt=""
                                                    />{" "}
                                                    {el.languages.toString().replaceAll(",", "/")}
                                                </li>
                                                <li>
                                                    <img
                                                        className="githubimg"
                                                        src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg"
                                                        alt=""
                                                    />{" "}
                                                    {el.tags.toString().replaceAll(",", "/")}
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        [
                                            !el.flutterK ? (
                                                <div className="nwoc-repo-card">
                                                    <a
                                                        href={el["githubLink"]}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <div className="repo-heading">
                                                            <img
                                                                src={clueless}
                                                                style={{ width: "3rem", float: "left" }}
                                                                alt="clueless"
                                                            />
                                                            <a
                                                                className="repo-title-aviyel"
                                                                href={el["githubLink"]}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                {el.title}
                                                            </a>
                                                        </div>
                                                    </a>{" "}
                                                    <div className="repo-desc">{el.description}</div>
                                                    <ul className="repo-stats">
                                                        <li>
                                                            <img
                                                                className="githubimg"
                                                                src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg"
                                                                alt=""
                                                            />{" "}
                                                            {el.languages.toString().replaceAll(",", "/")}
                                                        </li>
                                                        <li>
                                                            <img
                                                                className="githubimg"
                                                                src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg"
                                                                alt=""
                                                            />{" "}
                                                            {el.tags.toString().replaceAll(",", "/")}
                                                        </li>
                                                    </ul>
                                                </div>
                                            ) : (
                                                <div className="nwoc-repo-card">
                                                    <a
                                                        href={el["githubLink"]}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <div className="repo-heading">
                                                            <img
                                                                src={flutterK}
                                                                style={{ width: "3rem", float: "left" }}
                                                                alt="clueless"
                                                            />
                                                            <a
                                                                className="repo-title-aviyel"
                                                                href={el["githubLink"]}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                            >
                                                                {el.title}
                                                            </a>
                                                        </div>
                                                    </a>{" "}
                                                    <div className="repo-desc">{el.description}</div>
                                                    <ul className="repo-stats">
                                                        <li>
                                                            <img
                                                                className="githubimg"
                                                                src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg"
                                                                alt=""
                                                            />{" "}
                                                            {el.languages.toString().replaceAll(",", "/")}
                                                        </li>
                                                        <li>
                                                            <img
                                                                className="githubimg"
                                                                src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg"
                                                                alt=""
                                                            />{" "}
                                                            {el.tags.toString().replaceAll(",", "/")}
                                                        </li>
                                                    </ul>
                                                </div>
                                            ),
                                        ]
                                    ),
                                ]
                            ) : (
                                <div className="nwoc-repo-card">
                                    <a href={el["githubLink"]} target="_blank" rel="noreferrer">
                                        <div className="repo-heading">
                                            <img
                                                className="githubimg"
                                                src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/mark-github.svg"
                                                alt=""
                                            />
                                            <a
                                                className="repo-title"
                                                href={el["githubLink"]}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {el.title}
                                            </a>
                                        </div>
                                    </a>{" "}
                                    <div className="repo-desc">{el.description}</div>
                                    <div className="repo-mentors">
                                        Mentor: {"  "}
                                        {el.mentor &&
                                            <a
                                                href={el.mentorGithub}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {el.mentor + " "}
                                            </a>
                                        }
                                    </div>
                                    <ul className="repo-stats">
                                        <li>
                                            <img
                                                className="githubimg"
                                                src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/file-code.svg"
                                                alt=""
                                            />{" "}
                                            {el.languages.toString().replaceAll(",", "/")}
                                        </li>
                                        <li>
                                            <img
                                                className="githubimg"
                                                src="https://cdnjs.cloudflare.com/ajax/libs/octicons/8.0.0/svg/tag.svg"
                                                alt=""
                                            />{" "}
                                            {el.tags.toString().replaceAll(",", "/")}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Project2023_Search;
