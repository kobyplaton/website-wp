import React, { Suspense, lazy, useState } from 'react'
import Section from '../../../components/Section.js'
import Loading from '../../../components/Loading.js'
import { Button } from 'react-bootstrap'

function ModifyGallerySection() {

    const ModifyGallery = lazy(() => import('./ModifyGallery.js'))

    const [toggleGallery, setGallery] = useState()

    const openGallery = () => {
        setGallery(true)
    }


  return (
    <Section>
        <Button 
          className='my-5'
          onClick={openGallery}>Load Gallery</Button>
        {toggleGallery &&
        <Suspense fallback={<Loading />}>

            <ModifyGallery />
        </Suspense>
        }
    </Section>
  )
}

export default ModifyGallerySection