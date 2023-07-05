import React from 'react';
import { contactInfo } from './Contact';

export default function Resume() {
  return (
    <div className='m-3 p-4 col-7'>
      <h1 className='title m-0 text-left'>Resume</h1>
      <p className='p-4 bg-light shadow'>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
          dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
          sodales volutpat et, hendrerit ut dolor. Donec nec ipsum
          in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
          bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
          est ligula suscipit velit, sed bibendum turpis dui in sapien.</p>
      <div className='col-12 card bg-light px-4 py-4 shadow'>

        <h2 className='mb-3'>Zain Gova</h2>
        <div className='d-flex'>
          <p>{}</p>
          <p>647-985-2839</p>
          <p>647-985-2839</p>
        </div>

        <hr></hr>
        <h4>Skills</h4>
      </div>
    </div>
  );
}