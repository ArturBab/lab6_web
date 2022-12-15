import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Processors from "./components/Processors";
import Cards from "./components/Cards";
import Processor from "./components/Processor";
import Card from "./components/Card";
import React, {useState} from "react";
import {CartProvider} from "react-use-cart";
import { Context } from "./context/Context";
import Cart from "./components/cart/Cart";

function App() {

  return (
    <>
        <Navbar/>
        <Context>
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/processors" component={Processors}/>
                <Route path="/processors/:id" component={Processor} exact/>
                <Route path="/cards" component={Cards} />
                <Route path="/cart" component={Cart} />

            </Switch>
        </Router>
        </Context>
    </>
  );
}

export default App;
