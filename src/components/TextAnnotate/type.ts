export interface Entity {
    id: string | number
    startIndex: number
    endIndex: number
    label: string
}

export interface Relation {
    id: string | number
    start: number
    end: number
    label: string
}

export  interface  Row {
    text: string;
    startIndex: number;
    endIndex: number;
}