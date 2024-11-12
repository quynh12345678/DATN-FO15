import PropTypes from "prop-types";
import React from "react";
import ProductGridTwo from "./ProductGridTwo";
import { Link } from "react-router-dom";

const TabProduct = ({
  avatar,
  products,
}) => {
  var prod = [];
  if (products) {
    prod = products;
  }

  return (
    <div className="container">
      <div className='header'>
        <h2 className='title'>
          <Link to={{ pathname: '/shop', search: `?category_id=${prod[0]?.category?.c_slug}` }}>
            {prod[0]?.category?.c_name}
          </Link>
        </h2>
        <Link to={{ pathname: '/shop', search: `?category_id=${prod[0]?.category?.c_slug}` }} className='viewAll' href="" title='Xem tất cả'>
          Xem tất cả <i className='fa fa-angle-right'></i>
        </Link>
      </div>
      <div className='groupItem'>
        <div className='itemBox first'>
          <div className='khungAnh'>
            <a className='khungAnhCrop' href="" title="">
              <img className="lazyload" src={` ${avatar}`} />
            </a>
          </div>
        </div>
        <ProductGridTwo
          products={products}
        />
      </div>
    </div>
  );
};

TabProduct.propTypes = {
  avatar: PropTypes.string,
  products: PropTypes.array,
};

export default TabProduct;
