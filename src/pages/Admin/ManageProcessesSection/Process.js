import React from 'react'
import { deleteDbFile } from '../../../firebase/firestore';
import { Button, Card } from 'react-bootstrap';

function Process({process, setProcesses}) {
    const {processId, dateStarted} = process;

    const deleteProcess = () => {
        deleteDbFile('current processes', processId)
        setProcesses((prev) => prev.filter((proc) => processId !== proc.processId))
    }

  return (
    <Card className='mt-2 p-2'>
        <Card.Body>
          <Card.Title>
            Process Id: {processId}
          </Card.Title>
          <Card.Text>
            Date Started: {dateStarted}
          </Card.Text>
        <Button onClick={deleteProcess}>Delete</Button>
        </Card.Body>
    </Card>
  )
}

export default Process