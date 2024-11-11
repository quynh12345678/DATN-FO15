import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFromCart } from "../../redux/actions/cartActions";
import { Form, Input } from 'antd';
import { useForm } from "antd/es/form/Form";

const IconGroup = ({
	cartData,

}) => {
	const [form] = useForm();
	const submitForm = async (e) => {
		window.location.href = `/shop?search=` + e.k;
	}

	const [activeAccount, setActiveAccount] = useState(false);
	let token = localStorage.getItem('access_token') || null;

	return (
		<div className="menuTop">
			<div className="searchHeader">
				<Form className="searchHeader"
					form={form}
					onFinish={submitForm}
					role="search"
					method="GET">
					<div className="flex-start">
						<Form.Item name="k"
							className=' d-block'>
							<Input placeholder='Từ khoá tìm kiếm' />
						</Form.Item>
						<button type="submit" className="seachBtn" title="Tìm kiếm">
							<i className="fa fa-search" aria-hidden="true"></i>
						</button>
					</div>
				</Form>
			</div>
			<Link className="gioHang" to="/cart" title="Giỏ hàng">
				<i className="fa fa-shopping-cart"></i>
				<span>{cartData && cartData.length ? cartData.length : 0}</span>
			</Link>
			{
				!token &&
				<>
					<a href="/auth/login">Đăng nhập</a>
					<a href="/auth/register">Đăng ký</a>
				</>
			}
			{token &&
				<>
					<Link to={"/my-account"}>
						Tài khoản
					</Link>
					<Link to={"/my-order"}>
						Đơn hàng
					</Link>
					<a href="javascript:void(0)" onClick={e => {
						localStorage.removeItem('access_token');
						localStorage.removeItem('name');
						localStorage.removeItem('email');
						localStorage.removeItem('avatar');
						localStorage.removeItem('gender');
						localStorage.removeItem('phone');
						localStorage.removeItem('id');
						setActiveAccount(false);
						window.location.href = '/';
					}}>Đăng xuất</a>
				</>
			}
		</div>
	);
};

IconGroup.propTypes = {
	cartData: PropTypes.array,
	compareData: PropTypes.array,
	currency: PropTypes.object,
	iconWhiteClass: PropTypes.string,
	deleteFromCart: PropTypes.func,
	wishlistData: PropTypes.array
};

const mapStateToProps = state => {
	return {
		currency: state.currencyData,
		cartData: state.cartData,
		wishlistData: state.wishlistData,
		compareData: state.compareData
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteFromCart: (item, addToast) => {
			dispatch(deleteFromCart(item, addToast));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
