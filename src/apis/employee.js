import API from "../helper/axios";

export const getAllEmployee = () => API.delete("/Admin/GetManagerList");

export const addEmployee = (form) => API.post("/Admin/AddManager", form);

export const deleteEmployee = (id) =>
  API.delete(`/Admin/DeleteManager?managerId=${id}`);
