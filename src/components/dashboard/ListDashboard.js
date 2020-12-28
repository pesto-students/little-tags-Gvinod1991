import React, { useEffect, useState } from "react";
import Card from "../card/card";

import "./ListDashboard.scss";

const ListDashboard = ({ element }) => {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  
  return (
    <>
      <main ref={element}>
        <div className="titleDemand">
          <strong>Most in Demand</strong>
        </div>
      </main>
      {isLoaded ? (
        <div className="wrapper">
          {products.slice(0, 4).map((product) => (
            <Card
              pathname={product.image}
              title={product.title}
              key={product.id}
            />
          ))}
        </div>
      ) : (
        <div className="container-loader">
          <div className="load"></div>
          <div className="load2"></div>
          <div className="load3"></div>
          <div className="load4"></div>
        </div>
      )}
    </>
  );
};

export default ListDashboard;
