const { default: axios } = require("axios");

const API = axios.create({ baseURL: "https://localhost:5001/api/v1/" });

export const getAllBrand = () => API.get("/Product/GetAllBrands");

export const createBrand = (brand) => API.post("/Product/AddBrand", brand);

export const updateBrand = (brand) => API.post("/Product/UpdateBrand", brand);
