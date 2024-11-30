import React, { useEffect, useState } from 'react';
import NavbarAjio from '../components/NavbarAjio';
import FooterAjio from '../components/FooterAjio';
import '../styles/TrendingPage.css';
import { useNavigate } from 'react-router-dom';

const TrendingPage = () => {
  const [products, setProducts] = useState([]); // Store fetched products
  const [loading, setLoading] = useState(true); // Loading state
  const [cart, setCart] = useState([]); // Cart items
  const navigate = useNavigate();

  // Fetch products from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Add product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.title} added to the cart!`);
  };

  return (
    <div>
      <NavbarAjio />
      <div style={{ display: 'flex', margin: '150px' }}>
        {/* Sidebar */}
        <div className="refine">
          <h1>Refine By</h1>
          <ul>
            <li><button className="tag-buttons"></button>Women</li>
            <li><button className="tag-buttons"></button>Men</li>
            <li><button className="tag-buttons"></button>Kids</li>
            <li><button className="tag-buttons"></button>Accessories</li>
            <li><button className="tag-buttons"></button>Shoes</li>
          </ul>
        </div>

        {/* Products Section */}
        <div style={{ flex: 1 }}>
          <h1 className="offer-trend">Upto 70% Off</h1>
          <hr />
          <div className="container">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              <div className="product-grid">
                {products.map((product) => (
                  <div key={product.id} className="card">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">${product.price}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          className="btn btn-success"
          onClick={() => navigate('/cart')}
        >
          Go to Cart
        </button>
      </div>
      <FooterAjio />
    </div>
  );
};

export default TrendingPage;
