import {makeAutoObservable} from "mobx";

class BearStore {
    bears: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment = () => {
        this.bears += 1;
    }

    decrement = () => {
        this.bears -= 1;
    }

    incrementByAmount = (by: number) => {
        this.bears += by;
    }
}

export default new BearStore();
