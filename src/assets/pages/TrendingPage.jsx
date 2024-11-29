import React, { useEffect, useState } from 'react';
import NavbarAjio from '../components/NavbarAjio';
import '../styles/trendingpage.css';
import { useNavigate } from 'react-router-dom';
import FooterAjio from '../components/FooterAjio';

const TrendingPage = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // Loading state

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/ProductsAjio'); 
  };
  // Fetch products from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products') // Fetch 12 products
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Update state with fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <div>
      <NavbarAjio />
      <div style={{ display: 'flex', margin: '150px' }}>
  {/* Sidebar */}
  <div className="refine">
    <h1>Refine By</h1>
    <ul>
      <li><button className='tag-buttons'></button>Women</li>
      <li><button className='tag-buttons'></button>Men</li>
      <li><button className='tag-buttons'></button>Kids</li>
      <li><button className='tag-buttons'></button>Accessories</li>
      <li><button className='tag-buttons'> </button>Shoes</li>
    </ul>
  </div>

  <div style={{ flex: 1 }}>
  <h1 className="offer-trend">Upto 70% Off</h1>
  <hr />
  <div className="container">
    {loading ? (
      <p>Loading products...</p>
    ) : (
      <div className="product-grid ">
        {products.map((product) => (
          <div key={product.id} className="card" role="button">
            <img
              src={product.image}
              alt={product.title}
              onClick={handleProductClick}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

</div>

<FooterAjio></FooterAjio>
    </div>
  );
};

export default TrendingPage;