import React from 'react';

import '../../assets/css/input.css';

export default function Contact() {
  return (
    <div className='col-7 m-3 p-4'>
      <h1 className='title m-0 text-left'>Contact Me!</h1>

      <div className='col-12'>
        <p className='p-4 bg-light shadow'>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
          dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
          sodales volutpat et, hendrerit ut dolor. Donec nec ipsum
          in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
          bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
          est ligula suscipit velit, sed bibendum turpis dui in sapien.</p>
      </div>

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
              <input type="text" class="form-control" id="first_name" placeholder="First name"></input>
            </div>
          </div>
          <div>
            <textarea className='col-12 p-2' rows={5} placeholder='Your message...'></textarea>
          </div>
          <button className='btn-lg btn btn-dark w-25'>Submit</button>
        </form>
      </div>

    </div>
  );
}