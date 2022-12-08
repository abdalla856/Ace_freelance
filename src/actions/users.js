
import * as api from "../api";

export const AllActiveUserts = () => async (dispatch) => {
  try {
    let users  = await api.getAllActioveUsers();

   await  dispatch({ type: "FETCH", payload: users.data });
  } catch (err) {
    console.log(err);
  }
};
