import PropTypes from "prop-types";
import React from "react";
import { buildImage } from "../../services";

const HeroSliderTwentyTwoSingle = ({ data, sliderClass }) => {
    return (
        <div
            className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${sliderClass ? sliderClass : ""
                }`}
            style={{ backgroundImage: `url(${buildImage(data.avatar)})`, height: '80vh' }}
        >
        </div>
    );
};

HeroSliderTwentyTwoSingle.propTypes = {
    data: PropTypes.object,
    sliderClass: PropTypes.string
};

export default HeroSliderTwentyTwoSingle;
