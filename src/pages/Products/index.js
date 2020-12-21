import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import './products.scss';
const API_BASE_URL = 'https://fakestoreapi.com/';
export default function Products() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const API_URL = `${API_BASE_URL}products`;
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        setProductList(responseJson);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [API_URL]);
  
  return (
    <MainLayout>
      <div className="products-container">
        <h2>All Shirts</h2>
        <div className="all-products-wrapper">
          {loading && <p>Loading...</p>}
          {!loading && productList && productList.length && productList.map(({id,title,image,price})=>{
              return <div key={id} className="product-container" onClick={()=>history.push({pathname: "/product/1"})}>
                    <div className="row-left">
                      <img className="product-image" src={image} alt={title} />
                      <span>{title}</span>
                    </div>
                    <div className="row-right">
                      <img className="inr-symbol" src="/inr.svg" alt="inr currency symbol"/>
                      <div className="price">{price}</div>
                    </div>
              </div>
          })}
        </div>
      </div>
    </MainLayout>
  );
}
