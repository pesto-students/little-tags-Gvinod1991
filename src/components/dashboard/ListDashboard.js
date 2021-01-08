import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductLists } from "../../redux/actions";
import capitalize from "../../services/capitalize";
import Card from "../card/card";
import Loader from "../Loader";

import "./ListDashboard.scss";

const ListDashboard = ({ element }) => {
  const [categories, setCategories] = useState({});

  const { isLoaded, productsList } = useSelector(
    ({ productList: { isLoaded, productsList } }) => ({
      isLoaded,
      productsList,
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
    getCategories(productsList);
  }, [productsList]);

  return (
    <>
      <main ref={element}>
        <div className="titleDemand">
          <strong>Most in Demand</strong>
        </div>
      </main>
      
      {isLoaded ? (
        <div className="wrapper-grid">
        
          {Object.keys(categories).length > 0 && (
            <>
              <div className="sub-wrapper">
                <div className="subwrapper-row1">
                  <Card
                    pathname={
                      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    }
                    title={"Men's Clothing"}
                    id={1}
                    key={1}
                    category={Object.keys(categories)[0]}
                    imageClass={"rowImage"}
                    divclass={""}
                  />
                </div>
                <div className="subwrapper-row2">
                  <Card
                    pathname={
                      "https://i.pinimg.com/originals/8f/22/2d/8f222da09dfa3c6e81973ee60fff2c2b.png"
                    }
                    title={"Jewelery"}
                    id={2}
                    key={2}
                    category={Object.keys(categories)[1]}
                    imageClass={"rowImage"}
                    divclass={"mobileViewImg"}
                  />
                </div>
              </div>
              <div className="mobileView">
                <Card
                  pathname={
                    "https://i.pinimg.com/originals/8f/22/2d/8f222da09dfa3c6e81973ee60fff2c2b.png"
                  }
                  title={"Jewelery"}
                  id={2}
                  key={2}
                  category={Object.keys(categories)[1]}
                  imageClass={"rowImage"}
                  divclass={""}
                />
              </div>
              <div className="card-col">
                <Card
                  pathname={
                    "https://fossbytes.com/wp-content/uploads/2019/07/the-Best-Android-Wallpaper-apps-1200x900.jpg"
                  }
                  title={"Electronics"}
                  id={3}
                  key={3}
                  category={Object.keys(categories)[2]}
                  divclass={""}
                  imageClass={"colImage"}
                />
              </div>
              <div className="card-colwrapper">
                <Card
                  pathname={
                    "https://thumbs.dreamstime.com/z/women-s-clothing-dark-background-top-view-shopping-concept-autumn-jeans-suede-shoes-sneakers-pullovers-scarf-fashion-159217005.jpg"
                  }
                  title={"Women's Clothing"}
                  id={4}
                  key={4}
                  category={Object.keys(categories)[3]}
                  divclass={""}
                  imageClass={"colImage"}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ListDashboard;
