import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Portfolio')
      return <Portfolio />;
    else if (currentPage === 'About')
      return <About />;
    else if (currentPage === 'Contact')
      return <Contact />;
    else
      return <Resume />;
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className='content-container'>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
      <footer className='footer-pin'>
        <Footer />
      </footer>
    </div>
  );
}