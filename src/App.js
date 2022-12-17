import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./view/landingPage/Landing";
import Dashboard from "./view/admin/dashboard/dashboard";
import Finance from "./view/admin/finance/FinancePage";
import BlogPageAdminPage from "./view/admin/blog/blogPageAdmin";
import AddBlog from "./view/admin/blog/component/addblog/addBlog";
import UserAdmin from './view/admin/user/userPage'
import OrdersPage from "./view/admin/orders/orderPage";
import UpdateBlog from "./view/admin/blog/component/updateblog/updateBlog";
function App() {
  return (
    <main >
      <Router>
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin_finance" element={<Finance />} />
          <Route path="/admin_blog" element={<BlogPageAdminPage />} />
          <Route path="/add_blog" element={<AddBlog />} />
          <Route path="/user_admin" element={<UserAdmin />} />
          <Route path="/order_admin" element={<OrdersPage />} />
          <Route path="/update_blog/:id" element={<UpdateBlog />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
