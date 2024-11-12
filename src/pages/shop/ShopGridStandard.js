// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProducts from "../../wrappers/product/ShopProducts";
import * as queryString from "query-string";
import {
  buildFilter,
  getCategories,
  getCategoryList,
  getProducts,
} from "../../services/index";
import { toggleShowLoading } from "../../redux/actions/common";
import { Pagination } from "antd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ShopTopbarFilter from "../../wrappers/product/ShopTopbarFilter";

const ShopGridStandard = ({ location }) => {
  const [layout, setLayout] = useState("grid three-column");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [params, setParams] = useState({
    name: null,
    category_id: new URLSearchParams(window.location.search).get("category_id"),
    order: null,
    search: new URLSearchParams(window.location.search).get("search"),
  });
  const [paging, setPaging] = useState({ page: 0, pageSize: 20, total: 0 });

  const { pathname } = location;

  const history = useHistory();

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getProductList = async (filter) => {
    try {
      const params = buildFilter(filter);

      const response = await getProducts(params);
      const paramSearch = new URLSearchParams(params).toString();

      if (response?.status === "success") {
        setProducts(response?.product);
        setPaging({ ...response?.data?.meta });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductList({ ...paging, ...params });
  }, [params.name, params.category_id, params.order]);

  return (
    <Fragment>
      <BreadcrumbsItem to={"/"}>Trang chủ</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Sản phẩm</BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12 order-1 order-lg-2">
                <p>
                  Hiển thị {products.length} của {paging.total} kết quả
                </p>

                <ShopProducts layout={layout} products={products} />

                {paging.total > 0 && (
                  <div className="mx-auto d-flex justify-content-center my-4">
                    <Pagination
                      onChange={(e) =>
                        getProductList({ page: e, pageSize: 20, ...params })
                      }
                      pageSize={paging.pageSize}
                      defaultCurrent={paging.page}
                      total={paging.total}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

ShopGridStandard.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array,
};

export default ShopGridStandard;
