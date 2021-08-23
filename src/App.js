
import './App.css';
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import Textform from './components/Textform';
// import Aboutme from './components/Aboutme';
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

    </>
  );
}

export default App;
