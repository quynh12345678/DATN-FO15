import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { customNumber } from "../../helpers/func";
import { getDiscountPrice } from "../../helpers/product";
import { buildImage, onErrorImage } from "../../services";

const ProductGridSingleTwo = ( {
	product
} ) =>
{
	return (
		<Fragment>
			<div className='item itemBox'>
			<div className='khungAnh'>
        <Link className='khungAnhCrop' to={ process.env.PUBLIC_URL + "/product/" + product.pro_slug }>
			{ product?.pro_avatar?.length > 0 ? (
				<img
					className="hover-img"
					src={buildImage(product.pro_avatar)}
					alt={product.pro_name}
					onError={ onErrorImage }
				/>
			) : (
				""
			) }
        </Link>
    </div>
    <div className='itemDetail'>
        <h3 className='itemTitle'>
            <Link to={ process.env.PUBLIC_URL + "/product/" + product.pro_slug }>{ product.pro_name }</Link>
        </h3>
        <div className='listPrice'><div className='subItem'><span>

			{ product.pro_sale !== 0 ? (
				<Fragment>
					<p className="new">{ customNumber( (product.pro_price * (100 - product.pro_sale)) / 100 , 'đ' ) }</p>
					<p className="old">{ customNumber( product.pro_price, 'đ' ) }</p>
				</Fragment>
			) : (
				<p className="new">{ customNumber( product.pro_price, 'đ' ) }</p>
			) }
        </span> (Hàng Chính Hãng)</div></div>
        <Link className='viewDetail' to={ process.env.PUBLIC_URL + "/product/" + product.pro_slug } title='Xem chi tiết'>Xem chi tiết</Link>
    </div>
			</div>
			{/* product modal */ }

		</Fragment>
	);
};

ProductGridSingleTwo.propTypes = {
	addToCart: PropTypes.func,
	addToCompare: PropTypes.func,
	addToWishlist: PropTypes.func,
	cartItem: PropTypes.object,
	compareItem: PropTypes.object,
	currency: PropTypes.object,
	product: PropTypes.object,
	sliderClassName: PropTypes.string,
	spaceBottomClass: PropTypes.string,
	colorClass: PropTypes.string,
	titlePriceClass: PropTypes.string,
	wishlistItem: PropTypes.object
};

export default ProductGridSingleTwo;
