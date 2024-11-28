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
                className="nav-link "
                href="#drop"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                HOME & KITCHEN
              </a>
              <ul className="dropdown-menu flex flex-row justify-between items-start">
                <li>
                  <a className="dropdown-item" href="#men">
                    <div><p className='head-list'>Bed Linen</p>
                      <li>Bedsheet</li>
                      <li>Bed cover</li>
                      <li>Blanket </li>
                      <li>Comfertor</li>
                      <li>Mattress Cover</li>
                      <li>Quilt</li>
              
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <p>Coushion and Pillow</p>
                    <li> Cushions</li>
                    <li> Pillows</li>
                    <li> Bolsters</li>
                    <li> Pillow Covers</li>
                    <li> Cushions Cover</li>
                    <li> Bed Wedge</li>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Rugs, Carpets and Mats
                  </a>
                </li>
               </ul>

                {/* starts  */}
                

                {/* end  */}
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarAjio;
