
import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import Textform from './components/Textform';
import React, { useState } from 'react'

// import Aboutme from './components/Aboutme';
function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') 
    { 
      setmode('dark'); 
    }
    else 
    {
      setmode('light');

    }
  }

  return (
    <>

      {/* importing navbar */}
      <Navbar title="Home" mode={mode} toggleMode={toggleMode} />
      {/* sllider */}
      <Slider />

      <br>
      </br>
      {/* text form */}
      <Textform name="Enter your Name:" area="Enter your text here:" />
      {/* <Aboutme/> */}

    </>
  );
}

export default App;
