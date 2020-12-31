import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductLists } from "../../redux/actions";
import Card from "../card/card";
import Loader from "../Loader";

import "./ListDashboard.scss";

const ListDashboard = ({ element }) => {
  
  const [categories, setCategories] = useState({});

  const { isLoaded, productList } = useSelector(
    ({ productList: { isLoaded, productList } }) => ({
      isLoaded,
      productList,
    })
  );

  const dispatch = useDispatch();

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
    dispatch(getProductLists());
  }, [dispatch]);

  useEffect(() => {
    getCategories(productList);
  }, [productList]);

  return (
    <>
      <main ref={element}>
        <div className="titleDemand">
          <strong>Most in Demand</strong>
        </div>
      </main>
      {isLoaded ? (
        <div className="wrapper">
          {Object.keys(categories).length > 0
            ? Object.keys(categories).map((category) => (
                <Card
                  pathname={categories[category][0].image}
                  title={categories[category][0].title}
                  id={categories[category][0].id}
                  key={categories[category][0].id}
                  category={category}
                />
              ))
            : null}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ListDashboard;
