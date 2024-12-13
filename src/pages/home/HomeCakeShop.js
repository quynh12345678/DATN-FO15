// @ts-nocheck
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import TabProductFourteen from "../../wrappers/product/TabProductFourteen";
import TabProduct from "../../wrappers/product/TabProduct";
import HeroSliderTwentyTwo from "../../wrappers/hero-slider/HeroSliderTwentyTwo";
import { getSlidesByFilters } from "../../services/shop/slider-service";
import { getProductsByFilter } from "../../services";
import { Form, Input, message } from "antd";

const HomeCakeShop = (paramHeader) => {
  const [slides, setSlides] = useState(null);
  const [products, setProducts] = useState(null);
  const [params, setParams] = useState({
    is_hot: null,
    is_sale: null,
    page: 0,
    pageSize: 8,
    status: 1,
  });

  useState(() => {
    if (
      new URLSearchParams(window.location.search).get("status") == "success"
    ) {
      message.success("Thanh toán thành công");
    }
    if (new URLSearchParams(window.location.search).get("status") == "error") {
      message.error("Thanh toán thất bại");
    }
    getSlidesByFilters({ page: 0, pageSize: 20, status: 1 }, setSlides);
  }, []);

  useEffect(() => {
    getProductsByFilter(params, setProducts);
  }, [params]);

  return (
    <Fragment>
      <MetaTags>
        <title>Áo Bóng Đá</title>
        <meta
          name="description"
          // content="Goatmaster"
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        {slides && <HeroSliderTwentyTwo slides={slides} />}
        {/* tab product */}
        <TabProductFourteen products={products?.productsWatch} />

        <div className="productHome">
          <TabProduct
            avatar="/view/img/496-2_6009_HasThumb_Thumb.png"
            products={products?.listProduct1}
          />
        </div>
        <div className="productHome">
          <TabProduct
            avatar="/view/img/z5891779370356_160a94456d626e576a763e47be4b4913_7744_HasThumb_Thumb.jpg"
            products={products?.listProduct2}
          />
        </div>
        <div className="productHome">
          <TabProduct
            avatar="/view/img/z5941426311806_680a38fe45ebe22b679fbc651ff34cbd_4548_HasThumb_Thumb.jpg"
            products={products?.listProduct3}
          />
        </div>
        <div className="productHome">
          <TabProduct
            avatar="/view/img/z5941426311868_a4df570dca6702a5b66542df7a5e314c_4012_HasThumb_Thumb.jpg"
            products={products?.listProduct4}
          />
        </div>
        <div className="productHome">
          <TabProduct
            avatar="/view/img/phu-kien-banner_3145_HasThumb_Thumb.jpg"
            products={products?.listProduct5}
          />
        </div>
        <div className="productHome">
          <TabProduct
            avatar="/view/img/z5962151258572_a1105d508170dd4b7dea1181b1f1569a_6051_HasThumb_Thumb.jpg"
            products={products?.listProduct6}
          />
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default HomeCakeShop;
