import { ReducerStateWithoutAction, Reducer, ReducerWithoutAction, useReducer, useEffect, ReducerState, ReducerAction, Dispatch } from "react";
import * as SecureStore from "expo-secure-store";

const PREFIX = 'bills-calculator-';

export default function useStorageReducer<R extends ReducerWithoutAction<any>, I>(key: string, reducer: R | Reducer<any, any>, initialState: I, initializer?: (arg: I) => ReducerStateWithoutAction<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>] {
    key = PREFIX + key;

    const [value, dispatch] = useReducer<R | Reducer<any, any>, I>(reducer, initialState, (initialState: I) => {
        const jsonValue = SecureStore.getItem(key);

        if (jsonValue) {
            return JSON.parse(jsonValue);
        }

        return initializer ? initializer(initialState) : initialState;
    });

    useEffect(() => {
        SecureStore.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, dispatch];
}