import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Categories(){

  const [categories, setCategories] = useState({});
  const [error, setError] = useState(null);
  
  const getCategories = (result) => {
    var output = result.reduce(function(reducedArray, element) {
      let category = (element['category']); 
      (reducedArray[category] ? reducedArray[category] : (reducedArray[category] = null || [])).push(element);
      return reducedArray;
    }, {});
    
    setCategories(output);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          getCategories(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return(
    <div className="categories-section">
      <h4>Categories</h4>
      {
            Object.keys(categories).length > 0 ?
            <ul>
            {
              Object.keys(categories).map((category,index) => (
                <li key={index}><Link to="/products/2">{category}</Link></li>
              ))
            }
          </ul>: null
          }
    </div>
  );
}
