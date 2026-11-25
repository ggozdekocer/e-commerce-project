import './App.css'
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import ShopPage from './features/product/pages/ShopPage';
import ProductDetailPage from './features/product/pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUpPage from './features/auth/pages/SignUpPage';
import LoginPage from './features/auth/pages/LoginPage';
import BlogPage from "./pages/BlogPage";
import CartPage from './features/cart/pages/CartPage';
import CreateOrderPage from './features/order/pages/CreateOrderPage';
import PrivateRoute from './features/auth/components/PrivateRoute';
import OrdersPage from './features/order/pages/OrdersPage';
import { verifyTokenThunk } from "./features/auth/store/clientThunk";

function App() {
  useEffect(() => {
    verifyTokenThunk();
  }, []);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:gender/:categoryId" component={ShopPage} />
          <Route exact path="/shop/:gender/:categoryId/:productId/:slug" component={ProductDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/cart" component={CartPage} />
          <PrivateRoute exact path="/order" component={CreateOrderPage} />
          <PrivateRoute exact path="/orders" component={OrdersPage} />
        </Switch>
      </Layout>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        theme="light"
      />
    </Router>
  );
}

export default App;