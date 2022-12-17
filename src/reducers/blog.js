const Blogs = (blogs = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_BLOGS":
      return action.payload;
    case "CREATE":
      return [...blogs, action.payload];
    case "Blog_By_ID":
      return action.payload;

    case "UPDATE":
     console.log(action.payload._id);
     console.log(blogs[0]._id);
      blogs[
        blogs.findIndex((blog)=>blog._id===action.payload._id)
      ] = action.payload;
      return blogs
    case "DELETE_BLOG":
      const id = action.payload;
      blogs = blogs.filter((blog) => blog._id !== id);
      console.log(blogs);
      return blogs;
    default:
      return blogs;
  }
};
export default Blogs;
