// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import BlogPosts from './BlogPosts';
import AboutMe from './AboutMe';
import PoemsAndWritings from './PoemsAndWritings';
import ContentCreation from './ContentCreation';
import ProgrammingProjects from './ProgrammingProjects';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>  {/* Changed from Switch to Routes */}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blogposts" element={<BlogPosts />} />
          <Route path="/poems" element={<PoemsAndWritings />} />
          <Route path="/content" element={<ContentCreation />} />
          <Route path="/projects" element={<ProgrammingProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
