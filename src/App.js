import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store/index.js";
import Header from "./common/header/index.js";
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/index.js";
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div className="app">
              <Header />
              <Switch>
                <Route path="/detail/:id" exact component={Detail}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/write" exact component={Write}/>
                <Route path="/" component={Home}/>
              </Switch>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
