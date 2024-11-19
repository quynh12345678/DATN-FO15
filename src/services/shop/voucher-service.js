import { getMethod, postMethod, putMethod } from "../api-service";

export const Voucher_Service = {
  list: async () => {
    return await getMethod("voucher");
  },
  detail: async (data) => {
    return await getMethod("voucher/detail", data);
  },
};
