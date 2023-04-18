import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";

// Define a type for the slice state
interface ReduxBearState {
    bears: number
}

// Define the initial state using that type
const initialState: ReduxBearState = {
    bears: 0,
}

export const bearSlice = createSlice({
    name: 'bearState',
    initialState,
    reducers: {
        increment: (state) => {
            state.bears += 1
        },
        decrement: (state) => {
            state.bears -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.bears += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = bearSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.bearState.bears

export default bearSlice.reducer