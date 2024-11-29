import React, { useEffect, useState } from 'react';

const ProductAjio = () => {
  const [products, setProducts] = useState([]); // State to hold all products
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product

  useEffect(() => {
    // Fetch multiple products
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {/* Conditional rendering */}
        {selectedProduct ? (
          // Show only the selected product
          <div className="col-md-4" key={selectedProduct.id}>
            <div className="card" role="button" onClick={() => setSelectedProduct(null)}>
              <img
                src={selectedProduct.image}
                className="card-img-top"
                alt={selectedProduct.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{selectedProduct.title}</h5>
                <p className="card-text">${selectedProduct.price}</p>
                <p className="card-text">{selectedProduct.description}</p>
                <button className="btn btn-primary" onClick={() => setSelectedProduct(null)}>
                  Back
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Show all products
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card" role="button" onClick={() => setSelectedProduct(product)}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductAjio;
