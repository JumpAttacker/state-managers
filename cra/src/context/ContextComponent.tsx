// BearComponent.tsx
import React from "react";
import {useBearContext} from "./useBearContext";

const ContextComponent: React.FC = () => {
    const { bears, increment, decrement, incrementByAmount } = useBearContext();

    return (
        <div>
            <h1>React context</h1>
            <h2>Bears: {bears}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
        </div>
    );
};

export default ContextComponent;