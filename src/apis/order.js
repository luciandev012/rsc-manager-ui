import API from "../helper/axios";

export const getAllOrder = () => API.get("/Order/GetAllOrder");
