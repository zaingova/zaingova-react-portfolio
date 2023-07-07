import React from 'react';

import '../assets/css/project.css';
import '../assets/css/style.css';
import { SiGithubactions } from "react-icons/si";


export default function Project({ project, s }) {

  return (
    <p className={s}>
      <h4 className='text-center mb-4'><b>{project.title}</b></h4>
      <hr></hr>
      {project.description}
      <img onClick={() => window.open(project.repo)} className='project-image' src={project.image} alt='project'></img>
      <h3 className='text-center my-4 project-link'><i onClick={() => window.open(project.deployed)}><SiGithubactions /></i></h3>
    </p>
  );
}