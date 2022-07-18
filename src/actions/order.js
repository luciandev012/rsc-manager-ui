import * as api from "../apis/order";

export const getAllOrder = () => async (dispatch) => {
  const { data } = await api.getAllOrder();
  dispatch({ type: "GETALL", payload: data });
};
