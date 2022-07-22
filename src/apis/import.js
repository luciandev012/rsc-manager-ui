import API from "../helper/axios";

export const getAllImport = () => API.get("/Inventory/GetAllImportNote");
