
import React, {useState} from "react";

export function useCounter (initialValue) {
    const [counter, updateCounter] = useState(initialValue);

    const setCounter = (newValue) => {
        updateCounter(newValue);
    }

    return [counter, setCounter];
}