import React, { useEffect, useState } from 'react'
import Showcase from './Showcase'
import { nanoid } from 'nanoid'

function ShowcaseSection({ beforeAndAfterList }) {

    const [types, setTypes] = useState([])

    useEffect(() => {
        let typesArr = beforeAndAfterList.map(ba => ba.type)
        typesArr = [...new Set(typesArr)]
        setTypes(typesArr)

    }, [beforeAndAfterList])

  return (
    <div>
        {types.map((type) => {
            const pairings = beforeAndAfterList.filter((pair) => pair.type === type)
            return <Showcase type={type} pairings={pairings} key={nanoid()} />
        })}
    </div>
  )
}

export default ShowcaseSection