import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Partners from './pages/Partners';
import Lecturers from './pages/Lecturers';
import Lectures from './pages/Lectures';
import Contacts from './pages/Contacts';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'partners': return <Partners />;
      case 'lecturers': return <Lecturers />;
      case 'lectures': return <Lectures />;
      case 'contacts': return <Contacts />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="page-container">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;