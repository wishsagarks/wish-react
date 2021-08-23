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
      <img src="https://i.ibb.co/KVH6Mwr/1.jpg" height="300px" width="auto" className="d-block w-100" alt="1st slide"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Wish is building</h5>
        <p>It’s gonna be legend-... wait for it…DAIRY!</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://i.ibb.co/Fht1ggj/2.jpg" height="300px" width="auto" className="d-block w-100" alt="2nd slide"/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Wish is building 2nd slide</h5>
      <p>It’s gonna be legend-... wait for it…DAIRY!wait for it na</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/t3VNG94/3.jpg" height="300px" width="auto" className="d-block w-100" alt="3rd slide"/>
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