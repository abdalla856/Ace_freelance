import axios from "axios";

const userURL = "http://localhost:5000/user";
const blogURL = "http://localhost:5000/blog";
const billURL = "http://localhost:5000/bill";

// users api

export const getAllActioveUsers = () =>
  axios.get(`${userURL}/users`, {
    headers: {
      "Content-Type": "appplication/json",
    },
  });

export const createUser = (user) =>
  axios.post(`${userURL}/signup`, user, {
    headers: { "Content-Type": "application/json" },
  });
export const signUpGoogle = (accessToken) =>
  axios.post(
    `${userURL}/signup`,
    {
      googleAccessToken: accessToken,
    }
  );
export const signUpFB = (accessToken , userId) =>
  axios.post(
    `${userURL}/signup`,
    {
     FBAccessToken: accessToken,
     userID:userId
    }
  );

export const signIn = (user) =>
  axios.post(`${userURL}/login`, user, {
    headers: { "Content-Type": "application/json" },
  });

//blog apis

export const addNewBlog = (formData) =>
  axios.post(`${blogURL}/add_new_blog`, formData, {
    headers: { "Content-Type": "application/json" },
  });
export const getAllBlogs = () =>
  axios.get(`${blogURL}/get_all_blogs`, {
    headers: {
      "Content-Type": "appplication/json",
    },
  });

export const deleteBlog = (id) =>
  axios.delete(`${blogURL}/delete_blog/${id}`, {
    headers: {
      "Content-Type": "appplication/json",
    },
  });

export const getBlogById = (id) => axios.get(`${blogURL}/blog_by_id/${id}`);

/// upload images

export const imagePath = (formData) =>
  axios.post(`${blogURL}/upload_img`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateBlog = (blog) =>
  axios.put(`${blogURL}/update_blog`, blog, {
    headers: { "Content-Type": "application/json" },
  });

/// bill apis

export const getAllBills = () =>
  axios.get(`${billURL}/all_bills`, {
    headers: { "Content-Type": "application/json" },
  });

export const createBill = (billbody) =>
  axios.post(
    `${billURL}/add_new_bill`,
    { billbody: billbody },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

export const deleteBill = (id) => axios.delete(`${billURL}/delete_bill/${id}`);

export const udapteBills = (bill) =>
  axios.put(`${billURL}/update_bill`, bill, {
    headers: { "Content-Type": "application/json" },
  });
