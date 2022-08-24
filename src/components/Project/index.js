import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import projects from "../../projects.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';


function ProjectModel(props) {
  return (

    <Card style={{ width: '27rem' }}>
      <div className="img-container">
        <a target="_blank" href={props.github} ><Card.Img alt={props.name} src={props.image} /></a>
      </div>
      <div className="content" style={{flex: 1}} >
        <ul>
            <li>
                <p className="project-title">{props.name}</p>
            </li>
            <li>
                <p className="description">{props.description}</p>
            </li>
            <li>
                <div className="icons">
                <a href={props.github}><img src="https://img.icons8.com/ios/40/000000/github.png" alt="github-icon" id="port-icon"/></a> 
              <a href={props.url}><img src="https://img.icons8.com/small/32/000000/external-link.png"/></a> 
                </div>
            </li>
            <li>
                {props.languages}
            </li>
        </ul>
      </div>
    </Card>

  );
}

function Format(props) {
    return <div className="wrapping">{props.children}</div>
}

function Projects() {
    return (
        <>
        <div className="project">
        <h2 className="page-title">Projects</h2>
        </div>

        <Format>
            {projects.map((project) => (
                <ProjectModel
                name={project.name}
                key={project.id}
                image={project.image}
                github={project.github}
                url={project.url}
                languages={project.languages}
                description={project.description}
                />
                ))}
        </Format>
        </>
    );
}

export default Projects;

