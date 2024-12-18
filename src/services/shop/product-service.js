import { toggleShowLoading } from "../../redux/actions/common";
import axios from "axios";
import { buildFilter, getMethod } from "../index";
import { WEB_VALUE } from "../../helpers/constant";
const axiosClient = axios.create({
  baseURL: WEB_VALUE.API,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(),
});

export const getProducts = async (params) => {
  let filter = buildFilter(params);
  return await getMethod("product", filter);
};

export const showProduct = async (id, params) => {
  return await getMethod(`product/show/${id}`, params);
};

export const showproductdt = async (id) => {
  return await axiosClient.get(`${WEB_VALUE.API}/product/show/${id}`);
};

export const showProductDetail = async (
  productId,
  setProductData,
  dispatch
) => {
  try {
    if (dispatch) {
      dispatch(toggleShowLoading(true));
    }
    const response = await showProduct(productId);
    if (response?.status == "success") {
      setProductData(response);
    } else {
      setProductData(null);
    }
    if (dispatch) {
      dispatch(toggleShowLoading(false));
    }
  } catch (error) {
    setProductData(null);
    if (dispatch) {
      dispatch(toggleShowLoading(false));
    }
  }
};

export const getProductsByFilter = async (params, setProducts) => {
  try {
    const response = await getProducts(params);

    if (response?.status == "success") {
      setProducts(response);
    } else {
      setProducts(null);
    }
  } catch (error) {
    console.log(error);
    setProducts(null);
  }
};
