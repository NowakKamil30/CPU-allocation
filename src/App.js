import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

const store = createStore(reducers);
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Header title = {"CPU Allocation"}/>
        <Main/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
