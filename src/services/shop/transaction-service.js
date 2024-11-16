import { getMethod, postMethod, putMethod } from '../index';

export const TRANSACTION_SERVICE = {
	create: async (data) => {
		return await postMethod('transaction/store', data);
	},

	getList: async (params) => {
		return await getMethod('transaction', params);
	},

	show: async (id) => {
		return await getMethod('transaction/show/' + id);
	},
	changeStatus: async (id, status) => {
		const data = {
			'status': status
		}
		return await putMethod('transaction/status/' + id, data);
	}
}
