import React from "react";
import "./Infopage.css";

function Infopage() {
  return (
    <div className="Infopage">
      <div className="wrapper">
        <form action="">
          <div id="wizard">
            <section>
              <div className="form-row">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone number"
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
            </section>
            <section>
              <div className="form-row">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Zip code"
                />
              </div>
            </section>
            <section>
              <div className="form-row">
                <button type="submit" className="form-control submit-button">
                  Submit
                </button>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Infopage;
