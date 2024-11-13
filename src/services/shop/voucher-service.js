import { getMethod, postMethod, putMethod } from "../api-service"

export const Voucher_Service = {
	detail: async (data) => {
		return await getMethod('voucher/detail', data);
	},
}
