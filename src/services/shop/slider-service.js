import { buildFilter, getMethod } from "../index";

export const getSlides = async (params) => {
  let filter = buildFilter(params);
  return await getMethod("slide", filter);
};

export const showSlide = async (id, params) => {
  return await getMethod(`slide/show/${id}`, params);
};

export const showSlideDetail = async (productId, setSlide) => {
  try {
    const response = await showSlide(productId);
    if (response?.status == "success") {
      setSlide(response?.data?.slides);
    } else {
      setSlide(null);
    }
  } catch (error) {
    console.log(error);
    setSlide(null);
  }
};

export const getSlidesByFilters = async (params, setSlides) => {
  const data = [
    {
      avatar: "/view/img/ao-bong-da-tre-em_6995_7_HasThumb_Thumb.jpg",
    },
    {
      avatar: "/view/img/qua-bong-da-dong-luc_5523_7493_HasThumb_Thumb.jpg",
    },
    {
      avatar: "/view/img/1200x432_7972_HasThumb_Thumb.jpg",
    },
  ];
  setSlides(data);
};
