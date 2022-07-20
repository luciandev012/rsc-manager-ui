import axios from "helper/axios";

export const getALLStaff = () => axios.get("/Manager/GetStaffList");
