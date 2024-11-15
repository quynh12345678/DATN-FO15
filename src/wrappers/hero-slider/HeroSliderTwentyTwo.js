import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderTwentyTwoSingle from "../../components/hero-slider/HeroSliderTwentyTwoSingle.js";

const HeroSliderTwentyTwo = (props) => {
    const params = {
        effect: "fade",
        loop: true,
        speed: 4000,
        height: 100,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        watchSlidesVisibility: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        renderPrevButton: () => (
            <button className="swiper-button-prev ht-swiper-button-nav">
                <i className="pe-7s-angle-left" />
            </button>
        ),
        renderNextButton: () => (
            <button className="swiper-button-next ht-swiper-button-nav">
                <i className="pe-7s-angle-right" />
            </button>
        )
    };
    return (
        <div className="slider-area">
            <div className="slider-active nav-style-1">
                <Swiper {...params}>
                    {props.slides &&
                        props.slides.map((single, key) => {
                            return (
                                <HeroSliderTwentyTwoSingle
                                    data={single}
                                    key={key}
                                    sliderClass="swiper-slide"
                                />
                            );
                        })}
                </Swiper>
            </div>
        </div>
    );
};

export default HeroSliderTwentyTwo;
