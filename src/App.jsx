import React from 'react';

import './App.css';
import Navbar from './Components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Components/Education';

import Home from './Components/Home';
import Skill from './Components/Skill';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Links from './Components/Links';


function App() {
  // const controls = useAnimation();
  // const sectionRef = useRef(null);



  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar className='navbar' />
      <Home />
      <Education />
      <Skill />
      <Links style={{}} />
      <Work />

      <Contact />

    </div >
  );
}

export default App;
