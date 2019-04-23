import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store/index.js";
import Header from "./common/header/index.js";
import Home from "./pages/home/index.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="app">
            <Header />
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/detail" exact render={() => {return (<div>detail</div>)}}/>
              </Switch>
            </BrowserRouter>
          </div>
      </Provider>
    );
  }
}

export default App;
