import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./view/landingPage/Landing";
import Dashboard from "./view/admin/dashboard/dashboard";
import Finance from "./view/admin/finance/FinancePage";
import BlogPageAdminPage from "./view/admin/blog/blogPageAdmin";
import AddBlog from "./view/admin/blog/component/addblog/addBlog";
import UserAdmin from "./view/admin/user/userPage";
import OrdersPage from "./view/admin/orders/orderPage";
import BlogPage from "./view/blogPage/BlogPage";
import SignIn from "./view/signin/signIn";
import Signup from "./view/signup/signUp";
import SingleBlog from "./view/blogPage/singleBlog/SingleBlog";
import Role from "./view/role/Role";
import Products from "./view/productsPage/Products";
import Product from "./view/productPage/Product";
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin_finance" element={<Finance />} />
          <Route path="/admin_blog" element={<BlogPageAdminPage />} />
          <Route path="/add_blog" element={<AddBlog />} />
          <Route path="/user_admin" element={<UserAdmin />} />
          <Route path="/order_admin" element={<OrdersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/role" element={<Role />} />
          <Route path="/services/:service" element={<Products />} />
          <Route path="/services/:service/:id" element={<Product />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
