import React, { Suspense, lazy, useState } from 'react'
import Section from '../../../components/Section.js'
import Loading from '../../../components/Loading.js'

function ModifyGallerySection() {

    const ModifyGallery = lazy(() => import('./ModifyGallery.js'))

    const [toggleGallery, setGallery] = useState()

    const openGallery = () => {
        setGallery(true)
    }


  return (
    <Section>
        <button onClick={openGallery}>Load Gallery</button>
        {toggleGallery &&
        <Suspense fallback={<Loading />}>

            <ModifyGallery />
        </Suspense>
        }
    </Section>
  )
}

export default ModifyGallerySection