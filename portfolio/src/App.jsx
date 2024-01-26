import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import React from 'react';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects-gallery" element={<ProjectsGallery />} />
    </Routes>
  </Router>

}

export default App
