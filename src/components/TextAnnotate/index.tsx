import { memo, useEffect, useState } from 'react'
import EntilyLine from './EntilyLine'
import { getContainerInfo } from './utils'
import { Entity, Relation, Row } from '@/components/TextAnnotate/type.ts'

interface Iprops {
    text?: string
    fontSize?: number
    entities?: Entity[]
    relations?: Relation[]
}

function TextAnnotate(props: Iprops) {
    const { text = '', fontSize = 14, entities = [], relations = [] } = props
    const [rowArr, setRowArr] = useState<Row[]>([])

    const init = () => {
        let rowArr = []
        // 容器宽度
        const { width } = getContainerInfo()
        console.log(width, '===========')
        if (!width) return
        // 当前容器一行能有的字数
        const rowTextNum = Math.floor(width / fontSize)
        // 当前文本能有多少行
        const rowNum = Math.ceil(text.length / rowTextNum)
        // 如果文字只有一行
        if (rowNum < 2) {
            rowArr = [{ text, startIndex: 0, endIndex: text.length }]
        } else {
            // 字符串切割数组，每一项为当前行的字符,换行的下标
            rowArr = new Array(rowNum - 1).fill(null).map((_, index) => {
                const startIndex = index * rowTextNum
                const endIndex = startIndex + rowTextNum
                return {
                    text: text.slice(startIndex, endIndex),
                    startIndex,
                    endIndex
                }
            })
        }
        console.log(rowArr)
        setRowArr(rowArr)
    }

    useEffect(() => {
        if (!text) return
        init()
    }, [text])

    return (
        <div
            className="w-full h-full relative overflow-y-auto box-border scrollbar"
            id="TEXT_ANNOTATE_CONTAINER"
        >
            <div
                className="w-full m-0 p-0 whitespace-normal absolute t-0 l-0"
                style={{
                    fontSize,
                    lineHeight: `calc(${fontSize} + 40px)`
                }}
            >
                {rowArr.map((row) => (
                    <div key={row.startIndex}>{row.text}</div>
                ))}
            </div>
            <svg
                style={{
                    width: '100%'
                }}
            >
                {/* <EntilyLine entities={entities} /> */}
            </svg>
        </div>
    )
}

export default TextAnnotate
