import React from "react";
import "./Orderpage.css";

function Orderpage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <ol className="activity-checkout mb-0 px-4 mt-3">
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-receipt text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Billing Info</h5>
                        <p className="text-muted text-truncate mb-4"></p>
                        <div className="mb-3">
                          <form>
                            <div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      for="billing-name"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="billing-name"
                                      placeholder="Enter name"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      for="billing-email-address"
                                    >
                                      Email Address
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="billing-email-address"
                                      placeholder="Enter email"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      for="billing-phone"
                                    >
                                      Phone
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="billing-phone"
                                      placeholder="Enter Phone no."
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  for="billing-address"
                                >
                                  Address
                                </label>
                                <textarea
                                  className="form-control"
                                  id="billing-address"
                                  rows="3"
                                  placeholder="Enter full address"
                                ></textarea>
                              </div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label className="form-label">
                                      Country
                                    </label>
                                    <select
                                      className="form-control form-select"
                                      title="Country"
                                    >
                                      <option value="0">Select Country</option>
                                      <option value="In">India</option>
                                      <option value="AS">America</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-4 mb-lg-0">
                                    <label
                                      className="form-label"
                                      for="billing-city"
                                    >
                                      City
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="billing-city"
                                      placeholder="Enter City"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-0">
                                    <label
                                      className="form-label"
                                      for="zip-code"
                                    >
                                      Zip / Postal code
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="zip-code"
                                      placeholder="Enter Postal code"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-truck text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Shipping Info</h5>
                        <p className="text-muted text-truncate mb-4"></p>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-lg-4 col-sm-6">
                              <div data-bs-toggle="collapse">
                                <label className="card-radio-label mb-0">
                                  <input
                                    type="radio"
                                    name="address"
                                    id="info-address1"
                                    className="card-radio-input"
                                    checked
                                  />
                                  <div className="card-radio text-truncate p-3">
                                    <span className="fs-14 mb-4 d-block">
                                      Address
                                    </span>
                                    <span className="fs-14 mb-2 d-block">
                                      Bradley McMillian
                                    </span>
                                    <span className="text-muted fw-normal text-wrap mb-1 d-block">
                                      109 Clarksburg Park Road Show Low, AZ
                                      85901
                                    </span>
                                    <span className="text-muted fw-normal d-block">
                                      Mo. 012-345-6789
                                    </span>
                                  </div>
                                </label>
                                <div className="edit-btn bg-light  rounded">
                                  <a
                                    href="#"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-bs-original-title="Edit"
                                  >
                                    <i className="bx bx-pencil font-size-16"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                              <div>
                                <label className="card-radio-label mb-0">
                                  <input
                                    type="radio"
                                    name="address"
                                    id="info-address2"
                                    className="card-radio-input"
                                  />
                                </label>
                                <div className="edit-btn bg-light  rounded">
                                  <a
                                    href="#"
                                    data-bs-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-bs-original-title="Edit"
                                  >
                                    <i className="bx bx-pencil font-size-16"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="checkout-item">
                    <div className="avatar checkout-icon p-1">
                      <div className="avatar-title rounded-circle bg-primary">
                        <i className="bx bxs-wallet-alt text-white font-size-20"></i>
                      </div>
                    </div>
                    <div className="feed-item-list">
                      <div>
                        <h5 className="font-size-16 mb-1">Payment Info</h5>
                        <p className="text-muted text-truncate mb-4">
                        </p>
                      </div>
                      <div>
                        <h5 className="font-size-14 mb-3">Payment method :</h5>
                        <div className="row">
                          <div className="col-lg-3 col-sm-6">
                            <div>
                              <label className="card-radio-label">
                                <input
                                  type="radio"
                                  name="pay-method"
                                  id="pay-methodoption3"
                                  className="card-radio-input"
                                  checked
                                />
                                <span className="card-radio py-3 text-center text-truncate">
                                  <i className="bx bx-money d-block h2 mb-3"></i>
                                  <span>Cash on Delivery</span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <a
                  href="ecommerce-products.html"
                  className="btn btn-link text-muted"
                >
                  <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping{" "}
                </a>
              </div>
              <div className="col">
                <div className="text-end mt-2 mt-sm-0">
                  <a href="#" className="btn btn-success">
                    <i className="mdi mdi-cart-outline me-1"></i> Procced{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card checkout-order-summary">
              <div className="card-body">
                <div className="p-3 bg-light mb-3">
                  <h5 className="font-size-16 mb-0">
                    Order Summary{" "}
                    <span className="float-end ms-2">#MN0124</span>
                  </h5>
                </div>
                <div className="table-responsive">
                  <table className="table table-centered mb-0 table-nowrap">
                    <thead>
                      <tr>
                        <th
                          className="border-top-0"
                          style={{ width: "110px" }}
                          scope="col"
                        >
                          Product
                        </th>
                        <th className="border-top-0" scope="col">
                          Product Desc
                        </th>
                        <th className="border-top-0" scope="col">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="product-img"
                            title="product-img"
                            className="avatar-lg rounded"
                          />
                        </th>
                        <td>
                          <h5 className="font-size-16 text-truncate">
                            <a href="#" className="text-dark">
                              Waterproof Mobile Phone
                            </a>
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star-half text-warning"></i>
                          </p>
                          <p className="text-muted mb-0 mt-1">260 x 2 RS</p>
                        </td>
                        <td>520 RS</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img
                            src="data:image/jpeg;base64,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"
                            alt="product-img"
                            title="product-img"
                            className="avatar-lg rounded"
                          />
                        </th>
                        <td>
                          <h5 className="font-size-16 text-truncate">
                            <a href="#" className="text-dark">
                              Smartphone Dual Camera
                            </a>
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                            <i className="bx bxs-star text-warning"></i>
                          </p>
                          <p className="text-muted mb-0 mt-1">260 x 1 RS</p>
                        </td>
                        <td>260 RS</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Sub Total :</h5>
                        </td>
                        <td>780 RS</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Discount :</h5>
                        </td>
                        <td>-78 RS</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">
                            Shipping Charge :
                          </h5>
                        </td>
                        <td> 25 RS</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Estimated Tax :</h5>
                        </td>
                        <td> 18.20 RS</td>
                      </tr>
                      <tr className="bg-light">
                        <td colspan="2">
                          <h5 className="font-size-14 m-0">Total:</h5>
                        </td>
                        <td>745.2 RS</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orderpage;
