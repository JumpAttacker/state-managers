import React from 'react'
import './App.css'
import ReduxComponent from "./redux/ReduxComponent";
import BearComponent from "./zustand/BearComponent";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import ContextComponent from "./context/ContextComponent";
import {BearProvider} from "./context/BearProvider";
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
    )
}

export default App
