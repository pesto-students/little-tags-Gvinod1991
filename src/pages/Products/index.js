import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';
import { getProducts, updatePageNumber } from '../../redux/actions';
import MainLayout from '../../components/layout/MainLayout';
import ProductCard from '../../components/productCard';
import Loader from '../../components/Loader';
import Pagination from '../../components/pagination';
import './products.scss';

export default function Products() {
  const { category } = useParams();
  const {
    loading,
    currentProductList,
    currentPage,
    pageNumbers,
  } = useSelector((state) => ({
    productList: state.product.productList,
    loading: state.product.loading,
    message: state.product.message,
    currentProductList: state.product.currentProductList,
    currentPage: state.product.currentPage,
    pageNumbers: state.product.pageNumbers,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(category));
  }, [dispatch,category]);

  const handleCurrentPageChange = (id) => {
    dispatch(updatePageNumber(id));
  };
  return (
    <MainLayout>
      <div className="products-container">
        <h2>{category}</h2>
        <div className="all-products-wrapper">
          {loading && <Loader />}
          {!loading &&
            currentProductList &&
            currentProductList.length &&
            currentProductList.map(({ id, title, image, price }) => {
              return (
                <ProductCard
                  key={id}
                  title={title}
                  productImage={image}
                  pathname={`/product/${id}`}
                  price={price}
                />
              );
            })}
          {!loading && (
            <Pagination
              currentPage={currentPage}
              pageNumbers={pageNumbers}
              handleCurrentPageChange={handleCurrentPageChange}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
}
