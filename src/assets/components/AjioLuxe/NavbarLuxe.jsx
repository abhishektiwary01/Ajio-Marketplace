import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AjioLuxe/styles/NavbarLuxe.css';
import { MdFavoriteBorder } from "react-icons/md";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function NavbarAjio() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to the "HomeLuxe" route
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Login Section */}
        <div className="login d-inline fixed-top">
          <p className="login-data d-inline" role="button">Sign In/Join AJIO</p>
          <p className="login-data d-inline" role="button">Customer Care</p>
          <button className="luxe text-light" onClick={handleClick}>
            Visit AJIO
          </button>
        </div>

        {/* Logo */}
        <img
          src="/Icons/ajioluxe-logo.avif" // Ensure the path is correct
          className="logo"
          alt="AJIO Logo"
        />

        {/* Search Bar and Icons */}
        <div className="header-container">
          <div className="search-bar">
            <input
              id="search-input"
              type="search"
              className="form-control"
              placeholder="Search Luxe Store"
            />
            <button id="search-button" type="button" className="btn">
              <img
                src="/Icons/vector-search-icon-removebg-preview.png"
                alt="Search"
                className="search-icon"
              />
            </button>
          </div>

          <div className="bag-buttons">
            <MdFavoriteBorder className="cart" role="button" />
            <BiShoppingBag className="cart" role="button" />
          </div>
        </div>

        {/* Navbar Toggler for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                MEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                WOMEN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                KIDS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BEAUTY
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#drop"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                HOME & KITCHEN
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#men">
                    <p className="head-list">Bed Linen</p>
                    <ul>
                      <li>Bedsheet</li>
                      <li>Bed Cover</li>
                      <li>Blanket</li>
                      <li>Comforter</li>
                      <li>Mattress Cover</li>
                      <li>Quilt</li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <p>Cushion and Pillow</p>
                    <ul>
                      <li>Cushions</li>
                      <li>Pillows</li>
                      <li>Bolsters</li>
                      <li>Pillow Covers</li>
                      <li>Cushion Covers</li>
                      <li>Bed Wedge</li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rugs, Carpets, and Mats
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAjio;
