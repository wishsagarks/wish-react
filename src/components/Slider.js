import React from 'react'

export default function slider() {
  return (
    <div>
      <>
        {/* slide show */}
        <div className="slidesize">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="5000">
<<<<<<< Updated upstream
      <img src="1.jpg" height="300px" width="auto" className="d-block w-100" alt="1st slide"/>
=======
      <img src="https://i.postimg.cc/B8tGnzQv/1.png" height="500px" width="auto" className="d-block w-100" alt="1st slide"/>
>>>>>>> Stashed changes
      <div className="carousel-caption d-none d-md-block">
        <h5>Wish is building</h5>
        <p>It’s gonna be legend-... wait for it…DAIRY!</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
<<<<<<< Updated upstream
      <img src="2.jpg" height="300px" width="auto" className="d-block w-100" alt="2nd slide"/>
=======
      <img src="https://i.postimg.cc/QxcMHWf6/1.jpg" height="500px" width="auto" className="d-block w-100" alt="2nd slide"/>
>>>>>>> Stashed changes
      <div className="carousel-caption d-none d-md-block">
      <h5>Wish is building 2nd slide</h5>
      <p>It’s gonna be legend-... wait for it…DAIRY!wait for it na</p>
      </div>
    </div>
    <div className="carousel-item">
<<<<<<< Updated upstream
      <img src="3.jpg" height="300px" width="auto" className="d-block w-100" alt="3rd slide"/>
=======
      <img src="https://i.postimg.cc/sxQvn69y/3.jpg" height="500px" width="auto" className="d-block w-100" alt="3rd slide"/>
>>>>>>> Stashed changes
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
{/* not working */}
{/* <slider/> */}
      </>
    </div>
  )
}