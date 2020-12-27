import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import ProductCard from '../../components/productCard';
import Pagination from '../../components/pagination';
import './products.scss';
const API_BASE_URL = 'https://fakestoreapi.com/';
export default function Products() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
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
              return <ProductCard key={id} title={title} productImage={image} pathname={`/product/${id}`} price={price} />
          })}
          <Pagination/>
        </div>
      </div>
    </MainLayout>
  );
}
