import React from 'react';
import Project from '../Project';

import { SiGithubactions } from "react-icons/si";

import '../../assets/css/project.css';

export default function Portfolio() {
  return (
    <div>
      <div className='col-8 m-3 p-4'>
        <h1 className='title m-0 text-left'>Professional Portfolio</h1>

        <div className='col-12'>
          <p className='p-4 bg-light shadow'>
            This is my professional portfolio! Inside you'll some of my GitHub repositories that I've completed throughout my FullStack web-development career. To view a project, you can click on the GIF/image provided, which will take you to the repository on GitHub. If you want to see the deployed application, just click on the GitHub icon at the bottom of the project card.
            <hr></hr>
            Happy browsing!</p>
          <hr></hr>
        </div>

        {/* ---------------- projects ------------------------------------------------------ */}

        <div className='p-2 row'>
          <p className='project p-5 pb-0 mr-5 shadow col'>
            <h4 className='text-center mb-4'><b>PWA Text Editor</b></h4>
            <hr></hr>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien. 
            <h3 className='text-center my-4 project-link'><i><SiGithubactions/></i></h3></p>
          <p className='project p-5 pb-0 mx-1 shadow col'>
            <h4 className='text-center mb-4'><b>CMS Tech Blog</b></h4>
            <hr></hr>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.
            <h3 className='text-center my-4 project-link'><i><SiGithubactions/></i></h3></p>
        </div>

        <div className='p-2 row'>
          <p className='project p-5 pb-0 mr-5 shadow col'>
            <h4 className='text-center mb-4'><b>Weather Dashboard</b></h4>
            <hr></hr>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.
            <h3 className='text-center my-4 project-link'><i><SiGithubactions/></i></h3></p>
          <p className='project p-5 pb-0 mx-1 shadow col'>
            <h4 className='text-center mb-4 '><b>Fun With Food </b></h4>
            <hr></hr>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.
            <h3 className='text-center my-4 project-link'><i><SiGithubactions/></i></h3></p>
        </div>
      </div>
    </div>
  );
}