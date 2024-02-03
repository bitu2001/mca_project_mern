import React from 'react';
import "../Styles/Subscribe.css"
const Subscribe = () => {
  return (
    <>
      <div id="subscribe-section" className="uni-padding">
        <div className="section50">
          <h2>Subscribe to Daily Offers</h2>
        </div>
        <div className="section50">
          <form action="">
            <input type="text" placeholder="Enter Email Address" name="email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
