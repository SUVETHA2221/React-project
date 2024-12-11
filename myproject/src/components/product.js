import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

function Product() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')  // Corrected endpoint for categories
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const getImagePath = (category) => {
    const sanitizedCategory = category
      .toLowerCase()
      .replace(/ /g, '-')  // Replace spaces with dashes
      .replace(/[^a-z0-9-]/g, ''); // Remove any non-alphanumeric characters

    // Assuming images are stored in the public/images folder
    const imagePath = `/images/${sanitizedCategory}.jpg`;  // Adjust the path based on your folder structure
    return imagePath;
  };

  return (
    <div className="card-container">
      {categories.length > 0 ? (
        categories.map((category) => {
          const imagePath = getImagePath(category);
          return (
            <div key={category} className="card">
              <Link to={`/${category.toLowerCase().replace(/ /g, '')}`}>
                <img
                  src={imagePath}
                  alt={category}
                  onError={(e) => { 
                    e.target.src = '/Snapdeal-Logo.wine.svg'; // Fallback image
                  }}
                />
              </Link>
              <h3>{category}</h3>
              <p>Explore the latest in {category.toLowerCase()} products.</p>
            </div>
          );
        })
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
}

export default Product;