import './styles/reset.css';
import './styles/main.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'
import Footer from './components/footer/Footer';
import Projects from './components/pages/projects';
import Contacts from './components/pages/contacts';
import Project from './components/project/project';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
