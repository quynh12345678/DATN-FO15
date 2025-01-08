import { getMethod, postMethod, putMethod } from "../index";

export const TRANSACTION_SERVICE = {
  create: async (data) => {
    return await postMethod("transaction/store", data);
  },

  getList: async (params) => {
    return await getMethod("transaction", params);
  },

  show: async (id) => {
    return await getMethod("transaction/show/" + id);
  },
  changeStatus: async (id, status, description_cancel = "") => {
    const data = {
      status: status,
      description_cancel: description_cancel,
    };
    return await putMethod("transaction/status/" + id, data);
  },
};
