import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

export default function GetProduct() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <Layout>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="d-flex flex-wrap">
        {product.map((item) => (
          <div
            className="card w-25 m-3"
            key={item.id}
            id={`product-${item.id}`}
          >
            <div className="card-header d-flex align-items-center">
              <span className="avatar text-bg-primary avatar-lg fs-5">R</span>
              <div className="ms-3">
                <h6 className="mb-0 fs-sm">{item.title}</h6>
                <span className="text-muted fs-sm">
                  {item.category} | ${item.price}
                </span>
              </div>
              <div className="dropstart ms-auto">
                <button
                  className="btn text-muted"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Update
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <img
              src={item.image}
              className="card-img-top w-50 d-block m-auto"
              alt="Product Image"
            />
            <div className="card-body">
              <p className="card-text">{item.description}</p>
            </div>
            <div className="card-footer d-flex">
              <button className="btn btn-link p-0 me-auto fw-bold" href="#">
                Action
              </button>
              <button className="btn btn-subtle" type="button">
                <i className="fas fa-heart fa-lg"></i>
              </button>
              <button className="btn btn-subtle" type="button">
                <i className="fas fa-share fa-lg"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
