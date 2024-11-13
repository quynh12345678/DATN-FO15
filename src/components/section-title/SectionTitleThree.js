import PropTypes from "prop-types";
import React from "react";

const SectionTitleThree = ({
  titleText,
}) => {
  return (
    <div className="big_tt">
      <span className="title">{titleText}</span>
    </div>
  );
};

SectionTitleThree.propTypes = {
  titleText: PropTypes.string
};

export default SectionTitleThree;
