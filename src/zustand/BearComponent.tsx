import React from 'react';
import {useBearStore} from "./useBearStore";

const BearComponent = () => {
    const {bears, increment, incrementByAmount, decrement} = useBearStore();
    return (
        <div>
            <h1>Zustand</h1>
            <h2>Bears: {bears}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
        </div>
    );
};

export default BearComponent;