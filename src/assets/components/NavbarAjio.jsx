import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/NavbarAjio.css';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function NavbarAjio() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/luxe'); // Navigate to the "HomeLuxe" route
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="login d-inline fixed-top">
          <p className="login-data d-inline" role='button'>Sign In/Join AJIO</p>
          <p className="login-data d-inline " role='button'>Customer Care</p>
          <button className="luxe text-light" onClick={handleClick} >
            Visit AJIOLUXE
          </button>

          <div className="search-box">
            <input 
              id="search-input" 
              type="search" 
              className="form-control" 
              placeholder="Search AJIO"
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
            <button className="bag text-white">
              <MdOutlineFavoriteBorder />
            </button>
            <button className='bag text-white'>
              <MdOutlineShoppingBag />
            </button>
          </div>
        </div>

        <img
          src="public\Icons\Ajio-Logo2.svg"
          className="logo"
          alt="AJIO Logo"
        />

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

<div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">
        MEN
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">T-Shirts</a></li>
        <li><a className="dropdown-item" href="#">Shirts</a></li>
        <li><a className="dropdown-item" href="#">Pants</a></li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        WOMEN
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Dresses</a></li>
        <li><a className="dropdown-item" href="#">Tops</a></li>
        <li><a className="dropdown-item" href="#">Skirts</a></li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        KIDS
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">T-Shirts</a></li>
        <li><a className="dropdown-item" href="#">Shorts</a></li>
        <li><a className="dropdown-item" href="#">Sweaters</a></li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        BEAUTY
      </a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Makeup</a></li>
        <li><a className="dropdown-item" href="#">Skincare</a></li>
        <li><a className="dropdown-item" href="#">Haircare</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#drop"
        id="navbarDropdown"
        role="button"
        aria-expanded="false"
      >
        HOME & KITCHEN
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Bed Linen
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Cushions & Pillows
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