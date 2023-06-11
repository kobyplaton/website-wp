import React, { useContext } from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import { NavContext } from '../context/NavContext'

function AboutUsSection({dark = false}) {

  const {aboutUsRef} = useContext(NavContext)

  return (
    <Section dark={dark} sectionRef={aboutUsRef} >
        <PageText heading='About Us'>
              <p className='text-align-start'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde et nisi, quae porro neque eaque rerum repellendus libero inventore qui error voluptatibus tempore, quidem quos, nesciunt cum reiciendis atque quaerat consectetur dolores laudantium quis obcaecati accusantium. Nihil perferendis, praesentium repudiandae aperiam facilis quaerat sed a excepturi labore, necessitatibus pariatur eum!
              </p>
              <p className='text-align-start'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sunt recusandae facere asperiores voluptas eaque debitis accusamus magni ducimus? Incidunt maxime eaque id tempora ratione debitis praesentium, modi aspernatur? Maiores.
              </p>
            </PageText> 
    </Section>
  )
}

export default AboutUsSection