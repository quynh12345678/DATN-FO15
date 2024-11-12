import PropTypes from "prop-types";
import React, { Fragment } from "react";
import ProductGridSingleTwo from "../../components/product/ProductGridSingleTwo";

const ProductGridTwo = ({
  products
}) => {
  return (
    <Fragment>
      {products && products.map((product) => {
        return (
          <ProductGridSingleTwo
            product={product}
            key={product.id}
          />
        );
      })}

    </Fragment>
  );
};

ProductGridTwo.propTypes = {
  products: PropTypes.array,
};

export default ProductGridTwo;
