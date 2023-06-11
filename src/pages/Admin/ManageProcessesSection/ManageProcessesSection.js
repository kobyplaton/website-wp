import React, { Suspense, lazy, useState } from 'react'
import Section from '../../../components/Section'
import Loading from '../../../components/Loading'

function ManageProcessesSection() {
    const ManageProcesses = lazy(() => import('./ManageProcesses.js'))

    const [sectionView, toggleSectionView] = useState(false)

    const viewSection = () => {
        toggleSectionView((prev) => !prev)
    }


  return (
    <Section>
        <button onClick={viewSection}>Load Current Processes</button>
        {sectionView &&
        <Suspense fallback={<Loading />}>

            <ManageProcesses />
        </Suspense>
        }
    </Section>
  )
}

export default ManageProcessesSection