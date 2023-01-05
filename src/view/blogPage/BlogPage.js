import React , {useEffect} from "react";
import Contact from "../landingPage/components/contact-us/contact";
import Navbar from "../landingPage/components/navbar/Navbar";
import Blogs from "./blogs/Blogs";
import { getBlogs } from "../../actions/blogActions";
import { useDispatch } from "react-redux";
const BlogPage = () => {
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getBlogs());
},[getBlogs , dispatch])
  return (
    <div className="Blog">
      <Navbar />
      <Blogs />
      <Contact />
    </div>
  );
};

export default BlogPage;
