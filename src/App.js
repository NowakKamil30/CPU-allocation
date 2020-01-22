import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import "./css/index.min.css";

const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
function App() {
  return (
    <BrowserRouter>
    <Provider store = {store}>
      <div className="App">
        <Header title = {"CPU Allocation"}/>
        <Main/>
        <Footer/>
      </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
