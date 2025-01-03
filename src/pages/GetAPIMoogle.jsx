import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

export default function GetAPIMoogle() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.sampleapis.com/coffee/hot")
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <>
      <Layout>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <div className="d-flex flex-wrap justify-content-center">
          {product.map((coffee) => (
            <div className="card w-25 m-3" key={coffee.id}>
              <div className="card-header d-flex align-items-center">
                <div className="ms-3">
                  <h6 className="mb-0 fs-sm">{coffee.title || "No Title"}</h6>
                  <span className="text-muted fs-sm">
                    {Array.isArray(coffee.ingredients)
                      ? coffee.ingredients.join(", ")
                      : "N/A"}
                  </span>
                </div>
              </div>
              {coffee.image && (
                <img
                  src={coffee.image}
                  className="card-img-top w-50 d-block m-auto"
                  alt={`${coffee.title || "Coffee"} Image`}
                />
              )}
              <div className="card-body">
                <p className="card-text">
                  {coffee.description || "No Description"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
