// @ts-nocheck
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { onErrorImage } from "../../services";
import { customNumber } from "../../helpers/func";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import { Form, Input, message } from "antd";

const VoucherListSingle = ({
	voucher,
	cartItems
}) => {
	const [modalShow, setModalShow] = useState(false);
	const { addToast } = useToasts();
	const history = useHistory();

	return (
		<Fragment>
			<div
				className={`d-flex voucher-wrap align-items-center border-dashed justify-content-around mb-3`}
			>
				<div className="voucher-img"
				>
					<img
						className="default-img"
						src="../assets/img/voucher.png"
						alt="Voucher"
						style={{ width: "100%", height: "70px", objectFit: "contain" }}
						onError={onErrorImage}
					/>
				</div>

				<div className="voucher-title">
					<p><b>Voucher</b> :{voucher.name}</p>
					<p><b>Giảm giá</b> :{voucher.amount} %</p>
					<p><b >Giá trị đơn hàng tối thiểu</b> :{customNumber(voucher.minimum, 'đ')}</p>
					<p><b>Giảm giá tối đa</b> :{customNumber(voucher.maximum, 'đ')}</p>
				</div>
				<div className=" btn voucher-apdung">
					<Link className="apvoucher" onClick={() => {
						if (!cartItems.length) {
							message.error( "Không có sản phẩm nào trong giỏ hàng" );
							return;
						}
						history.push("/checkout?voucher=" + voucher.name)
					}

					}
					>
						Chọn
					</Link>
				</div>
			</div>

		</Fragment>
	);
};

VoucherListSingle.propTypes = {
	cartItems: PropTypes.array,
	voucher: PropTypes.object,
};
const mapStateToProps = state => {
	return {
		cartItems: state.cartData,
	};
};

export default connect(mapStateToProps)(VoucherListSingle);
