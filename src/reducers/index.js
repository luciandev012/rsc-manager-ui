import { combineReducers } from "redux";
import brand from "./brandReducer";
import product from "./productReducer";
import category from "./categoryReducer";
import unit from "./unitReducer";
import auth from "./authReducer";
import employee from "./emloyeeReducer";
import discount from "./discountReducer";

const allReducers = combineReducers({
  brand,
  product,
  category,
  unit,
  auth,
  employee,
  discount,
});

export default allReducers;
