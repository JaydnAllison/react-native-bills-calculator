import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { TJSXProps } from "../constants";

type TCurrentDateContext = {
    currentDate: Date,
    setCurrentDate: Dispatch<SetStateAction<Date>>
};

const initialState: Date = new Date(new Date().getFullYear(), new Date().getMonth());

const CurrentDateContext = createContext<TCurrentDateContext>({currentDate: initialState, setCurrentDate: () => {}});

export default function CurrentDateProvider({children}: TJSXProps) {
    const [currentDate, setCurrentDate] = useState<Date>(initialState);

    return (
        <CurrentDateContext.Provider value={{currentDate, setCurrentDate}}>
            {children}
        </CurrentDateContext.Provider>
    )
}

export const useCurrentDateContext = () => useContext(CurrentDateContext);