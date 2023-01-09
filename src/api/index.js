import axios from "axios";

const userURL = process.env.userURL || "http://localhost:5000/user";
const blogURL = process.env.blogURL ||"http://localhost:5000/blog";
const billURL = process.env.billURL ||"http://localhost:5000/bill";
const productURL =process.env.productURL || "http://localhost:5000/product";
const reveiwURL = process.env.reveiwURL ||"http://localhost:5000/review";
const discountURL =process.env.discountURL || "http://localhost:5000/discount";
const orderURL =process.env.orderURL || "http://localhost:5000/order";
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
  axios.post(`${userURL}/signup`, {
    googleAccessToken: accessToken,
  });
export const signUpFB = (accessToken, userId) =>
  axios.post(`${userURL}/signup`, {
    FBAccessToken: accessToken,
    userID: userId,
  });

export const signIn = (user) =>
  axios.post(`${userURL}/login`, user, {
    headers: { "Content-Type": "application/json" },
  });

export const signInGoogle = (accessToken) =>
  axios.post(`${userURL}/login`, {
    googleAccessToken: accessToken,
  });

export const signInFB = (accessToken, userId) =>
  axios.post(`${userURL}/login`, {
    FBAccessToken: accessToken,
    userID: userId,
  });
export const updateUserFbnG = (userId, birthday, role) =>
  axios.put(
    `${userURL}/update_user`,
    {
      id: userId,
      birthday: birthday,
      role: role,
      auth: true,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
export const updateUserAdmin = (userId, role) =>
  axios.put(
    `${userURL}/update_user`,
    {
      id: userId,

      role: role,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
export const getAllUsersinfo = () => axios.get(`${userURL}/all_user_info`);
export const deleteUser = (id) => axios.delete(`${userURL}/delete_user/${id}`);
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


export const getRecentBlogs =()=>axios.get(`${blogURL}/recent_blogs`)
export const getBlogById = (id) => axios.get(`${blogURL}/blog_by_id/${id}`);

export const  getBlogs =() =>axios.get(`${blogURL}/blogs`)
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

// Product APIS

export const addNewProduct = (fromdata) =>
  axios.post(`${productURL}/new_product`, fromdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const updateProductByAdmin = (fromdata) =>
  axios.patch(`${productURL}/update_product_admin`, fromdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getAllWebProduct = () =>
  axios.get(`${productURL}/all_web_products`);
export const getAllGraphicProduct = () =>
  axios.get(`${productURL}/all_graphic_products`);
export const getAllMechanicalProduct = () =>
  axios.get(`${productURL}/all_mechanical_products`);
export const getAllMarketingProduct = () =>
  axios.get(`${productURL}/all_marketing_products`);

export const deleteProductById = (id) =>
  axios.delete(`${productURL}/delete_product/${id}`);
export const getProductById = (id) =>
  axios.get(`${productURL}/product_one/${id}`);


  export const getAllProducts = ()=>axios.get(`${productURL}/all_products`);
/// Reviews Api

export const getAllReveiws = () => axios.get(`${reveiwURL}/get_reviews`);
export const updateReviewAction = (action, id) =>
  axios.patch(
    `${reveiwURL}/update_review_action`,
    { id: id, action: action },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

// Discount Apis

export const getAllDiscounts = () => axios.get(`${discountURL}/all_discounts`);
export const resetDiscount = (id) =>
  axios.patch(
    `${discountURL}/reset_discount`,
    { id: id },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
export const deleteDiscount = (id) =>
  axios.delete(`${discountURL}/delete_discount/${id}`);
export const addDiscount = (data) =>
  axios.post(`${discountURL}/new_discount`, data, {
    headers: { "Content-Type": "application/json" },
  });


  // orders APIs

  export const addNewOrder = (order) =>axios.post(`${orderURL}/new_order` , order , {
    headers: { "Content-Type": "application/json" },
  });


  export const getAllOrders =()=>axios.get(`${orderURL}/all_orders`)
  export const updateOrder =(id, progress)=>axios.patch(`${orderURL}/update_order` , {id :id , progress :progress} , {
    headers: { "Content-Type": "application/json" },

  })
  export const deleteORder =(id)=>axios.delete(`${orderURL}/delete_order/${id}` )