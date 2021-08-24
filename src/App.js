
import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import Textform from './components/Textform';
import React, { useState } from 'react'

// import Aboutme from './components/Aboutme';
function App() {
  const [mode, setmode] = useState('dark');
  


  const toggleMode = () => {
    if (mode === 'light') 
    { 
      setmode('dark'); 
      document.body.style.backgroundColor="black";

    }
    else 
    {
      setmode('light'); 
      document.body.style.backgroundColor="#2497d1";
    }
  }

  return (
    <>

      {/* importing navbar */}
      <Navbar title="Home" mode={mode} toggleMode={toggleMode}  />
      {/* sllider */}
      <Slider />

      <br>
      </br>
      {/* text form */}
      <Textform name="Enter your Name:" area="Enter your text here:" mode={mode} />
      {/* <Aboutme/> */}

    </>
  );
}

export default App;
