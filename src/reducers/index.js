import { combineReducers } from "redux";
import brand from "./brandReducer";

const allReducers = combineReducers({
  brand,
});

export default allReducers;
