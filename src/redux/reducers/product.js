import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
  PRODUCT_PAGE_NUMBER_UPDATE,
} from '../actions/product';

const initialState = {
  productList: [],
  loading: false,
  currentPage: 1,
  currentProductList: [],
  pageNumbers: [],
  productsPerPage: 2,
  productsError: 'We are unable to fetch products,Try again!',
};
const prepareCurrentProducts = (productsList, currentPage, productsPerPage) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  return currentProducts;
};

const preparePageNumbers = (productsList, productsPerPage) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productsList.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};
export const product = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, message: null };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: action.payload,
        currentProductList: prepareCurrentProducts(
          action.payload,
          state.currentPage,
          state.productsPerPage
        ),
        pageNumbers: preparePageNumbers(action.payload, state.productsPerPage),
        message: action.message,
        loading: false,
      };
    case PRODUCT_LIST_FAILED:
      return { ...state, loading: false, message: initialState.productsError };
    case PRODUCT_PAGE_NUMBER_UPDATE:
      return {
        ...state,
        currentPage: action.payload,
        currentProductList: prepareCurrentProducts(
          state.productList,
          action.payload,
          state.productsPerPage
        ),
        pageNumbers: preparePageNumbers(
          state.productList,
          state.productsPerPage
        ),
        loading: false,
      };
    default:
      return { ...state };
  }
};
