import React from 'react';
import  "../Styles/Card.css"

const Card = () => {
  return (
    <>
      <div className="product-card">
        <img src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Product Image" />

        <h2>DUMMY NAME</h2>

        <p className="price">
          <span className="mrp">MRP: ₹595.00</span>
          {/* <span className="best-price">Best Price: ₹493.85</span> */}
        </p>

        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </>
  );
};

export default Card;
