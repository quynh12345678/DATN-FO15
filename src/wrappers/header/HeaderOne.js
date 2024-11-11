import React from "react";
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import CategoryBox from "../../components/header/CategoryBox";

const HeaderOne = ({
}) => {
    return (
        <header>
            <div className="headerBox">
                <div className="container1">
                    <Logo logoClass="logoBox" />
                    <div className="headerRight">
                        <div className="top_head">
                            <div className="top_left">
                                {/* Nav menu */}
                                <NavMenu />
                            </div>
                            <div className="top_right">
                                {/* Icon group */}
                                <IconGroup />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CategoryBox />
        </header>
    );
};

export default HeaderOne;
