import { useEffect, useMemo } from 'react'
import EntilyLine from './EntilyLine'
import { getContainerInfo } from './utils'

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

interface Iprops {
    text?: string
    fontSize?: string
    entities?: Entity[]
    relations?: Relation[]
}

function TextAnnotate(props: Iprops) {
    const { text = '', fontSize = '14px', entities = [], relations = [] } = props

    useEffect(() => {
        const { width } = getContainerInfo()
        const numbers = fontSize.match(/\d+/g)
        console.log(numbers, '====')
    }, [text])

    return (
        <div className="w-full h-full relative overflow-y-auto" id="TEXT_ANNOTATE_CONTAINER">
            <div
                className="w-full m-0 p-0 whitespace-normal absolute t-0 l-0"
                style={{
                    fontSize,
                    lineHeight: `calc(${fontSize} + 20px)`
                }}
            >
                {text}
            </div>
            <svg
                style={{
                    width: '100%'
                }}
            >
                <EntilyLine entities={entities} />
            </svg>
        </div>
    )
}

export default TextAnnotate
