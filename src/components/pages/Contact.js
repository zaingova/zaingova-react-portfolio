import React from 'react';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

import '../../assets/css/input.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const templateParams = {
    userEmail: email,
    userMessage: message,
    userName: firstName
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email')
      return setEmail(value);
    else if (name === 'firstName')
      return setFirstName(value);
    else if (name === 'lastName') {
      return setLastName(value);
    } else {
      return setMessage(value);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_z9gs5kl', 'template_234xzb8', templateParams, 'uV_rRZCc06xA9iS5c')
      .then((result) => {
        console.log(templateParams)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='col-8 m-3 p-4'>
      <h1 className='title m-0 text-left'>Contact Me!</h1>

      <div className='col-12'>
        <p className='p-4 bg-light shadow'>
          If you'd like to contact me regarding any matter you can do so using the form below! Please be wary of what you send for testing/grading, as the form is linked to my <b>personal email!</b>
          <hr></hr>
          Thank you for your consideration and I look forward to hearing from you!
        </p>
      </div>

      <hr></hr>

      <div className='col-12 card bg-light px-4 py-5 shadow section'>
        <form onSubmit={sendEmail}>
          <div className='form-group col-12 my-2'>
            <input
              value={email}
              name='email'
              type="email"
              onChange={handleInputChange}
              class="form-control"
              id="email"
              placeholder="Your email">
            </input>
          </div>
          <div className='row my-2'>
            <div className='form-group col'>
              <input
                value={firstName}
                name='firstName'
                type="text"
                onChange={handleInputChange}
                class="form-control"
                id="first_name"
                placeholder="First name">
              </input>
            </div>
            <div className='form-group col'>
              <input
                value={lastName}
                name='lastName'
                type="text"
                onChange={handleInputChange}
                class="form-control"
                id="first_name"
                placeholder="Last name">
              </input>
            </div>
          </div>
          <div>
            <textarea
              className='col-12 p-2'
              name='message'
              value={message}
              onChange={handleInputChange}
              rows={5}
              placeholder='Your message...'>
            </textarea>
          </div>
          <button type='submit' value="Send" className='btn-lg btn btn-contact w-25'><b>Submit</b></button>
        </form>
      </div>

    </div>
  );
}