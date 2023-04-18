import React from "react";
import { observer } from "mobx-react-lite";
import BearStore from "./BearStore";

const MobxComponent: React.FC = observer(() => {
    const { bears, increment, decrement, incrementByAmount } = BearStore;

    return (
        <div>
            <h1>MobX</h1>
            <h2>Bears: {bears}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
        </div>
    );
});

export default MobxComponent;
