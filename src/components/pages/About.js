import React from 'react';

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
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
            dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
            sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
            libero. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
            lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.</p>
          <p className='p-4   bg-light shadow'>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
            dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.</p>
          <hr></hr>
          <p className='p-4 bg-light shadow'>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
            dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
            sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
            sed pretium risus rutrum eget. Nam consequat, ligula in faucibus
            vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
            libero. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
            lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Donec placerat accumsan mi, ut congue neque placerat eu. Donec nec ipsum
            in velit pellentesque vehicula sit amet at augue. Maecenas aliquam
            bibendum congue. Pellentesque semper, lectus non ullamcorper iaculis,
            est ligula suscipit velit, sed bibendum turpis dui in sapien.</p>
        </div>
      </section>
    </div>
  );
}