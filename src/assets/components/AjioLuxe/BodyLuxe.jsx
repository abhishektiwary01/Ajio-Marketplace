import React from "react";
// import "./styles/BodyAjio.css";

const BodyAjio = () => {
  return (
    <div>
      {/* Banner */}
      <img src="public/Banners/Discount-Banner.avif" alt="Discount Banner" className="w-100" />
      
      <img className="banner-image" src="public\Templates\Sole-Searching.avif"/>
      {/* Carousel 1 */}
      <div
        id="carousel1"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="public/Banners/Gant-Banner.jpg"
              className="d-block w-100"
              alt="Gant Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/Banners/Galilabs-Banner.jpg"
              className="d-block w-100"
              alt="Galilabs Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/Banners/Miraggio-Banner.jpg"
              className="d-block w-100"
              alt="Miraggio Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/Banners/superdry-banner.avif"
              className="d-block w-100"
              alt="Superdry Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <img className="banner-image" src="public\Templates\Brands.avif"/>
      {/* Cards */}
      <div className="card-group" role="button">
        {[
          { src: "public/Card Image/Bear-house.avif", alt: "Bear House" },
          { src: "public/Card Image/Allen-Solly.avif", alt: "Allen Solly" },
          { src: "public/Card Image/Guess.avif", alt: "Guess" },
          { src: "public/Card Image/Lee-Cooper.avif", alt: "Lee Cooper" },
        ].map((card, index) => (
          <div className="card" key={index}>
            <img src={card.src} className="card-img-top" alt={card.alt} />
          </div>
        ))}
      </div>
      <img src="public\Templates\Seasonal-Deal.avif"/>
      {/* Carousel 2 */}
      <div
        id="carousel2"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="public/Banners/Westernwear-Banner.avif"
              className="d-block w-100"
              alt="Westernwear Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/Banners/Bene-Kleed-Banner.avif"
              className="d-block w-100"
              alt="Bene Kleed Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/Banners/ALDO-Banner.jpg"
              className="d-block w-100"
              alt="ALDO Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel2"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel2"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Top Picks Section */}
      <img src="public\Templates\D-1.0-071124-UHP-Stylesbeyondbasics-Headercopy.avif"/>

      {/* Carousel 3 */}
      <div
        id="carousel3"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="public\Banners\CK.avif"
              className="d-block w-100"
              alt="Westernwear Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="public\Banners\Elle.avif"
              className="d-block w-100"
              alt="Bene Kleed Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="public\Banners\Showoff.avif"
              className="d-block w-100"
              alt="ALDO Banner"
              style={{ height: "650px", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel3"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel3"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
   
   
    {/* start */}
    <img src="public\Templates\Westernwinterwonderland.avif"/>
    <div id="cardSlider" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="card-group">
        <div class="card">
          <img src="public/Card Image/WW-fig.avif" class="card-img-top" alt="WW-fig" />
        </div>
        <div class="card">
          <img src="public/Card Image/WW-arrow.avif" class="card-img-top" alt="WW-arrow" />
        </div>
        <div class="card">
          <img src="public/Card Image/WW-Gap.avif" class="card-img-top" alt="WW-Gap" />
        </div>
        <div class="card">
          <img src="public/Card Image/WW-levis.avif" class="card-img-top" alt="WW-levis" />
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="card-group">
        <div class="card">
          <img src="public/Card Image/WW-monte.avif" class="card-img-top" alt="WW-monte" />
        </div>
        <div class="card">
          <img src="public/Card Image/WW-Raymond.avif" class="card-img-top" alt="WW-Raymond" />
        </div>
        <div class="card">
          <img src="public/Card Image/WW-fig.avif" class="card-img-top" alt="WW-fig" />
        </div>
        <div class="card">
          <img src="public/Card Image/WW-arrow.avif" class="card-img-top" alt="WW-arrow" />
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#cardSlider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span ></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#cardSlider" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span ></span>
  </button>
</div>
{/* end  */}
    </div>
  );
};

export default BodyAjio;
