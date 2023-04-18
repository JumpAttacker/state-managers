import {create} from 'zustand'
// import {devtools} from 'zustand/middleware';

interface BearState {
    bears: number
    increment: () => void
    decrement: () => void
    incrementByAmount: (by: number) => void
}

export const useBearStore = create<BearState>()(
    // devtools(
        (set) => ({
            bears: 0,
            increment: () => set((state) => ({bears: state.bears + 1})),
            decrement: () => set((state) => ({bears: state.bears - 1})),
            incrementByAmount: (by) => set((state) => ({bears: state.bears + by})),
        })/*, {
            serialize: { options: true },
            store: 'storeName'
        })*/
)