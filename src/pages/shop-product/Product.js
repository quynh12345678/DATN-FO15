// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect, useDispatch } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getProducts, showProduct, showProductDetail } from "../../services";
import { RATING_SERVICE } from "../../services/shop/rating-service";

const Product = ({ location }) => {
  const { pathname } = location;
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [paging, setPaging] = useState({
    page: 0,
    pageSize: 5,
    total: 0,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    showProductDetail(id, setProductData, dispatch);
    getDataRatings({ ...paging, product_id: id });
  }, [id]);

  const getDataRatings = async (filters) => {
    try {
      const response = await RATING_SERVICE.getList(filters);
      if (response?.status === "success") {
        setPaging(response?.data?.pageable);
        setReviews(response?.content);
      }
    } catch (error) {}
  };

  return (
    <Fragment>
      <MetaTags>
        <title>AOBONGDA</title>
        <meta name="description" content="Cửa hàng quần áo bóng đá" />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
        Trang chủ
      </BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Sản phẩm
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {productData?.product ? (
          <>
            <Breadcrumb />

            <ProductImageDescription
              spaceTopClass="pt-100"
              spaceBottomClass="pb-100"
              product={productData?.product}
            />

            <ProductDescriptionTab
              spaceBottomClass="pb-90"
              productFullDesc={productData?.product}
              reviews={reviews}
              paging={paging}
              setPaging={setPaging}
              getDataRatings={getDataRatings}
            />

            <RelatedProductSlider
              spaceBottomClass="pb-95"
              products={productData?.productSuggest}
            />
          </>
        ) : (
          <span className="text-center fw-700">
            Không có dữ liệu chi tiết sản phẩm
          </span>
        )}
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {};

export default connect(mapStateToProps)(Product);
