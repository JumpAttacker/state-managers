import React from 'react';
import {decrement, increment, incrementByAmount} from "./bearSlice";
import {useAppDispatch, useAppSelector} from "./hooks";

const ReduxComponent = () => {
    // const bears = useSelector((state: RootState) => state.bearState.bears);
    // const dispatch = useDispatch();
    const bears = useAppSelector(state => state.bearState.bears);
    const dispatch = useAppDispatch();
    const incrementFunc = () => dispatch(increment());
    const decrementFunc = () => dispatch(decrement());
    const incrementByAmountFunc = (by: number) => dispatch(incrementByAmount(by));
    return (
        <div>
            <h1>Redux</h1>
            <h2>Bears: {bears}</h2>
            <button onClick={incrementFunc}>Increment</button>
            <button onClick={decrementFunc}>Decrement</button>
            <button onClick={() => incrementByAmountFunc(5)}>Increment by 5</button>
        </div>
    );
};

export default ReduxComponent;