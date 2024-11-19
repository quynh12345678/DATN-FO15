// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import * as queryString from "query-string";
import { Voucher_Service } from "../../services/shop/voucher-service";
import VoucherListSingle from "../../components/voucher/VoucherListSingle";

const Voucher = ({ location }) => {
  const [vouchers, setVouchers] = useState([]);
  const { pathname } = location;
  const getVoucherList = async () => {
    try {
      const response = await Voucher_Service.list();

      if (response?.status === "success") {
        setVouchers(response?.content);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVoucherList();
  });

  return (
    <Fragment>
      <BreadcrumbsItem to={"/"}>Trang chủ</BreadcrumbsItem>
      <BreadcrumbsItem to={pathname}>Voucher</BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12 order-1 order-lg-2">
                {vouchers &&
                  vouchers.map((voucher) => {
                    return <VoucherListSingle voucher={voucher} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Voucher.propTypes = {
  location: PropTypes.object,
  vouchers: PropTypes.array,
};

export default Voucher;
