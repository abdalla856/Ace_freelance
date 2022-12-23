import * as api from "../api";

export const AllActiveUserts = () => async (dispatch) => {
  try {
    let users = await api.getAllActioveUsers();

    await dispatch({ type: "FETCH", payload: users.data });
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (user) => async (dispatch) => {
  try {
    let res = await api.createUser(user);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const signIn = (user) => async (dispatch) => {
  try {
    let res = await api.signIn(user);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const signupGoogle = (accessToken, navigate) => async (dispatch) => {
  try {
    // signup user

    const { data } = await api.signUpGoogle(accessToken);
    console.log(data);
    return data
    // navigate("/")/
  } catch (err) {
    console.log(err.response.data.message)
    return {
      status :400 , 
      message :err.response.data.message
    }
  }
};
export const signupFB = (access_Token , userID) => async (dispatch) => {
  try {
    // signup user

    const { data } = await api.signUpFB(access_Token , userID);
    console.log(data);
    return data
   
  } catch (err) {
    console.log(err.response.data.message)
    return {
      status :400 , 
      message :err.response.data.message
    }
  }
};
