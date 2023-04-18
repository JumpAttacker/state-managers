// Создание хука для использования контекста
import {useContext} from "react";
import {BearContext} from "./BearProvider";

export const useBearContext = () => {
    const context = useContext(BearContext);
    if (context === undefined) {
        throw new Error("useBearContext must be used within a BearProvider");
    }
    return context;
};