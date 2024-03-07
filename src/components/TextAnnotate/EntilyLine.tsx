import { useEffect } from 'react'
import { Entity } from '.'
import { getContainerInfo } from './utils'

interface Iprops {
    entities?: Entity[]
}

function EntilyLine(props: Iprops) {
    const { entities } = props
    return (
        <>
            {entities?.map((item) => (
                <line key={item.id} />
            ))}
        </>
    )
}

export default EntilyLine
