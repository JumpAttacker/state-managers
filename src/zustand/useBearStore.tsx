import {create} from 'zustand'

interface BearState {
    bears: number
    increment: () => void
    decrement: () => void
    incrementByAmount: (by: number) => void
}

export const useBearStore = create<BearState>()(
    (set) => ({
        bears: 0,
        increment: () => set((state) => ({bears: state.bears + 1})),
        decrement: () => set((state) => ({bears: state.bears - 1})),
        incrementByAmount: (by) => set((state) => ({bears: state.bears + by})),
    })
)