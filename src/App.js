import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import Textform from './components/Textform';
// import Aboutme from './components/Aboutme';
function App() { 
  return (
    <>
    
{/* importing navbar */}
<Navbar title="Home"/>
{/* sllider */}
<Slider />

<br>
</br>
{/* text form */}
<Textform name="Enter your Name:" area="Enter your text here:"/>
    {/* <Aboutme/> */}

    </>
  );
}

export default App;
