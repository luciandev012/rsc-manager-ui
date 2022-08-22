import { combineReducers } from "redux";
import brand from "./brandReducer";
import product from "./productReducer";
import category from "./categoryReducer";
import unit from "./unitReducer";
import auth from "./authReducer";
import employee from "./emloyeeReducer";
import discount from "./discountReducer";
import order from "./orderReducer";
import importNote from "./importReducer";
import exportP from "./exportReducer";
import revenue from "./revenueReducer";
import customer from "./customerReducer";
import warning from "./warningReducer";
import subcate from "./subcategoryReducer";
import bill from "./billReducer";
import dish from "./dishReducer";
const allReducers = combineReducers({
  brand,
  product,
  category,
  unit,
  auth,
  employee,
  discount,
  order,
  importNote,
  exportP,
  revenue,
  customer,
  warning,
  subcate,
  bill,
  dish,
});

export default allReducers;
