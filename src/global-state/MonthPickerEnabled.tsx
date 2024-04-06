import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { TJSXProps } from "../constants";

type TMonthPickerEnabledContext = {
    monthPickerEnabled: boolean,
    setMonthPickerEnabled: Dispatch<SetStateAction<boolean>>
};

const initialState: boolean = false;

const MonthPickerEnabledContext = createContext<TMonthPickerEnabledContext>({monthPickerEnabled: initialState, setMonthPickerEnabled: () => {}});

export default function  MonthPickerEnabledProvider({children}: TJSXProps) {
    const [monthPickerEnabled, setMonthPickerEnabled] = useState<boolean>(initialState);

    return (
        <MonthPickerEnabledContext.Provider value={{monthPickerEnabled, setMonthPickerEnabled}}>
            {children}
        </MonthPickerEnabledContext.Provider>
    )
}

export const useMonthPickerEnabledContext = () => useContext(MonthPickerEnabledContext);