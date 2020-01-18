import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";

const store = createStore(reducers);
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      
      </div>
    </Provider>
  );
}

export default App;
