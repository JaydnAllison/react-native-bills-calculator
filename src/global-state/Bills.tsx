import { createContext, useReducer, Dispatch, useContext } from "react";
import { TID, TJSXProps } from "../constants.ts";
import { TBill } from "../constants.ts";

const enum BillsAction {
    AddBill,
    RemoveBill,
    RenameBill,
    ChangeBillCost
}

type TBillsAction = {type: BillsAction.AddBill, payload: {bill: TBill}}
| {type: BillsAction.RemoveBill, payload: {id: TID}}
| {type: BillsAction.RenameBill, payload: {id: TID, newName: string}}
| {type: BillsAction.ChangeBillCost, payload: {id: TID, date: string, cost: number}};

type TBillsContext = {
    bills: Array<TBill>,
    dispatchBills: Dispatch<TBillsAction>
}

const initialState: Array<TBill> = [];

const BillsContext = createContext<TBillsContext>({bills: initialState, dispatchBills: () => {}});

function billsReducer(prevState: Array<TBill>, action: TBillsAction): Array<TBill> {
    switch(action.type) {
        case BillsAction.AddBill:
            return [...prevState, action.payload.bill];
        
        case BillsAction.RemoveBill:
            return prevState.filter((bill: TBill) => bill.id !== action.payload.id);

        case BillsAction.RenameBill: 
            return prevState.map((bill: TBill) => bill.id === action.payload.id ? {...bill, name: action.payload.newName} : bill);

        case BillsAction.ChangeBillCost: 
            return prevState.map((bill: TBill) => {
                if (bill.id === action.payload.id) {
                    bill.dateEntries[action.payload.date] = action.payload.cost;
                }
                return bill;
            });

        default:
            return prevState;
    }
}

export default function BillsProvider({children}: TJSXProps) {
    const [state, dispatch] = useReducer(billsReducer, initialState);

    <BillsContext.Provider value={{bills: state, dispatchBills: dispatch}}>
        {children}
    </BillsContext.Provider>
}

export const useBillsContext = () => useContext(BillsContext);