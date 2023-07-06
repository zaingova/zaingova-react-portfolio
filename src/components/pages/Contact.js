import React from 'react';

import '../../assets/css/input.css';

export default function Contact() {
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

      <div className='col-12 card bg-light px-4 py-5 shadow'>
        <form>
          <div className='form-group col-12 my-2'>
            <input type="email" class="form-control" id="email" placeholder="Your email"></input>
          </div>
          <div className='row my-2'>
            <div className='form-group col'>
              <input type="text" class="form-control" id="first_name" placeholder="First name"></input>
            </div>
            <div className='form-group col'>
              <input type="text" class="form-control" id="first_name" placeholder="Last name"></input>
            </div>
          </div>
          <div>
            <textarea className='col-12 p-2' rows={5} placeholder='Your message...'></textarea>
          </div>
          <button className='btn-lg btn btn-contact w-25'>Submit</button>
        </form>
      </div>

    </div>
  );
}