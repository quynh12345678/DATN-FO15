import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { checkTimeNow, customNumber } from "../../helpers/func";
import { getProductCartQuantity } from "../../helpers/product";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { getItem } from "../../services";
import { StarIcons } from "../common/star";

const ProductDescriptionInfo = ( {
	product,
	discountedPrice,
	currency,
	finalDiscountedPrice,
	finalProductPrice,
	cartItems,
	wishlistItem,
	compareItem,
	addToast,
	addToCart,
	addToWishlist,
	addToCompare
} ) =>
{
	const [ selectedProductColor, setSelectedProductColor ] = useState(
		product.variation ? product.variation[ 0 ].color : ""
	);
	const [ selectedProductSize, setSelectedProductSize ] = useState(
		product.variation ? product.variation[ 0 ].size[ 0 ].name : ""
	);
	const [ quantityCount, setQuantityCount ] = useState( 1 );

	const productCartQty = getProductCartQuantity(
		cartItems,
		product,
		selectedProductColor,
		selectedProductSize
	);

	let rating_number = 0;
	if ( product?.pro_review_star && product?.pro_review_total )
	{
		rating_number = Number( Math.round( product?.pro_review_star / product?.pro_review_total ) );
	}
	const checkTime = ( checkTimeNow( product?.sale_to ) && product.pro_sale );
	const userId = getItem('id');
	return (
		<div className="product-details-content ml-70">
			<h2>{ product.pro_name }</h2>
			<div className="product-details-price">
				{ product?.pro_sale && checkTime ? (
					<Fragment>
						<span>{ customNumber( finalDiscountedPrice, 'đ' ) }</span>{ " " }
						<span className="old">
							{ customNumber( finalProductPrice, 'đ' ) }
						</span>
					</Fragment>
				) : (
					<span className="not-sale">{ customNumber( finalProductPrice, 'đ' ) } </span>
				) }
			</div>
			<div className="pro-details-rating-wrap">
				<div className="pro-details-rating">
					<StarIcons rating_number={ rating_number } />
				</div>
			</div>
			<div className="pro-details-list">
				<p>{ product.shortDescription }</p>
			</div>


			<div className="pro-details-quality">
				<div className="cart-plus-minus">
					<button
						onClick={ () =>
							setQuantityCount( quantityCount > 1 ? quantityCount - 1 : 1 )
						}
						className="dec qtybutton"
					>
						-
					</button>
					<input
						className="cart-plus-minus-box"
						type="text"
						value={ quantityCount }
						readOnly
					/>
					<button
						onClick={ () =>
							setQuantityCount(
								quantityCount < product.pro_amount - productCartQty
									? quantityCount + 1
									: quantityCount
							)
						}
						className="inc qtybutton"
					>
						+
					</button>
				</div>
				<div className="pro-details-cart btn-hover">
					{ product.pro_amount && product.pro_amount > 0 ? (
						<button
							onClick={ () =>
								addToCart(
									product,
									addToast,
									quantityCount,
									selectedProductColor,
									selectedProductSize
								)
							}
							disabled={ productCartQty >= product.pro_amount }
						>
							{ " " }
							Thêm giỏ hàng{ " " }
						</button>
					) : (
						<button disabled>Out of stock</button>
					) }
				</div>
				{
					userId != null && <div className="pro-details-wishlist btn-hover">
					<button
						className={ wishlistItem !== undefined ? "active" : "" }
						disabled={ wishlistItem !== undefined }
						title={
							wishlistItem !== undefined
								? "Added to wishlist"
								: "Add to wishlist"
						}
						onClick={ () => addToWishlist( {...product, user_like: userId}, addToast ) }
					>
						<i className="pe-7s-like" />
					</button>
				</div>
				}

			</div>
			{ product.category ? (
				<div className="pro-details-meta">
					<span>Danh mục :</span>
					<ul>
						<li >
							<Link to={ process.env.PUBLIC_URL + "/shop" + '?category_id='+product?.category?.id }>
								{ product?.category?.c_name }
							</Link>
						</li>
					</ul>
				</div>
			) : (
				""
			) }

		</div>
	);
};

ProductDescriptionInfo.propTypes = {
	addToCart: PropTypes.func,
	addToWishlist: PropTypes.func,
	addToast: PropTypes.func,
	cartItems: PropTypes.array,
	compareItem: PropTypes.array,
	currency: PropTypes.object,
	discountedPrice: PropTypes.number,
	finalDiscountedPrice: PropTypes.number,
	finalProductPrice: PropTypes.number,
	product: PropTypes.object,
	wishlistItem: PropTypes.object
};

const mapDispatchToProps = dispatch =>
{
	return {
		addToCart: (
			item,
			addToast,
			quantityCount,
			selectedProductColor,
			selectedProductSize
		) =>
		{
			dispatch(
				addToCart(
					item,
					addToast,
					quantityCount,
					selectedProductColor,
					selectedProductSize
				)
			);
		},
		addToWishlist: ( item, addToast ) =>
		{
			dispatch( addToWishlist( item, addToast ) );
		},
	};
};

export default connect( null, mapDispatchToProps )( ProductDescriptionInfo );
