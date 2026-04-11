import './App.css'
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsPage from './pages/AboutUsPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import BlogPage from "./pages/BlogPage";
import CartPage from './pages/CartPage';
import CreateOrderPage from './pages/CreateOrderPage';
import PrivateRoute from './components/PrivateRoute';
import OrdersPage from './pages/OrdersPage';
import { verifyTokenThunk } from "./store/thunks/clientThunk";

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