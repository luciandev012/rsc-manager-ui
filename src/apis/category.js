const { default: axios } = require("axios");

const API = axios.create({ baseURL: "https://localhost:5001/api/v1/" });

export const getAllCates = () => API.get("/Product/GetAllCategories");
