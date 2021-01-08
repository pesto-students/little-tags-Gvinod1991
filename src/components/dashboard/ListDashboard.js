import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductLists } from "../../redux/actions";
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
          Most in Demand
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
                    "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
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
                    "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
