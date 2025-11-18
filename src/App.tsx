import React, { ReactElement } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'react/jsx-runtime'; 
import './App.css';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Project from './components/Project';
import Certified from './components/Certified';
import Contact from './components/Contact';
import UIDesign from './components/UIDesign'; 
import Navbar from './components/Navbar'; 
import InteractiveBackground from './components/InteractiveBackground';

function App(): ReactElement {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <InteractiveBackground />

      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Profile />
            <Project />
            <Certified />
            <Contact />
          </>
        } />
        <Route path="/UIDesign" element={<UIDesign />} />
        <Route path="*" element={
          <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8">Mohon Maaf Halaman Masi Dalam Tahap Pengembangan</h1>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
              Home
            </Link>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
