import * as api from "../apis/brand";

export const getAllBrand = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBrand();
    dispatch({ type: "GETBRANDS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addBrand = (brand) => async (dispatch) => {
  const data = await api.createBrand(brand);
  dispatch({ type: "CREATE", payload: data });
};

export const updateBrand = (brand) => async (dispatch) => {
  await api.updateBrand(brand);
  console.log(brand);
  dispatch({ type: "UPDATE", payload: brand });
  //getAllBrand();
};

export const deleteBrand = (id) => async (dispatch) => {
  await api.deleteBrand(id);
  dispatch({ type: "DELETE", payload: id });
};
