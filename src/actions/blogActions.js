import * as api from "../api";

export const AddNewBlog = (formData) => async (dispatch) => {
  try {
    const blog = await api.addNewBlog(formData);
    console.log(blog.data);
    dispatch({ type: "CREATE", payload: blog.data.blog });
  } catch (err) {
    console.log(err);
  }
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    const blogs = await api.getAllBlogs();
    dispatch({ type: "FETCH_ALL_BLOGS", payload: blogs.data });
  } catch (err) {
    console.log(err);
  }
};

export const getAllDataNumbers = () => async (dispatch) => {
  try {
    const blogs = await api.getAllBlogs();
    let users = await api.getAllActioveUsers();
    dispatch({ type: "FETCH_ALL_BLOGS", payload: blogs.data });
    await dispatch({ type: "FETCH", payload: users.data });
  } catch (err) {
    console.log(err);
  }
};
export const deleteblogbyId = (id) => async (dispatch) => {
  try {
    const res = await api.deleteBlog(id);
    console.log(res.status);
    if (res.status === 200) {
      dispatch({ type: "DELETE_BLOG", payload: id });
    }
  } catch (err) {
    console.log(err.message);
  }
};

export const getBlogbyId = (id) => async (dispatch) => {
  try {
    const data = await api.getAllBlogs();
    dispatch({ type: "Blog_By_ID", payload: data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getPhotoPath = (file) => async () => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const path = await api.imagePath(formData);
    return path;
  } catch (err) {
    console.log(err.message);
  }
};

export const updateBlog = (blog) => async (dispatch) => {
  try {
    const updatedblog = await api.updateBlog(blog);
console.log(updatedblog.data.blog);
    dispatch({ type: "UPDATE", payload: updatedblog.data.blog });
  } catch (err) {
    console.log(err.message);
  }
};
