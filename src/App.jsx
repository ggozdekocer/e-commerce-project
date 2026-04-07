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
          <Route exact path="/product" component={ProductDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Layout>

      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;