import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logoClass }) => {
    return (
        <div className={`${logoClass ? logoClass : ""}`}>
            <Link to={process.env.PUBLIC_URL + "/"}>
                <img alt="" className="logoBox" src="/assets/logo.jpg"  />
            </Link>
        </div>

    );
};

Logo.propTypes = {
    logoClass: PropTypes.string
};

export default Logo;
