import React, { createContext, useContext, useState } from "react";

// Определение интерфейса
interface BearState {
    bears: number;
    increment: () => void;
    decrement: () => void;
    incrementByAmount: (by: number) => void;
}

// Создание контекста
export const BearContext = createContext<BearState | undefined>(undefined);

// Создание провайдера контекста
export const BearProvider = ({ children }: { children: React.ReactElement }) => {
    const [bears, setBears] = useState<number>(0);

    const increment = () => setBears(bears + 1);
    const decrement = () => setBears(bears - 1);
    const incrementByAmount = (by: number) => setBears(bears + by);

    return (
        <BearContext.Provider value={{ bears, increment, decrement, incrementByAmount }}>
            {children}
        </BearContext.Provider>
    );
};