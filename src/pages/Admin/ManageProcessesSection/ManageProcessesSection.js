import React, { Suspense, lazy, useState } from 'react'
import Section from '../../../components/Section'
import Loading from '../../../components/Loading'
import { Button } from 'react-bootstrap'

function ManageProcessesSection() {
    const ManageProcesses = lazy(() => import('./ManageProcesses.js'))

    const [sectionView, toggleSectionView] = useState(false)

    const viewSection = () => {
        toggleSectionView((prev) => !prev)
    }


  return (
    <Section>
        <Button className='my-4' onClick={viewSection}>Load Current Processes</Button>
        {sectionView &&
        <Suspense fallback={<Loading />}>

            <ManageProcesses />
        </Suspense>
        }
    </Section>
  )
}

export default ManageProcessesSection