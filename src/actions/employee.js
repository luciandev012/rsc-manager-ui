import * as api from "../apis/employee";

export const getAllEmployee = () => async (dispatch) => {
  const { data } = await api.getAllEmployee();
  dispatch({ type: "GETALL", payload: data });
};

export const addEmployee = (form) => async (dispatch) => {
  const { data, status } = await api.addEmployee(form);
  console.log(data);
  if (status == 200) {
    const { data } = await api.getAllEmployee();
    dispatch({ type: "GETALL", payload: data });
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  await api.deleteEmployee(id);
  dispatch({ type: "DELETE", payload: id });
};
