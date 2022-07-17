import API from "../helper/axios";

export const getAllProducts = () => API.get("/Product/GetAllProduct");

export const addProduct = (product) => API.post("/Product/AddProduct", product);

export const deleteProduct = (id) =>
  API.delete(`/Product/DeleteProduct?id=${id}`);
