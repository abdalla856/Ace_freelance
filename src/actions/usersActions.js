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
    return data;
    // navigate("/")/
  } catch (err) {
    console.log(err.response.data.message);
    return {
      status: 400,
      message: err.response.data.message,
    };
  }
};
export const signupFB = (access_Token, userID) => async (dispatch) => {
  try {
    // signup user

    const { data } = await api.signUpFB(access_Token, userID);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.response.data.message);
    return {
      status: 400,
      message: err.response.data.message,
    };
  }
};

export const signinGoogle = (accessToken) => async (dispatch) => {
  try {
    // signup user

    const { data } = await api.signInGoogle(accessToken);
    console.log(data);
    return data;
    // navigate("/")/
  } catch (err) {
    console.log(err.response.data.message);
    return {
      status: 400,
      message: err.response.data.message,
    };
  }
};

export const signInFB = (access_Token, userID) => async (dispatch) => {
  try {
    // signup user

    const { data } = await api.signInFB(access_Token, userID);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.response.data.message);
    return {
      status: 400,
      message: err.response.data.message,
    };
  }
};

export const updateUser = (id, date, role) => async (dispatch) => {
  try {
    const { data } = await api.updateUserFbnG(id, date, role);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateUserAdmin = (id, role) => async (dispatch) => {
  try {
    const { data } = await api.updateUserAdmin(id, role);
    dispatch({ type: "Update_User", payload: data });
    return { status: 202 };
  } catch (err) {
    console.log(err);
  }
};

export const getAllUserInfo = () => async (dispatch) => {
  try {
    const { data } = await api.getAllUsersinfo();
    dispatch({ type: "FETCH", payload: data.values });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await api.deleteUser(id);

    dispatch({ type: "DELETE_USER", payload: id });
  } catch (err) {
    console.log(err.message);
  }
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserById(id);
    dispatch({ type: "FETCH", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
