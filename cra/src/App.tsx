import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BearProvider} from "./context/BearProvider";
import ContextComponent from "./context/ContextComponent";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import ReduxComponent from "./redux/ReduxComponent";
import BearComponent from "./zustand/BearComponent";
import MobxComponent from "./mobX/MobxComponent";

function App() {
  return (
      <div className="App">

        <BearProvider>
          <ContextComponent/>
        </BearProvider>

        <Provider store={store}>
          <ReduxComponent/>
        </Provider>

        <BearComponent/>

        <MobxComponent/>

      </div>
  );
}

export default App;
