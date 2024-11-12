// @ts-nocheck
import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SectionTitleThree from "../../components/section-title/SectionTitleThree";
import ProductGridTwo from "./ProductGridTwo";

const TabProductFourteen = ( {
	...props
} ) =>
{
	return (
		<div className="spBanChay">
			<div className="container">
				<SectionTitleThree
					titleText={ props.title || "Sản phẩm bán chạy"}
				/>
				<div className="slide_BanChay list_sp">
					<ProductGridTwo
						products={ props.products }
					/>
				</div>
			</div>
		</div>
	);
};

TabProductFourteen.propTypes = {
	category: PropTypes.string,
	containerClass: PropTypes.string,
	extraClass: PropTypes.string,
	spaceBottomClass: PropTypes.string,
	spaceTopClass: PropTypes.string,
	products: PropTypes.array
};

export default TabProductFourteen;
