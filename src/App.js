
import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'

// import Aboutme from './components/Aboutme';
function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout (() => {
      setalert(null);

    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "black";
      showalert("set to light", "success");



    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "#2497d1";
      showalert("set to dark", "success");
    }
  }

  return (
    <>

      {/* importing navbar */}
      <Navbar title="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
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
