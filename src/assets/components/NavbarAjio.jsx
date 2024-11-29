
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/NavbarAjio.css';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";


function NavbarAjio() {
  
  const navigate = useNavigate();

  const handleLuxeClick = () => {
    navigate('/luxe'); // Navigate to the "HomeLuxe" route
  };
  const handlecustclick = () => {
    navigate('/CustomerCAre'); // Navigate to the "HomeLuxe" route
  };
  const handleHomeClick = () => {
    navigate('/'); // Navigate to the "HomeLuxe" route
  };
  const handleloginclick = ()=>{
    navigate('/LoginPage')
  }
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchQuery.trim() !== "https://fakestoreapi.com/products") {
      // Perform the search logic (e.g., call an API or navigate)
      console.log("Searching for:", searchQuery);
    } else {
      alert("Please enter a search query!");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="login d-inline fixed-top">
          <p className="login-data d-inline" role='button'onClick={handleloginclick}>Sign In/Join AJIO</p>
          <p className="login-data d-inline " role='button' onClick={handlecustclick}>Customer Care</p>
          <button className="luxe text-light" onClick={handleLuxeClick} >
            Visit AJIOLUXE
          </button>
<div>
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
        </div></div>

        <img
          src="public/Icons/Ajio-Logo2.svg"
          className="logo"
          alt="AJIO Logo"
          role='button'
          onClick={handleHomeClick}
        />





{/* Navigation links  */}

<div className="collapse navbar-collapse" id="navbarNavDropdown">
  
  <ul className="navbar-nav" role='button'>
  <li className="nav-item dropdown">
  <a
    className="nav-link"
    href="#"
    id="menDropdown"
    role="button"
    aria-expanded="false"
  >
    MEN
  </a>

  
  <ul className="dropdown-menu">
  <div className="menu-row">

  <span>
  <p>CLOTHING</p>
  <li><a class="dropdown-item" href="#">Western Wear</a></li>
  <li><a class="dropdown-item" href="#">Ethnic Wear</a></li>
  <li><a class="dropdown-item" href="#">Curve Size</a></li>
  <li><a class="dropdown-item" href="#">AJIO Global</a></li>
  <li><a class="dropdown-item" href="#">Night & Loungewear</a></li>
  <li><a class="dropdown-item" href="#">Athleisure</a></li>
  <li><a class="dropdown-item" href="#">Fusion Wear</a></li>
  <li><a class="dropdown-item" href="#">Dresses & Gowns</a></li>
  <li><a class="dropdown-item" href="#">Kurtas</a></li>
  <li><a class="dropdown-item" href="#">Kurtis & Tunics</a></li>
  <li><a class="dropdown-item" href="#">Pants & Shorts</a></li>
  <li><a class="dropdown-item" href="#">Jackets & Shrugs</a></li>
  <li><a class="dropdown-item" href="#">Shirts, Tops & Tunics</a></li>
</span>

<span>
  <p>FOOTWEAR</p>
  <li><a class="dropdown-item" href="#">Casual Shoes</a></li>
  <li><a class="dropdown-item" href="#">Flip-Flops & Slippers</a></li>
  <li><a class="dropdown-item" href="#">Formal Shoes</a></li>
  <li><a class="dropdown-item" href="#">Sandals</a></li>
  <li><a class="dropdown-item" href="#">Sneakers</a></li>
  <li><a class="dropdown-item" href="#">Sports Shoes</a></li>
</span>

<span>
  <p>ACCESSORIES</p>
  <li><a class="dropdown-item" href="#">Backpacks</a></li>
  <li><a class="dropdown-item" href="#">Bags & Wallets</a></li>
  <li><a class="dropdown-item" href="#">Belts</a></li>
  <li><a class="dropdown-item" href="#">Caps & Hats</a></li>
  <li><a class="dropdown-item" href="#">Fashion Accessories</a></li>
  <li><a class="dropdown-item" href="#">Luggage & Trolleys</a></li>
  <li><a class="dropdown-item" href="#">Socks</a></li>
  <li><a class="dropdown-item" href="#">Sunglasses & Frames</a></li>
  <li><a class="dropdown-item" href="#">Watches</a></li>
</span>
<span>
  <p>FESTIVE EDITS</p>
  <li><a class="dropdown-item" href="#">Kerala Sarees</a></li>
  <li><a class="dropdown-item" href="#">Diwali Dresses</a></li>
  <li><a class="dropdown-item" href="#">Diwali Sarees</a></li>
  <li><a class="dropdown-item" href="#">Diwali Kurta</a></li>
  <li><a class="dropdown-item" href="#">Dhotis</a></li>
  <li><a class="dropdown-item" href="#">Readymade Dhotis</a></li>
  <li><a class="dropdown-item" href="#">Ramraj Dhotis</a></li>

  <p>JEWELLERY</p>
  <li><a class="dropdown-item" href="#">Gold and Silver Coins</a></li>
  <li><a class="dropdown-item" href="#">Gold And Diamond Jewellery</a></li>
  <li><a class="dropdown-item" href="#">Silver Jewellery</a></li>
</span>
</div>
    

  </ul>
</li>


    
    
    
    
    
    
    
    
    
    <li className="nav-item">
      <a className="nav-link" href="#">
        WOMEN
      </a>
      
      <ul className="dropdown-menu">
  <div className="menu-row">

    <span>
      <p>CLOTHING</p>
      <li><a className="dropdown-item" href="#">Western Wear</a></li>
      <li><a className="dropdown-item" href="#">Ethnic Wear</a></li>
      <li><a className="dropdown-item" href="#">Curve Size</a></li>
      <li><a className="dropdown-item" href="#">AJIO Global</a></li>
      <li><a className="dropdown-item" href="#">Night & Loungewear</a></li>
      <li><a className="dropdown-item" href="#">Athleisure</a></li>
      <li><a className="dropdown-item" href="#">Fusion Wear</a></li>
      <li><a className="dropdown-item" href="#">Dresses & Gowns</a></li>
      <li><a className="dropdown-item" href="#">Kurtas</a></li>
      <li><a className="dropdown-item" href="#">Kurtis & Tunics</a></li>
      <li><a className="dropdown-item" href="#">Pants & Shorts</a></li>
      <li><a className="dropdown-item" href="#">Jackets & Shrugs</a></li>
      <li><a className="dropdown-item" href="#">Shirts, Tops & Tunics</a></li>
    </span>

   
    <span>
      <p>FOOTWEAR</p>
      <li><a className="dropdown-item" href="#">Casual Shoes</a></li>
      <li><a className="dropdown-item" href="#">Flat Sandals</a></li>
      <li><a className="dropdown-item" href="#">Sports Shoes</a></li>
      <li><a className="dropdown-item" href="#">Flip Flop & Slippers</a></li>
      <li><a className="dropdown-item" href="#">Heeled Sandals</a></li>
      <li><a className="dropdown-item" href="#">Heeled Shoes</a></li>
      <li><a className="dropdown-item" href="#">Boots</a></li>
      <li><a className="dropdown-item" href="#">Woodland</a></li>
    </span>

   
    <span>
      <p>ACCESSORIES</p>
      <li><a className="dropdown-item" href="#">Sunglasses & Frames</a></li>
      <li><a className="dropdown-item" href="#">Watches</a></li>
      <li><a className="dropdown-item" href="#">Bags, Belts, and Wallets</a></li>
      <li><a className="dropdown-item" href="#">Stoles and Scarves</a></li>
      <li><a className="dropdown-item" href="#">Socks and Stockings</a></li>
      <li><a className="dropdown-item" href="#">Caps</a></li>
      <li><a className="dropdown-item" href="#">Luggage & Trolleys</a></li>
      <p>FESTIVE EDITS</p>
      <li><a className="dropdown-item" href="#">Kerala Sarees</a></li>
      <li><a className="dropdown-item" href="#">Diwali Dresses</a></li>
      <li><a className="dropdown-item" href="#">Diwali Sarees</a></li>
    </span>

   
    <span>
      <p>JEWELLERY</p>
      <li><a className="dropdown-item" href="#">Gold and Silver Coins</a></li>
      <li><a className="dropdown-item" href="#">Gold And Diamond Jewellery</a></li>
      <li><a className="dropdown-item" href="#">Silver Jewellery</a></li>
      <li><a className="dropdown-item" href="#">Fashion Jewellery</a></li>
      <p>LINGERIE & INNERWEAR</p>
      <li><a className="dropdown-item" href="#">Bras</a></li>
      <li><a className="dropdown-item" href="#">Panties</a></li>
      <li><a className="dropdown-item" href="#">Camisoles & Slips</a></li>
      <li><a className="dropdown-item" href="#">Maternity Wear</a></li>
      <li><a className="dropdown-item" href="#">Thermal Wear</a></li>
    </span>
  </div>
</ul>

</li>

    
    <li className="nav-item">
      <a className="nav-link" href="#">
        KIDS
      </a>
      <ul className="dropdown-menu">
      <div className="menu-row">
      <span>
  <p>NEW IN: CLOTHING</p>
  <p>BOYS</p>
  <li><a class="dropdown-item" href="#">Denims & Trousers</a></li>
  <li><a class="dropdown-item" href="#">Joggers & Track Pants</a></li>
  <li><a class="dropdown-item" href="#">Outerwear</a></li>
  <li><a class="dropdown-item" href="#">Shirts</a></li>
  <li><a class="dropdown-item" href="#">Shorts & 3/4ths</a></li>
  <li><a class="dropdown-item" href="#">T-shirts</a></li>
  <p>FEATURED</p>
  <li><a class="dropdown-item" href="#">Denims Under 799</a></li>
  <li><a class="dropdown-item" href="#">Shirts Under 599</a></li>
  <li><a class="dropdown-item" href="#">T-Shirts Under 399</a></li>

  <p>GIRLS</p>
  <li><a class="dropdown-item" href="#">Dresses & Frocks</a></li>
  <li><a class="dropdown-item" href="#">Jeans & Jeggings</a></li>
  <li><a class="dropdown-item" href="#">Leggings</a></li>
  <li><a class="dropdown-item" href="#">Outerwear</a></li>
  <li><a class="dropdown-item" href="#">Skirts & Shorts</a></li>
  <li><a class="dropdown-item" href="#">Tops & T-shirts</a></li>
  <p>FEATURED</p>
  <li><a class="dropdown-item" href="#">Dresses Under 499</a></li>
  <li><a class="dropdown-item" href="#">Tops Under 399</a></li>
</span>

<span>
  <p>NEW IN: FOOTWEAR & ACCS</p>
  <li><a class="dropdown-item" href="#">Footwear</a></li>
  <li><a class="dropdown-item" href="#">Accessories</a></li>
  <p>FEATURED BRANDS</p>
  <li><a class="dropdown-item" href="#">Crocs</a></li>
  <li><a class="dropdown-item" href="#">MINI KLUB</a></li>
  <li><a class="dropdown-item" href="#">Gini & Jony</a></li>
  <li><a class="dropdown-item" href="#">Hamleys</a></li>
  <li><a class="dropdown-item" href="#">Mothercare</a></li>
  <li><a class="dropdown-item" href="#">Marks & Spencer</a></li>
  <li><a class="dropdown-item" href="#">Pepe Jeans</a></li>
  <li><a class="dropdown-item" href="#">Peppermint</a></li>
  <li><a class="dropdown-item" href="#">UCB Kids</a></li>
  <li><a class="dropdown-item" href="#">U.S.P.A Kids</a></li>
  <li><a class="dropdown-item" href="#">MILA BABY</a></li>
  <li><a class="dropdown-item" href="#">Adidas Kids</a></li>
  <li><a class="dropdown-item" href="#">Lee Cooper</a></li>
</span>
<span>
  <p>BABY</p>
  <li><a class="dropdown-item" href="#">Sets</a></li>
  <p>TOYS AND BABYCARE</p>
  <li><a class="dropdown-item" href="#">Action-Figurine & Collectibles</a></li>
  <li><a class="dropdown-item" href="#">Creative & Educational Toys</a></li>
  <li><a class="dropdown-item" href="#">Gaming, Robots & Vehicles</a></li>
  <li><a class="dropdown-item" href="#">Infants Toys</a></li>
  <li><a class="dropdown-item" href="#">Role & Pretend Play</a></li>
  <li><a class="dropdown-item" href="#">School, Party Supplies & Books</a></li>
  <li><a class="dropdown-item" href="#">Soft Toys</a></li>
  <li><a class="dropdown-item" href="#">Toy-Guns & Accessories</a></li>
</span>
<span>
  <p>SHOP BY AGE</p>
  <li><a class="dropdown-item" href="#">0 to 2 Years</a></li>
  <li><a class="dropdown-item" href="#">2 to 5 Years</a></li>
  <li><a class="dropdown-item" href="#">5 to 8 Years</a></li>
  <li><a class="dropdown-item" href="#">8 to 12 Years</a></li>
  <li><a class="dropdown-item" href="#">12 Years and Above</a></li>

  <p>FESTIVE EDITS</p>
  <li><a class="dropdown-item" href="#">Girls Diwali Dress</a></li>
  <li><a class="dropdown-item" href="#">Boys Diwali Dress</a></li>
</span>
</div>
</ul>
</li>
  
  
  
    <li className="nav-item">
      <a className="nav-link" href="#">
        BEAUTY
      </a>
      <ul className="dropdown-menu">
  <div className="menu-row">

  <span>
  <p>CLOTHING</p>
  <li><a class="dropdown-item" href="#">Western Wear</a></li>
  <li><a class="dropdown-item" href="#">Ethnic Wear</a></li>
  <li><a class="dropdown-item" href="#">Curve Size</a></li>
  <li><a class="dropdown-item" href="#">AJIO Global</a></li>
  <li><a class="dropdown-item" href="#">Night & Loungewear</a></li>
  <li><a class="dropdown-item" href="#">Athleisure</a></li>
  <li><a class="dropdown-item" href="#">Fusion Wear</a></li>
  <li><a class="dropdown-item" href="#">Dresses & Gowns</a></li>
  <li><a class="dropdown-item" href="#">Kurtas</a></li>
  <li><a class="dropdown-item" href="#">Kurtis & Tunics</a></li>
  <li><a class="dropdown-item" href="#">Pants & Shorts</a></li>
  <li><a class="dropdown-item" href="#">Jackets & Shrugs</a></li>
  <li><a class="dropdown-item" href="#">Shirts, Tops & Tunics</a></li>
</span>

<span>
  <p>FOOTWEAR</p>
  <li><a class="dropdown-item" href="#">Casual Shoes</a></li>
  <li><a class="dropdown-item" href="#">Flip-Flops & Slippers</a></li>
  <li><a class="dropdown-item" href="#">Formal Shoes</a></li>
  <li><a class="dropdown-item" href="#">Sandals</a></li>
  <li><a class="dropdown-item" href="#">Sneakers</a></li>
  <li><a class="dropdown-item" href="#">Sports Shoes</a></li>
</span>

<span>
  <p>ACCESSORIES</p>
  <li><a class="dropdown-item" href="#">Backpacks</a></li>
  <li><a class="dropdown-item" href="#">Bags & Wallets</a></li>
  <li><a class="dropdown-item" href="#">Belts</a></li>
  <li><a class="dropdown-item" href="#">Caps & Hats</a></li>
  <li><a class="dropdown-item" href="#">Fashion Accessories</a></li>
  <li><a class="dropdown-item" href="#">Luggage & Trolleys</a></li>
  <li><a class="dropdown-item" href="#">Socks</a></li>
  <li><a class="dropdown-item" href="#">Sunglasses & Frames</a></li>
  <li><a class="dropdown-item" href="#">Watches</a></li>
</span>
<span>
  <p>FESTIVE EDITS</p>
  <li><a class="dropdown-item" href="#">Kerala Sarees</a></li>
  <li><a class="dropdown-item" href="#">Diwali Dresses</a></li>
  <li><a class="dropdown-item" href="#">Diwali Sarees</a></li>
  <li><a class="dropdown-item" href="#">Diwali Kurta</a></li>
  <li><a class="dropdown-item" href="#">Dhotis</a></li>
  <li><a class="dropdown-item" href="#">Readymade Dhotis</a></li>
  <li><a class="dropdown-item" href="#">Ramraj Dhotis</a></li>

  <p>JEWELLERY</p>
  <li><a class="dropdown-item" href="#">Gold and Silver Coins</a></li>
  <li><a class="dropdown-item" href="#">Gold And Diamond Jewellery</a></li>
  <li><a class="dropdown-item" href="#">Silver Jewellery</a></li>
</span>
</div>
    

  </ul>
  </li>

  
    <li className="nav-item dropdown">
      <a
        className="nav-link "
       
        id="navbarDropdown"
       
      >
        HOME & KITCHEN
      </a>
      <ul className="dropdown-menu">
      <div className="menu-row">
      <span>
  <p>BED LINEN</p>
  <li><a class="dropdown-item" href="#">Bedsheets</a></li>
  <li><a class="dropdown-item" href="#">Bedding Sets</a></li>
  <li><a class="dropdown-item" href="#">Blankets, Dohars & Quilts</a></li>
  <li><a class="dropdown-item" href="#">Comforters</a></li>
  <li><a class="dropdown-item" href="#">Bed Covers</a></li>
  <li><a class="dropdown-item" href="#">Mattress Protectors</a></li>
  <li><a class="dropdown-item" href="#">Quilt & Duvet Covers</a></li>

  <p>CUSHIONS & PILLOWS</p>
  <li><a class="dropdown-item" href="#">Cushions</a></li>
  <li><a class="dropdown-item" href="#">Pillows</a></li>
  <li><a class="dropdown-item" href="#">Bed Wedges & Neck Pillows</a></li>
  <li><a class="dropdown-item" href="#">Bolsters</a></li>
  <li><a class="dropdown-item" href="#">Cushion Covers</a></li>
  <li><a class="dropdown-item" href="#">Pillow Covers</a></li>
</span>
<span>
  <p>RUGS, CARPETS & MATS</p>
  <li><a class="dropdown-item" href="#">All Rugs, Carpets & Mats</a></li>

  <p>CURTAINS & ACCESSORIES</p>
  <li><a class="dropdown-item" href="#">Window Curtains</a></li>
  <li><a class="dropdown-item" href="#">Door Curtains</a></li>

  <p>BATH</p>
  <li><a class="dropdown-item" href="#">Bath Towels & Robes</a></li>
  <li><a class="dropdown-item" href="#">Hand & Face Towels</a></li>
  <li><a class="dropdown-item" href="#">Towel Sets</a></li>
  <li><a class="dropdown-item" href="#">Bath Curtains & Mats</a></li>
  <li><a class="dropdown-item" href="#">Bathroom Organisers</a></li>
  <li><a class="dropdown-item" href="#">Laundry Baskets & Dryers</a></li>
  <li><a class="dropdown-item" href="#">Holders & More</a></li>
</span>
<span>
  <p>KITCHEN</p>
  <li><a class="dropdown-item" href="#">Cookware & Cutlery</a></li>
  <li><a class="dropdown-item" href="#">Bakeware</a></li>
  <li><a class="dropdown-item" href="#">Kitchen Tools</a></li>
  <li><a class="dropdown-item" href="#">Kitchen Aprons, Gloves & Towels</a></li>
  <li><a class="dropdown-item" href="#">Kitchen Organisers</a></li>

  <p>DINING</p>
  <li><a class="dropdown-item" href="#">Serveware & Drinkware</a></li>
  <li><a class="dropdown-item" href="#">Table Linen Sets</a></li>
  <li><a class="dropdown-item" href="#">Table Covers & Runners</a></li>
  <li><a class="dropdown-item" href="#">Table Napkins</a></li>
  <li><a class="dropdown-item" href="#">Placemats & Coasters</a></li>
</span>
<span>
  <p>HOME DECOR</p>
  <li><a class="dropdown-item" href="#">Wall Decor</a></li>
  <li><a class="dropdown-item" href="#">Wall Shelves</a></li>
  <li><a class="dropdown-item" href="#">Clocks</a></li>
  <li><a class="dropdown-item" href="#">Photo Frames</a></li>
  <li><a class="dropdown-item" href="#">Mirrors</a></li>
  <li><a class="dropdown-item" href="#">Lamps, Diyas & Candles</a></li>
  <li><a class="dropdown-item" href="#">Home Fragrance</a></li>
  <li><a class="dropdown-item" href="#">Plants & Flowers</a></li>

  <p>FESTIVE GIFTS</p>
  <li><a class="dropdown-item" href="#">Bells & Wind Chimes</a></li>
  <li><a class="dropdown-item" href="#">Decorative Pots, Plates & Jars</a></li>
  <li><a class="dropdown-item" href="#">Fengshui</a></li>
  <li><a class="dropdown-item" href="#">Indoor Fountains</a></li>
  <li><a class="dropdown-item" href="#">Religious Idols</a></li>
  <li><a class="dropdown-item" href="#">Vases</a></li>
</span>
<span>
  <p>GARDENING & PLANTERS</p>
  <li><a class="dropdown-item" href="#">All Gardening & Planters</a></li>

  <p>HOME ESSENTIALS</p>
  <li><a class="dropdown-item" href="#">Gift For Everyone Under 999</a></li>
  <li><a class="dropdown-item" href="#">Winter Carnival Upto 60%</a></li>
  <li><a class="dropdown-item" href="#">Kids Room Min 40%</a></li>
  <li><a class="dropdown-item" href="#">Heritage Of India</a></li>
</span>

    </div>
    </ul>
    </li>
  </ul>
</div>

      </div>
    </nav>
  );
}

export default NavbarAjio;
