import React from 'react';

export default function Resume() {
  return (
    <div className='m-3 p-4 col-8'>
      <h1 className='title m-0 text-left'>Resume</h1>
      <p className='p-4 bg-light shadow'>
        Below you'll find a copy of my professional resume. If you'd like to download this document, scroll down just below the resume and you'll find a link!
        <hr></hr>
        While I don't have any experience on the job, I do have plenty of experience working in fine dining kitchens so as a result I have very strong leadership and organizational skills. I look forward to getting some experinece in this field to continue building upon my current skills as well as learning new ones!</p>
      <div className='col-12 card bg-light px-4 py-4 shadow'>

        <h2><b>Zain Gova</b></h2>
        <hr></hr>

        {/* contact info */}
        <div className='mx-2 p-3 d-block'>
          <p className='bg-light'>
            <ul className='p-1'>zain.gova@yahoo.com</ul>
            <ul className='p-1'>647-985-2839</ul>
            <ul className='p-1'>12 Elaine Lennox Court; Toronto, ON</ul>
          </p>
        </div>

        <hr></hr>

        {/* skills */}
        <h3 className='mb-4'><u>Skills</u></h3>
        <div className='row mx-2 col-8'>
          <div className='col-4'>
            <h5><b>Back-end</b></h5>
            <p className='bg-light p-2'>
              <li>Express.js</li>
              <li>ApolloServer</li>
              <li>GraphQL</li>
            </p>
          </div>
          <div className='col-4'>
            <h5><b>Front-end</b></h5>
            <li>React,js</li>
            <li>Handlebars JS</li>
          </div>
          <div className='col-4'>
            <h5><b>Databases</b></h5>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>IndexedDB</li>
          </div>
        </div>

        <hr></hr>

        <h3 className='mb-4'><u>Work Experience (most relevant)</u></h3>
        <div className='mb-4 mx-3'>
          <h5><b><u>Line Cook, Jr. Sous Chef</u></b></h5>
          <h6>Fishbone by the Lake - Stouffville, ON</h6>
          <h6>June 2014 to August 2021</h6>
          <p className='bg-light p-3'>
            <li>seasonal restaurant, only open for 4 months each year **
            </li>
            <li>Worked on the sauté station in a fast-paced and high-volume restaurant
            </li>
            <li>Called the board, while staying organized and maintaining a high standard of food across all stations
            </li>
            <li>Would receive and process deliveries to the restaurant
            </li>
            <li>Would effectively assemble dishes accordingly to menu descriptions and ticket details
            </li>
            <li>Delegated staff and managed the kitchen when the chef was not present
            </li>
            <li>Was responsible for maintaining par levels in line fridges as well as ensuring the required prep was done before service
            </li>
            <li>Always maintained a clean and sanitary work area
            </li>
            <li>Served an average of 400-500 people a day
            </li>
          </p>
        </div>

        <div className='mb-4 mx-3'>
          <h5><b><u>Line Cook</u></b></h5>
          <h6>Leña Restaurante - Toronto, ON</h6>
          <h6>January 2020 to March 2020</h6>
          <p className='bg-light p-3'>
            <li>Worked on the fish station during Winterlicious 2020 and then as Entremetier at a busy 4-story restaurant in Toronto
            </li>
            <li>Reviewed and managed station-inventory and par-levels before and after each service
            </li>
            <li>Would receive and process deliveries to the restaurant
            </li>
            <li>Was responsible for all line prep on a day-to-day basis
            </li>
            <li>Always maintained a clean and sanitary work area
            </li>
            <li>Served an average of 200 - 300 people during dinner service
            </li>
          </p>
        </div>

        <div className='mb-4 mx-3'>
          <h5><b><u>Line Cook, Junior Sous Chef, Sous Chef</u></b></h5>
          <h6>Piano Piano the Restaurant - Toronto, ON</h6>
          <h6>October 2021 to October 2022 (got promoted to another restaurant within the company)</h6>
          <p className='bg-light p-3'>
            <li>Worked on the grill and fish stations from October 2021 - December 2021: was promoted to Junior Sous Chef in December and then Sous Chef in February 2022
            </li>
            <li><b>** Line Cook section **</b></li>
            <li>Reviewed and managed station-inventory and par-levels before and after each service
            </li>
            <li>Would receive and process deliveries to the restaurant
            </li>
            <li>Was responsible for all line prep on a day-to-day basis
            </li>
            <li>Always maintained a clean and sanitary work area
            </li>
            <li>Served an average of 400-500 people a day
            </li>
            <li><b>**Junior Sous Chef and Sous Chef section**</b></li>
            <li>Assisted executive chef in kitchen operations, food and stock ordering, and kitchen supervision.</li>
            <li>Co-managed busy kitchen of over 25 line cooks, fry cooks, pastry chefs, grillers, and prep cooks.</li>
            <li>Acted as liaison between executive chef and back-of-house employees.</li>
            <li>Helped plan and coordinate large buyout-events of anywhere between 100-250 guests</li>
          </p>
        </div>

        <div className='mb-4 mx-3'>
          <h5><b><u>Chef de Cuisine</u></b></h5>
          <h6>Piccolo Piano Pizzeria - Toronto, ON</h6>
          <h6>October 2022 to February 2023</h6>
          <p className='bg-light p-3'>
            <li>Responsible for creating the structure and standards for Piccolo Piano Pizzeria. Ordering, inventory par levels, recipe costing, developing yearly budget for hourly labor and overseeing capital expenditures</li>
            <li>Worked with the executive chef on menu development</li>
            <li>During my short time as head chef, brought this restaurants ratings on Google and Resy to the highest-in-the-company (out of 5 restaurants)</li>
            <li>Specialized in wood-fired pizza and fresh pasta</li>
            <li>Worked with a small team of myself and 2 cooks to serve between 50-100 people a night, and executed over 30 private events with unique and customized menus</li>
          </p>
        </div>
      </div>
      <a href='/files/resume.pdf' download><button className='mt-4 btn btn-lg btn-contact'>Download Resume</button></a>
    </div>
  );
}