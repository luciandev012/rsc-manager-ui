const { default: axios } = require("axios");

const API = axios.create({ baseURL: "https://localhost:5001/api/v1/" });

export const getAllProducts = () => API.get("/Product/GetAllProduct");

export const addProduct = (product) => API.post("/Product/AddProduct", product);

export const deleteProduct = (id) =>
  API.delete(`/Product/DeleteProduct?id=${id}`);
