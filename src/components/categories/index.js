import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import capitalize from "../../services/capitalize";

export default function Categories() {
  const [categories, setCategories] = useState({});

  const { productList } = useSelector(({ productList: { productList } }) => ({
    productList,
  }));

  const getCategories = (result) => {
    const output = result.reduce(function (reducedArray, element) {
      const category = element["category"];
      (reducedArray[category]
        ? reducedArray[category]
        : (reducedArray[category] = null || [])
      ).push(element);
      return reducedArray;
    }, {});

    setCategories(output);
  };

  useEffect(() => {
    getCategories(productList);
  }, [productList]);

  return (
    <div className="categories-section">
      <h4>Categories</h4>
      {Object.keys(categories).length > 0 ? (
        <ul>
          {Object.keys(categories).map(category => (
            <li key={category}>
              <Link to="/products/2">{capitalize(category) }</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
