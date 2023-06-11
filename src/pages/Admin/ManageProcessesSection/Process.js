import React from 'react'
import { deleteDbFile } from '../../../firebase/firestore';

function Process({process, setProcesses}) {
    const {processId, dateStarted} = process;

    const deleteProcess = () => {
        deleteDbFile('current processes', processId)
        setProcesses((prev) => prev.filter((proc) => processId !== proc.processId))
    }

  return (
    <div style={{border: 'black 1px solid'}}>
        <h3>ProcessId: {processId}</h3>
        <h3>Date Started: {dateStarted}</h3>
        <button onClick={deleteProcess}>Delete</button>
    </div>
  )
}

export default Process