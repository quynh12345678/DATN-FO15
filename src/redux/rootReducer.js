// @ts-nocheck

import productReducer from "./reducers/productReducer";

import { combineReducers } from "redux";
import { createMultilanguageReducer } from "redux-multilanguage";

const rootReducer = combineReducers({
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" }),

  productData: productReducer,
});

export default rootReducer;
