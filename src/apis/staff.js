import axios from "helper/axios";

export const getALLStaff = () => axios.delete("/Staff/GetStaffList");
