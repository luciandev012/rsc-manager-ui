import { combineReducers } from "redux";
import brand from "./brandReducer";
import product from "./productReducer";
import category from "./categoryReducer";
import unit from "./unitReducer";

const allReducers = combineReducers({
  brand,
  product,
  category,
  unit,
});

export default allReducers;
