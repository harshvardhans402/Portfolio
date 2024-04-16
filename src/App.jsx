import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Components/Education';
import Home from './Components/Home';
import Skill from './Components/Skill';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Links from './Components/Links';
import Circle from './Components/Circle';


function App() {

  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ backgroundColor: '#1c0000' }}>
        <Home />
        <Circle />
      </div>
      <Education />
      <Skill />
      <Links style={{}} />
      <Work />

      <Contact />

    </div >
  );
}

export default App;
