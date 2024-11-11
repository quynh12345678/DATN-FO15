import { getMethod, postMethod, putMethod } from "../api-service"

export const Auth_Service = {
	login: async (data) => {
		return await postMethod('login', data);
	},
	register: async (data) => {
		return await postMethod('register', data);
	},
	profile: async () => {
		return await getMethod('user/auth/profile');
	},
	updateProfile: async (data) => {
		return await putMethod('user/auth/profile', data);
	},

}
