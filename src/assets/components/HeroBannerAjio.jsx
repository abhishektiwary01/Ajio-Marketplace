import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroBannerAjio = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/trendingpage');
  };
 
  const handleofferClick =()=>{
    navigate('/offers')
  }
  return (
    <div className='hero-banner'>
      
      <div
        id="carouselExampleInterval"
        className="carousel"
        role='button'
        onClick={handleClick}
        data-bs-ride="carousel"
        data-bs-interval="2000" 
      >
        <div className="carousel-inner mt-20">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="public\denim-offer.jpg"
              className="d-block w-100"
              onClick={handleClick}
              alt="..."
              style={{ height: '650px', objectFit: 'cover' }} // Smaller height
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="public\Banners\Nike-offer.jpg"
              className="d-block w-100"
              onClick={handleClick}
              alt="..."
              style={{ height: '650px', objectFit: 'cover' }} // Smaller height
            />
          </div>
          <div className="carousel-item"  data-bs-interval="2000">
            <img
              src="public\Banners\denim-offer.jpg"
              className="d-block w-100"
              alt="..."
              onClick={handleClick}
              style={{ height: '650px', objectFit: 'cover' }} // Smaller height
            />
          </div>
          <div className="carousel-item"  data-bs-interval="2000">
            <img
              src="public\Banners\superdry-banner.avif"
              className="d-block w-100"
              onClick={handleClick}
              alt="..."
              style={{ height: '650px', objectFit: 'cover' }} // Smaller height
            />
          </div>
          <div className="carousel-item"  data-bs-interval="2000">
            <img
              src="public\Banners\Tommy-Banner.avif"
              className="d-block w-100"
              onClick={handleClick}
              alt="..."
              style={{ height: '650px', objectFit: 'cover' }} // Smaller height
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="public\Banners\wrangler-jeans.jpg"
              className="d-block w-100"
              onClick={handleClick}
              alt="..."
              style={{ height: '650px', objectFit: 'cover' }} // Smaller height
            />
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handleClick}
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleClick}
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Second Banner  */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000" // Auto play interval (in milliseconds)
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="public\Templates\ICICI-offer.avif"
              className="d-block w-100"
              onClick={handleofferClick}
              alt="..."
              style={{ height: '100px', objectFit: 'cover' }} // Smaller height
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="public\Templates\SBI-offer.avif"
              className="d-block w-100"
              onClick={handleofferClick}
              alt="..."
              style={{ height: '100px', objectFit: 'cover' }} // Smaller height
            />
          </div>
          <div className="carousel-item">
            <img
              src="public\Templates\Ajio-Offer.avif"
              className="d-block w-100"
              onClick={handleofferClick}
              alt="..."
              style={{ height: '100px', objectFit: 'cover' }} // Smaller height
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroBannerAjio;
