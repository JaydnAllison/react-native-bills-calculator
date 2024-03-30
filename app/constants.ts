export type TID = string | number[];

export type TPerson = {
    id: TID,
    name: string,
    percentage: number
}

export type TDateEntry = { 
    [keyType: string]: number //number is the cost for that date key is the date
}

export type TBill = {
    id: TID,
    name: string,
    dateEntries: Array<TDateEntry>
}

export type TJSXProps = {
    children?: any,
    ref?: any,
}

type TColours = {
    primaryColour: string,
    secondaryColour: string,
    backgroundColour: string,
    mutedPrimaryColour: string,
    textInput: string
}

export const Colours: TColours = {
    primaryColour: '#243CDB',
    backgroundColour: '#FBFBFE',
    secondaryColour: '#808080',
    mutedPrimaryColour: '#A0B7FC',
    textInput: '#f5f5f5'
}