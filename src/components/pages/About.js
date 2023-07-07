import React from 'react';

// CSS imports
import '../../assets/css/image.css';

export default function About() {
  return (
    <div className='d-flex justify-content-center'>
      <section className='m-3 p-4 col-8'>
        <div className='d-flex flex-wrap'>

          <img className='rounded-circle my-3 mb-4 shadow' src={require('../../assets/files/me.png')} alt='img'></img>
          <h1 className='mt-5 mx-5 title'>About Me!</h1>
        </div>
        {/* some information about me */}
        <div className='col-12 mt-2'>
          <p className='p-4 bg-light shadow'>
            Welcome to my professional portfolio! Inside you'll find a few of the projects I've worked on, along with links to the deployed applications and the GitHub repositories; my resume; a form which you can use to send me a message; and additionally, at the bottom of the page you'll see some icons which you can click on! They'll take you to my pages on their respective sites, which are GitHub, Stack Overflow, and Linkedin.
            <hr></hr>
            You can use the <b>navigation links</b> at the top of this page to explore the portfolio!
          </p>
          <hr></hr>
          <p className='p-4   bg-light shadow'>
            At the time of creating this, I'm currently enrolled in the full-stack web development bootcamp hosted by UofT. In the past three months we've covered lots of material which includes but is not limited to:
            <hr></hr>
            <li className='mx-3'>HTML, CSS, and JavaScript</li>
            <li className='mx-3'>Handlebars and React.js</li>
            <li className='mx-3'>Node.js</li>
            <li className='mx-3'>Express.js, ApolloServer, and GraphQL</li>
            <li className='mx-3'>Creating and using RESTful APIs</li>
            <li className='mx-3'>Server-side APIs</li>
            <li className='mx-3'>MERN</li>
            <li className='mx-3'>Progressive Web Applications (PWAs), Service Workers, Webpacks</li>
            <li className='mx-3'>MySQL, MongoDB, IndexedDB</li>
            <hr></hr>
            Each day I'm delving deeper into these concepts and also into many new ones. For future development, I plan on working on some more complicated projects.
          </p>
        </div>
      </section>
    </div>
  );
}