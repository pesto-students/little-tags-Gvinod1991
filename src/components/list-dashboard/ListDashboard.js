import React, { useState, useEffect } from "react";

import "./ListDashboard.scss";

const ListDashboard = () => {
//   const [data, setData] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const getFilteredCategories = (jsonData) => {
//     const val = [];
//     const categoryData = [];
//     jsonData.filter((el) => {
//       if (val.indexOf(el.category) === -1) {
//         val.push(el.category);
//         categoryData.push({ category: el.category, image: el.image });
//         return true;
//       } else {
//         return false;
//       }
//     });
//     console.log(categoryData);
//     setCategories(categoryData);
//   };
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         setData(json);
//         getFilteredCategories(json);
//       });
//   }, []);

  return (
    <>
      <main>
        <div>Most in Demand</div>
      </main>
      <div className="wrapper">
        <div className="box row1">
            <div className="text-item">
                <span>T-Shirt</span>
            </div>
        </div>
        <div className="box row2">
            <div className="text-item">
                <span>Jeans</span>
            </div>
        </div>
        <div className="box box1">
            <div className="text-item">
                <span>Backpack</span>
            </div>
        </div>
        <div className="box box2">
            <div className="text-item">
                <span>Charm Necklace</span>
            </div>
        </div>
       
      </div>
    </>
  );
};

export default ListDashboard;
