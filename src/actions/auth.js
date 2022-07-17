import * as api from "../apis/auth";

export const login = (user) => async (dispatch) => {
  const { data } = await api.login(user);
  console.log(data);
  dispatch({ type: "AUTH", payload: data });
};
