import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Checkout from "./Checkout";
import Context from "../contextAPI/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import OrderSuccess from "./pages/OrderSuccess";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import store from "../redux/store/store";

function Home() {
  return (
    <Provider store={store}>
      <Context>
        
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Product} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/success" component={OrderSuccess} />
            </Switch>
          </Router>
        
      </Context>
    </Provider>
  );
}

export default Home;
