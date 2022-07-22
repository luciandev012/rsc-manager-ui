import * as api from "../apis/import";

export const getAllImportNote = () => async (dispatch) => {
  const { data } = await api.getAllImport();
  dispatch({ type: "GETALL", payload: data });
};
