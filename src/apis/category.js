import API from "../helper/axios";

export const getAllCates = () => API.get("/Product/GetAllCategories");
