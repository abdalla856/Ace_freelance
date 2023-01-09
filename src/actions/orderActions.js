import * as api from "../api";

export const AddOrder = (order) => async (dispatch) => {
  try {
    const { data } = await api.addNewOrder(order);
    dispatch({ type: "CREATE_ORDER", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllOrders = () => async (dispatch) => {
  try {
    const { data } = await api.getAllOrders();
    console.log(data);
    dispatch({ type: "FETCH_ALL_ORDER", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateOrder = (id, progress) => async (dispatch) => {
  try {
    const { data } = await api.updateOrder(id, progress);
    dispatch({ type: "UPDATE_ORDER", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteOrder = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteORder(id);
    dispatch({ type: "DELETE_ORDER", payload: id });
  } catch (err) {
    console.log(err.message);
  }
};
