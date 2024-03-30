import { createContext, useReducer, Dispatch, useContext } from "react";
import { TID, TJSXProps } from "../app/constants.ts";
import { TBill } from "../app/constants.ts";

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

function billsReducer(state: Array<TBill>, action: TBillsAction): Array<TBill> {
    switch(action.type) {
        case BillsAction.AddBill:
            return [...state, action.payload.bill];
        
        case BillsAction.RemoveBill:
            return state.filter((bill: TBill) => bill.id !== action.payload.id);

        case BillsAction.RenameBill: 
            return state.map((bill: TBill) => bill.id === action.payload.id ? {...bill, name: action.payload.newName} : bill);

        case BillsAction.ChangeBillCost: 
            return state.map((bill: TBill) => {
                if (bill.id === action.payload.id) {
                    bill.dateEntries[action.payload.date] = action.payload.cost;
                }
                return bill;
            });

        default:
            return state;
    }
}

export default function BillsProvider({children}: TJSXProps) {
    const [state, dispatch] = useReducer(billsReducer, initialState);

    <BillsContext.Provider value={{bills: state, dispatchBills: dispatch}}>
        {children}
    </BillsContext.Provider>
}

export const useBillsContext = () => useContext(BillsContext);