import PropTypes from "prop-types";
import React from "react";
import {
  setActiveSort
} from "../../helpers/product";

const ShopTopFilter = (props) => {
  const uniqueCategories = props.categories;

  return (
    <div className="product-filter-wrapper" id="product-filter-wrapper">
      <div className="product-filter-wrapper__inner">
        <div className="row">
          <div className="col-md-12 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Các danh mục sản phẩm</h5>
              {uniqueCategories ? (
                <ul className="row">
					<li className="col-2">
                        <button
                          onClick={e => {
                            props.setParams({...props.params, category_id: null});
                            setActiveSort(e);
                          }}
                        >
                          Tất cả
                        </button>
                      </li>
                  {uniqueCategories.map((category, key) => {
                    return (
                      <li key={key} className="col-2">
                        <button
                          onClick={e => {
                            props.setParams({...props.params, category_id: category.id});
                            setActiveSort(e);
                          }}
                        >
                          {category.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

ShopTopFilter.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array
};

export default ShopTopFilter;
