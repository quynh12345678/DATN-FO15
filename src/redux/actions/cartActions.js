import { Cart_Service } from "../../services/shop/cart-service";

export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

//Thêm giỏ hàng
export const addToCart = (
  item,
  addToast,
  quantityCount,
  selectedProductColor,
  selectedProductSize
) => {
  return async (dispatch) => {
    if (item.quantity + quantityCount > item.pro_amount) {
      addToast("Hiện tại chúng tôi không đủ số lượng", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    if (addToast) {
      addToast("Thêm thành công vào giỏ hàng", {
        appearance: "success",
        autoDismiss: true,
      });
    }

    await Cart_Service.addToCartBuyer(item);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        quantity: quantityCount,
        selectedProductColor: selectedProductColor,
        selectedProductSize: selectedProductSize,
      },
    });
  };
};
//decrease from cart
export const decreaseQuantity = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Giảm số lượng giỏ hàng thành công", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
    dispatch({ type: DECREASE_QUANTITY, payload: item });
  };
};
//delete from cart
export const deleteFromCart = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Đã xóa khỏi giỏ hàng", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };
};
//delete all from cart
export const deleteAllFromCart = (addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Đã xóa các sản phẩm trong giỏ hàng", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_ALL_FROM_CART });
  };
};

// get stock of cart item
export const cartItemStock = (item, color, size) => {
  if (item.stock) {
    return item.stock;
  } else {
    //   return item.variation
    //     .filter(single => single.color === color)[0]
    //     .size.filter(single => single.name === size)[0].stock;
  }
};
