import PropTypes from "prop-types";
import React from "react";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";

const ShopSidebar = (
	{
		categories,
		sideSpaceClass,
		...props
	}
) =>
{
	const setParamsSearch = (e) => {
		let obj = {...props.params};

		obj.category_id = Number(e);
		props.setParams(obj);
	}


	return (
		<div className={ `sidebar-style ${ sideSpaceClass ? sideSpaceClass : "" }` }>
			<ShopSearch params={props.params} setParams={props.setParams}/>

			<ShopCategories
				categories={ categories }
				params={props.params}
				setParamsSearch={setParamsSearch}
			/>

		</div>
	);
};

ShopSidebar.propTypes = {
	categories: PropTypes.array,
	sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
