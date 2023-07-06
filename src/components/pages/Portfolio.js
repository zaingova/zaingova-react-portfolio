import React from 'react';
import Project from '../Project';

import { SiGithubactions } from "react-icons/si";

import '../../assets/css/project.css';

const project1 = {
  title: "PWA Text Editor",
  description: "This is a simple text editor that allows you to enter text, and when you either click somewhere else/leave the page and come back, the text will remain. Additionally, the user is able to downloadd the application and use it offline. This is done using webpacks and service workers.",
  image: '',
  repo: 'https://github.com/zaingova/zaingova-pwa-text-editor',
  deployed: 'https://salty-beach-18613-c3f440d62eae.herokuapp.com/'
}

const project2 = {
  title: "Fun with Food",
  description: "A web application for users to be able to create their own dish list based on selected options and save it. A page containning a list of all dishes is also provided to the user",
  image: '',
  repo: 'https://github.com/zaingova/Fun-with-food',
  deployed: 'https://github.com/zaingova/Fun-with-food'
}

const project3 = {
  title: "CMS Tech Blog",
  description: `This is a fullstack tech blog coded in javascript, using handlebars, express, sequelize mainly. It also utilizes a handful of other NPM packages which I will lsit below. 
  
  Users have the option to make a new account, log into existing ones, and once theyve done that they can add comments to other people's blog posts or create their own. They also have the option to delete/edit existing blog posts.`,
  image: '',
  repo: 'https://github.com/zaingova/zaingova-cms-tech-blog',
  deployed: 'https://zaingova-blog-site-f64acb04e5ec.herokuapp.com/'
}

const project4 = {
  title: "Weather Dashboard",
  description: "This is a basic weather dashboard application that utilizes the OpenWeatherMap API. You can search for any city (also works for countries) around the globe and you will be presented with a daily forecast, as well as a five day forecast for that place. It also saves your search history, and displays your 10 most recent entries, which updates dynamically.",
  image: '',
  repo: 'https://github.com/zaingova/zaingova-weather-dashboard',
  deployed: 'https://zaingova.github.io/zaingova-weather-dashboard/'
}

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
          <Project s='mr-5 mx-1 project p-5 pb-0 shadow col' project={project1} />
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project2} />
        </div>
        <div className='p-2 row'>
          <Project s='mr-5 mx-1 project p-5 pb-0 shadow col' project={project3} />
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project4} />
        </div>

      </div>
    </div >
  );
}