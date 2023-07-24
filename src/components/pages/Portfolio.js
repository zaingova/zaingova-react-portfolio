import React from 'react';
import Project from '../Project';

// CSS and icon imports
import '../../assets/css/project.css';
import { BiSolidBook } from "react-icons/bi";

// creating objects for each project -> had to do it this way instead of an array because of the way the page is setup
const project1 = {
  title: "SQL Employee Management App",
  description: `This is a command-line application that lets employers manager their employees, and the departments they belong to/the roles they carry out. You'll need to run this locally!`,
  image: require('../../assets/files/employee-tracker.png'),
  repo: 'https://github.com/zaingova/zaingova-sql-employee-tracker',
  deployed: 'https://github.com/zaingova/zaingova-sql-employee-tracker'
}

const project2 = {
  title: "Fun with Food",
  description: `A web application for users to be able to create their own dish list based on selected options and save it. A page containning a list of all dishes is also provided to the user`,
  image: require('../../assets/files/fun-with-food.png'),
  repo: 'https://github.com/zaingova/Fun-with-food',
  deployed: 'https://github.com/zaingova/Fun-with-food'
}

const project3 = {
  title: "CMS Tech Blog",
  description: "This is a fullstack tech blog coded in javascript, using handlebars, express, sequelize mainly. It also utilizes a handful of other NPM packages which I will lsit below. Users have the option to make a new account, log into existing ones, and once they've done that they (...)",
  image: require('../../assets/files/tech-blog.png'),
  repo: 'https://github.com/zaingova/zaingova-cms-tech-blog',
  deployed: 'https://zaingova-blog-site-f64acb04e5ec.herokuapp.com/'
}

const project4 = {
  title: "Weather Dashboard",
  description: "This is a basic weather dashboard application that utilizes the OpenWeatherMap API. You can search for any city (also works for countries) around the globe and you will be presented with a daily forecast, as well as a five day forecast for that place. It also saves your search (...)",
  image: require('../../assets/files/weather-dashboard.png'),
  repo: 'https://github.com/zaingova/zaingova-weather-dashboard',
  deployed: 'https://zaingova.github.io/zaingova-weather-dashboard/'
}

const project5 = {
  title: "Learning Words",
  description: "Learning Words is an interactive web application that lets the user search for words, and it returns some information about words, such as type (noun, verb, etc), definition, and synonyms. Once the user has searched for a word (...)",
  image: require('../../assets/files/learning-words.png'),
  repo: 'https://github.com/zaingova/group-project-learning-words',
  deployed: 'https://zaingova.github.io/group-project-learning-words/'
}

const project6 = {
  title: "Password Generator",
  description: "A JavaScript password generator tool. Prompts user for whether to use upper/lower case, numbers, special characters, and the password length, then generates a unique password derived from the information it has.",
  image: require('../../assets/files/password-gen.png'),
  repo: 'https://github.com/zaingova/zaingova-passwordGen',
  deployed: 'https://zaingova.github.io/zaingova-passwordGen/'
}

const project7 = {
  title: "Freelance Platform",
  description: "The freelance platform is a web application that connects freelancers with clients looking for their services. It provides a platform where freelancers can showcase their skills and expertise, and clients...",
  image: require('../../assets/files/freelance-platform.png'),
  repo: 'https://github.com/s2robertson/freelance-platform',
  deployed: 'https://freelance-platform-5f9607a54217.herokuapp.com/'
}

export default function Portfolio() {

  return (
    <div className='d-flex justify-content-center'>
      <div className='col-10 m-3 p-4'>
        <h1 className='title m-0 text-left'>Professional Portfolio <BiSolidBook className='mb-2 title-icon' /></h1>

        <div className='col-12'>
          <p className='p-4 bg-light shadow'>
            This is my professional portfolio! Inside you'll some of my GitHub repositories that I've completed throughout my FullStack web-development career. To view a project, you can click on the GIF/image provided, which will take you to the repository on GitHub. If you want to see the deployed application, just click on the GitHub icon at the bottom of the project card.
            <hr></hr>
            Happy browsing!</p>
          <hr></hr>
        </div>

        {/* ---------------------------------- projects ------------------------------------------------------ */}

        <div className='p-2 row f-flex'>
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project1} />
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project2} />
        </div>
        <div className='p-2 row d-flex'>
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project3} />
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project4} />
        </div>
        <div className='p-2 row d-flex'>
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project5} />
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project6} />
        </div>
        <div className='p-2 row d-flex'>
          <Project s='mx-1 project p-5 pb-0 shadow col' project={project6} />
        </div>

      </div>
    </div >
  );
}