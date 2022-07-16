const { default: axios } = require("axios");

const API = axios.create({ baseURL: "https://localhost:5001/api/v1/" });

export const getAllUnit = () => API.get("/Product/GetAllUnit");

export const createUnit = (unit) => API.post("/Product/AddUnit", unit);

export const updateUnit = (unit) => API.post("/Product/UpdateUnit", unit);

export const deleteUnit = (id) => API.delete(`/Product/DeleteUnit?id=${id}`);
