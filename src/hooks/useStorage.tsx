import * as SecureStore from "expo-secure-store";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

const PREFIX = 'bills-calculator-';

export default function useStorage<StateType>(key: string, initValue: StateType): [StateType, Dispatch<SetStateAction<StateType>>] {
    key = PREFIX + key;

    const [value, setValue] = useState<StateType>(() => {
        const jsonValue = SecureStore.getItem(key);

        if (jsonValue) {
            return JSON.parse(jsonValue);
        }

        return typeof initValue === 'function' ? initValue() : initValue;
    });

    useEffect(() => SecureStore.setItem(key, JSON.stringify(value)), [key, value]);

    return [value, setValue];
}