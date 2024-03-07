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
        if (text) {
            const { width } = getContainerInfo()
            const textSize = fontSize.match(/\d+/g)
            const textWidth = textSize && Number(textSize[0])
            // 每行最多可以放多少字
            // const fontNumer = width / textWidth
        }
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
