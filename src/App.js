import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "./store/index.js";
import Header from "./common/header/index.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;
