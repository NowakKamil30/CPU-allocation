import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Nav from "./layouts/Nav";
import Main from "./layouts/Main";
import Aside from "./layouts/Aside";

const store = createStore(reducers);
function App() {
  return (
    <BrowserRouter>
    <Provider store = {store}>
      <div className="App">
        <Header title = {"CPU Allocation"}/>
        <Nav/>
        <Main/>
        <Aside/>
        <Footer/>
      </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
