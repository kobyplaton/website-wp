import React from 'react'
import Section from '../components/Section'
import PageText from '../components/PageText'
import '../styles/WallPrinting.css'

function WallPrintingSection() {
  return (
    <Section dark={true}>
        <PageText heading={'How does wall printing work?'}>
            <div className="subsection">
                <p>Wall printing is an exciting new technique that allows custom designs to be directly applied to walls. Here will explore the process of how wall printing works, combining technology, creativity, and craftsmanship to create stunning visual displays.</p>
            </div>
            <div className="subsection">
                <h3>1. Specialized Printing Equipment:</h3>
                <p>Wall printing starts with special printers designed specifically for this purpose. These advanced printers ensure accurate and high-quality image reproduction.</p>
            </div>
            <div className="subsection">
                <h3>2. Surface Preparation:</h3>
                <p>Before printing, the wall surface is carefully prepared by cleaning off any dust or dirt. Sometimes, a primer or base coat is applied to help the print adhere better and achieve the best results.</p>
            </div>
            <div className="subsection">
                <h3>3. Digital Image Processing:</h3>
                <p>The desired design or image is digitally processed and adjusted to fit the printer's requirements. This ensures the image will be printed correctly on the wall.</p>
            </div>
            <div className="subsection">
                <h3>4. Alignment and Calibration:</h3>
                <p>The printer uses alignment and calibration systems to position the printing head accurately. This ensures that the design is printed in the right place on the wall.</p>
            </div>
            <div className="subsection">
                <h3>5. Ink Application:</h3>
                <p>Special inks are used for wall printing to ensure they adhere well to different wall materials and withstand environmental factors. The printer applies the ink in layers, building up the image with precise detail and colours.</p>
            </div>
            <div className="subsection">
                <h3>6. Preservation of Wall Texture:</h3>
                <p>An important aspect of wall printing is preserving the wall's original texture. The ink is applied in a way that respects and maintains the unique feel of the wall, so it doesn't change its texture.</p>
            </div>
            <div className="subsection">
                <h3>7. Drying and Finishing:</h3>
                <p>After printing, the surface needs time to dry and allow the ink to set properly. This can take a few hours or more. To protect the print, a protective coating or sealant may be applied to make it more durable.</p>
            </div>
            <div className="subsection">
                <p>Wall printing combines technology and artistry to bring customized designs to life on walls. By understanding the process, we can appreciate the craftsmanship and creativity involved. This innovative technique opens up new possibilities for personalization, branding, and artistic expression in various spaces. As wall printing continues to evolve, it plays a significant role in the world of contemporary art.</p>
            </div>
        </PageText>
    </Section>
  )
}

export default WallPrintingSection