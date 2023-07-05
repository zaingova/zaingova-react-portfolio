import React from 'react';

import '../assets/css/nav.css';

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a
          href='#about'
          onClick={() => handlePageChange('About')}
          className='navbar-brand'>
          <h1 className='name mx-5 mt-4'>Zain Gova</h1>
        </a>
        <div className='container-fluid'>
          <ul className='nav nav-tabs'>
            <li className='nav-item'>
              <a
                href='#about'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}