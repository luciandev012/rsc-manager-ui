import * as api from "../apis/category";

export const getAllCategories = () => async (dispatch) => {
  const { data } = await api.getAllCates();
  dispatch({ type: "GETCATES", payload: data });
};
