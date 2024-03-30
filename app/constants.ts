export type TPerson = {
    id: string | number[],
    name: string,
    percentage: number
}

export type TDateEntry = { 
    date: string,
    cost: number
}

export type TBill = {
    id: string | number[],
    name: string,
    dateEntries: Array<TDateEntry>
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