import React from 'react';
import '../AjioLuxe/styles/HeroBannerLuxe.css'

const HeroBannerLuxe = () => {
  return (
    <div className="hero-banner">
      {/* First Banner */}
      <div
        id="carouselMainBanner"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="public/Banners/Aldo-banner.avif"
              className="d-block w-100"
              alt="Aldo Banner"
              style={{ height: '650px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="public/Banners/Nike-offer.jpg"
              className="d-block w-100"
              alt="Nike Offer"
              style={{ height: '650px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="public/Banners/denim-offer.jpg"
              className="d-block w-100"
              alt="Denim Offer"
              style={{ height: '650px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="public/Banners/superdry-banner.avif"
              className="d-block w-100"
              alt="Superdry Banner"
              style={{ height: '650px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="public/Banners/Tommy-Banner.avif"
              className="d-block w-100"
              alt="Tommy Banner"
              style={{ height: '650px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="public/Banners/wrangler-jeans.jpg"
              className="d-block w-100"
              alt="Wrangler Jeans"
              style={{ height: '650px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselMainBanner"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselMainBanner"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Second Banner */}
      <div
        id="carouselSmallBanner"
        className="carousel slide mt-4"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img
              src="public/Templates/ICICI-offer.avif"
              className="d-block w-100"
              alt="ICICI Offer"
              style={{ height: '100px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="public/Templates/SBI-offer.avif"
              className="d-block w-100"
              alt="SBI Offer"
              style={{ height: '100px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="public/Templates/Ajio-Offer.avif"
              className="d-block w-100"
              alt="Ajio Offer"
              style={{ height: '100px', objectFit: 'cover' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselSmallBanner"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselSmallBanner"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroBannerLuxe;
