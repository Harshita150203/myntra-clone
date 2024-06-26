import React from "react";
import CardComponent from "./CardComponent";

function Banner() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-container"
        data-bs-touch="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/10.jpg"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>India's Biggest Fashion Sale is Live</h5>
              <p>Get Upto 80% Off On Your Favourite Brands.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/2.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>!!SALE IS LIVE!!</h5>
              <p>Shop Now.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/3.jpg" className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Assured Prices</h5>
              <p>Lucky Customer Will Get Assured Prices.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <CardComponent></CardComponent>
    </>
  );
}

export default Banner;
