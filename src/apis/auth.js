import axios from "../helper/axios";

export const login = (user) => axios.post("/Admin/Login", user);
