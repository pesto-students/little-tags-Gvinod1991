import React, { useEffect, useState } from 'react';
import capitalize from '../../services/capitalize';
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

export default function Footer() {
  const [categories, setCategories] = useState({});

  const { productsList } = useSelector(
    ({ productList: { productsList } }) => ({
      productsList,
    })
  );

  const getCategories = (result) => {
    const output = result.reduce(function(reducedArray, element) {
      const category = (element['category']); 
      (reducedArray[category] ? reducedArray[category] : (reducedArray[category] = null || [])).push(element);
      return reducedArray;
    }, {});
    
    setCategories(output);
  }

  useEffect(() => {
    getCategories(productsList)
  }, [productsList]);

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="contact-info-section">
          <h2>Contact Info</h2>
          <ul>
            <li>Phone: (+91) 9876 543 210</li>
            <li>Address: 1418 Riverwood Drive,</li>
            <li>Suite 3245,Cottonwood</li>
            <li>CA 96052, United States</li>
          </ul>
          <div>
            <h4>We accept</h4>
            <ul className="inline-cards">
              <li>
                <img src="/mastercard_inverse.svg" alt="mastercard" />
              </li>
              <li>
                <img src="/jcb_inverse.svg" alt="jcb" />
              </li>
              <li>
                <img src="/paypal_inverse.svg" alt="paypal" />
              </li>
              <li>
                <img src="/visa_inverse.svg" alt="visa" />
              </li>
              <li>
                <img src="/amazon_inverse.svg" alt="amazon" />
              </li>
            </ul>
          </div>
        </div>
        <div className="categories-section">
          <h2>Categories</h2>
          {
            Object.keys(categories).length > 0 ?
            <ul>
            {
              Object.keys(categories).map(category => (
                <li  key={category}><Link to={`/products/${category}`}>{capitalize(category) + '(' + categories[category].length + ')'}</Link></li>
              ))
            }
          </ul>: null
          }
        </div>
        <div className="empty-section"></div>
        <div className="get-in-touch-section">
          <h2>Let's stay in touch</h2>
          <div className="news-letter-container">
            <input type="text" placeholder="Your email address" />
            <span>subscribe</span>
          </div>
          <p>Keep upto date with our latest news and offers</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2020,Little Tags Website</p>
        <p>All Rights Reserved.</p>
      </div>
    </div>
  );
}
