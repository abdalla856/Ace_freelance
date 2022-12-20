
import * as api from "../api";

export const AllActiveUserts = () => async (dispatch) => {
  try {
    let users  = await api.getAllActioveUsers();

   await  dispatch({ type: "FETCH", payload: users.data });
  } catch (err) {
    console.log(err);
  }
};



export const signUp =(user )=>async (dispatch) =>{
  try {
    let res  = await api.createUser(user);
    return res.data

    dispatch({type:"SIGNUP" , payload : res.data});
  }catch (err){
    console.log(err.message);
  }
}