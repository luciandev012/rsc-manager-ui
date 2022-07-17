import { combineReducers } from "redux";
import brand from "./brandReducer";
import product from "./productReducer";
import category from "./categoryReducer";
import unit from "./unitReducer";
import auth from "./authReducer";

const allReducers = combineReducers({
  brand,
  product,
  category,
  unit,
  auth,
});

export default allReducers;
