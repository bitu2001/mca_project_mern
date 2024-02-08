import React from "react";
import Card from "../Pages/Card";
import "../Styles/Home.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="hero-title">Welcome to NetMeds</h1>
          <p className="hero-subtitle">
            Your Online Pharmacy for All Your Medicinal Needs
          </p>
          <a href="#" className="btn btn-primary">
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2 className="text-center">Featured Products</h2>
          {/* Horizontal Scrollable Card Section */}
          <div className="card-container">
            {[...Array(8)].map((_, index) => (
              <div className="card-wrapper" key={index}>
                <div className="card">
                  <Card />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
