import { getMethod, postMethod, putMethod } from "../api-service"

export const Cart_Service = {
    addToCartBuyer: async (data) => {
		return await postMethod(`order/add/${data.id}` , data);
	},
}
