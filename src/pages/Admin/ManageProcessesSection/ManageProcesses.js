import React, { useEffect, useState } from 'react'
import { getCollectionItems } from '../../../firebase/firestore'
import Process from './Process'
import { nanoid } from 'nanoid'

function ManageProcesses() {

  const [processes, setProcesses] = useState([])

  useEffect(() => {
    getCollectionItems('current processes')
    .then((res) => res.forEach(doc => setProcesses((prev) => [...prev, doc.data()])))
    .catch(e => console.error('Something went could not GET items from Processes Collection in db, Check db', e))
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>{processes.map((process) => (
      <Process key={nanoid()} setProcesses={setProcesses} process={process} />
    ))}</div>
  )
}

export default ManageProcesses