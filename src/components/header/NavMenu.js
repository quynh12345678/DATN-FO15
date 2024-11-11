import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";

const NavMenu = ( { strings, menuWhiteClass, sidebarMenu } ) =>
{
	return (
		<div className="phone">
			<i className="fa fa-phone"></i> <span>Hotline: </span>
			<a href="tel:1234.567.890" title="Hotline">1234.567.890</a> /
			<a href="tel:6789.123.456" title="Hotline">6789.123.456</a>
		</div>
	);
};

NavMenu.propTypes = {
	menuWhiteClass: PropTypes.string,
	sidebarMenu: PropTypes.bool,
	strings: PropTypes.object
};

export default multilanguage( NavMenu );
