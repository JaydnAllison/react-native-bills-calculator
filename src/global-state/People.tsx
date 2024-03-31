import { Dispatch, createContext, useContext, useReducer } from "react";
import { TJSXProps, TPerson, TID } from "../constants.ts";
import useStorageReducer from "../hooks/useStorageReducer.tsx";

const STORAGE_KEY = 'people';

export const enum PeopleActionType {
    AddPerson,
    RemovePerson,
    ChangePersonName,
    ChangePersonPercentage
}

type TPeopleAction = {type: PeopleActionType.AddPerson, payload: {person: TPerson}} 
| {type: PeopleActionType.RemovePerson, payload: {id: TID}}
| {type: PeopleActionType.ChangePersonName, payload: {id: TID, newName: string}}
| {type: PeopleActionType.ChangePersonPercentage, payload: {id: TID, newPercentage: number}};

type TPeopleContext = {
    people: Array<TPerson>,
    dispatchPeople: Dispatch<TPeopleAction>
}

const initialState: Array<TPerson> = [];

const PeopleContext = createContext<TPeopleContext>({people: initialState, dispatchPeople: () => {}});

function peopleReducer(prevState: Array<TPerson>, action: TPeopleAction): Array<TPerson> {
    switch (action.type) {
        case PeopleActionType.AddPerson:
            return [...prevState, action.payload.person];
        
        case PeopleActionType.RemovePerson:
            return prevState.filter((person: TPerson) => person.id !== action.payload.id);

        case PeopleActionType.ChangePersonName:
            return prevState.map((person: TPerson) => person.id === action.payload.id ? {...person, name: action.payload.newName} : person);

        case PeopleActionType.ChangePersonPercentage:
            return prevState.map((person: TPerson) => person.id === action.payload.id ? {...person, percentage: action.payload.newPercentage} : person);

        default:
            return prevState;
    }
}

export default function PeopleProvider({children}: TJSXProps) {
    const [state, dispatch] = useStorageReducer(STORAGE_KEY, peopleReducer, initialState); 

    return (
        <PeopleContext.Provider value={{people: state, dispatchPeople: dispatch}}>
            {children}
        </PeopleContext.Provider>
    )
}

export const usePeopleContext = () => useContext(PeopleContext);