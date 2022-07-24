import axios from "../helper/axios";

export const login = (user) => axios.post("/Account/Login", user);

export const changePassword = (model) =>
  axios.post("/Account/ChangePassword", model);
