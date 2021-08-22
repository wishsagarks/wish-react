import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <>
      {/* <nav bar in react */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="wish.png" alt="WISH" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About me</a>
              </li>
              <li className="nav-item dropdown" />
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Features
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">working</a></li>
                <li><a className="dropdown-item" href="/">working in it</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">available soon</a></li>
              </ul>


            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav >


      {/* slide show */}
      <div className="slidesize">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="15000">
      <img src="1.jpg" height="500px" width="auto" className="d-block w-100" alt="1st slide"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Wish is building</h5>
        <p>It’s gonna be legend-... wait for it…DAIRY!</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="2.jpg" height="500px" width="auto" className="d-block w-100" alt="2nd slide"/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Wish is building 2nd slide</h5>
      <p>It’s gonna be legend-... wait for it…DAIRY!wait for it na</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="3.jpg" height="500px" width="auto" className="d-block w-100" alt="3rd slide"/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Wish is building 3rd slide</h5>
      <p>It’s gonna be legend-... wait for it…DAIRY!coming soon1</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

=======
import Navbar from './components/Navbar'
// import Slider from './components/Slider';
// import Textform from './components/Textform';
import Aboutme from './components/Aboutme';
function App() { 
  return (
    <>
    
{/* importing navbar */}
<Navbar title="Home"/>
{/* sllider */}
{/* <Slider /> */}

<br>
</br>
{/* text form */}
{/* <Textform name="Enter your Name:" area="Enter your text here:"/> */}
    <Aboutme/>
>>>>>>> Stashed changes

    </>
  );
}

export default App;
