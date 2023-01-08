import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./view/landingPage/Landing";
import Dashboard from "./view/admin/dashboard/dashboard";
import Finance from "./view/admin/finance/FinancePage";
import BlogPageAdminPage from "./view/admin/blog/blogPageAdmin";
import AddBlog from "./view/admin/blog/component/addblog/addBlog";
import UserAdmin from "./view/admin/user/userPage";
import UpdateBlog from "./view/admin/blog/component/updateblog/updateBlog";
import OrdersPage from "./view/admin/orders/orderPage";
import BlogPage from "./view/blogPage/BlogPage";
import SignIn from "./view/signin/signIn";
import Signup from "./view/signup/signUp";
import SingleBlog from "./view/blogPage/singleBlog/SingleBlog";
import Cookies from "js-cookie";
import Role from "./view/role/Role";
import WebAddProduct from "./view/admin/products/web/webAddproduct";
import AddWebPage from "./view/admin/products/web/components/add_web_product/addWebProduct";
import GraphicAddProduct from "./view/admin/products/graphic/graphicAddproduct";
import UpdateWebPage from "./view/admin/products/web/components/upade_web_product/updateWebProject";
import AddGraphicPage from "./view/admin/products/graphic/components/add_web_product/addGraphicProduct";
import UpdateGraphicPage from "./view/admin/products/graphic/components/upade_graphic_product/updateGraphicProject";
import MarketingAddProduct from "./view/admin/products/marketing/marketingAddproduct";
import AddMarketingPage from "./view/admin/products/marketing/components/add_market_product/addMarketingProduct";
import UpdateMarketingPage from "./view/admin/products/marketing/components/upade_marketing_product/updateMarketingProject";
import MechanicalAddProduct from "./view/admin/products/mechanical/mechanicalAddproduct";
import AddMechanicalPage from "./view/admin/products/mechanical/components/add_mechanical_product/addMechanicalProduct";
import UpdateMechanicalPage from "./view/admin/products/mechanical/components/upade_mechanical_product/updateMechanicalProject";
import ReviewsPage from "./view/admin/reviews/reviews";
import Discounts from "./view/admin/discounts/discountPage";
import Products from "./view/productsPage/Products";
import Product from "./view/productPage/Product";
import Cart from "./view/cart/Cart";
function App() {
  const storedData = JSON.parse(Cookies.get("user") || "{}");
  let routes;
  if (storedData.token && storedData.type !== "admin") {
    routes = (
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
        <Route path="/services/:service" element={<Products />} />
        <Route path="/services/:service/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    );
  } else if (storedData.token && storedData.type === "admin") {
    routes = (
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin_finance" element={<Finance />} />
        <Route path="/admin_blog" element={<BlogPageAdminPage />} />
        <Route path="/add_blog" element={<AddBlog />} />
        <Route path="/user_admin" element={<UserAdmin />} />
        <Route path="/order_admin" element={<OrdersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/update_blog/:id" element={<UpdateBlog />} />

        <Route path="/web_add_product" element={<WebAddProduct />} />
        <Route path="/add_web_pro" element={<AddWebPage />} />
        <Route path="/services/:service" element={<Products />} />
        <Route path="/services/:service/:id" element={<Product />} />
        <Route path="/graphic_add_product" element={<GraphicAddProduct />} />
        <Route
          path="/mechanical_add_product"
          element={<MechanicalAddProduct />}
        />
        <Route path="/add_graphic_pro" element={<AddGraphicPage />} />

        <Route
          path="/marketing_add_product"
          element={<MarketingAddProduct />}
        />
        <Route path="/add_marketing_pro" element={<AddMarketingPage />} />
        <Route path="/add_mechanical_pro" element={<AddMechanicalPage />} />

        <Route path="/update_web_project/:id" element={<UpdateWebPage />} />
        <Route
          path="/update_graphic_project/:id"
          element={<UpdateGraphicPage />}
        />
        <Route
          path="/update_marketing_project/:id"
          element={<UpdateMarketingPage />}
        />
        <Route
          path="/update_mechanical_project/:id"
          element={<UpdateMechanicalPage />}
        />
        <Route path="/reviews_admin" element={<ReviewsPage />} />
        <Route path="/discounts_admin" element={<Discounts />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    );
  } else if (storedData.token === undefined) {
    routes = (
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/role/:id" element={<Role />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services/:service" element={<Products />} />
          <Route path="/services/:service/:id" element={<Product />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    );
  }

  return (
    <main>
      <Router forceRefresh>{routes}</Router>
    </main>
  );
}

export default App;
