import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
