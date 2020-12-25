import React from 'react';
import {Link} from 'react-router-dom';

export default function Categories(){
  return(
    <div className="categories-section">
      <h4>Categories</h4>
      <ul>
        <li><Link to="/products/2">Accessories</Link></li>
        <li><Link to="/products/2">Jeans</Link></li>
        <li><Link to="/products/2">Tops</Link></li>
        <li><Link to="/products/2">Jackets</Link></li>
      </ul>
    </div>
  )
}