import React from 'react';
import { RiStackOverflowLine, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

import '../assets/css/footer.css'

export default function Footer() {
  const contactInfo = {
    linkedin: "https://www.linkedin.com/in/zain-gova-833a639a/",
    github: "https://github.com/zaingova",
    stackoverflow: "https://stackoverflow.com/users/22175303/zaingova",
    cell: "647-985-2839"
  };

  return (
    <div className='col-12 footer'>
      <div className='d-flex justify-content-around container'>
        <h1><i className='footer-btn' onClick={() => window.open(contactInfo.github)}><RiGithubFill /></i></h1>
        <h1><i className='footer-btn' onClick={() => window.open(contactInfo.stackoverflow)}><RiStackOverflowLine /></i></h1>
        <h1><i className='footer-btn' onClick={() => window.open(contactInfo.linkedin)}><RiLinkedinBoxFill /></i></h1>
      </div>
    </div>
  )
}