import API from "../helper/axios";

export const getAllOrder = () => API.get("/Order/GetAllOrder");

export const deleteOrder = (id) => API.delete(`/Order/DeleteOrder?id=${id}`);

export const updateOrder = (order) => API.post("/Order/UpdateOrder", order);
