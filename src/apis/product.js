import API from "../helper/axios";

export const getAllProducts = () => API.get("/Product/GetAllProduct");

export const addProduct = (form) => API.post("/Product/AddProduct", form);

export const deleteProduct = (id) =>
  API.delete(`/Product/DeleteProduct?id=${id}`);

export const updateProduct = (form) => API.post("/Product/UpdateProduct", form);
