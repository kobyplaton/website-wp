import React from 'react'
import PageText from '../components/PageText'
import Section from '../components/Section'
import '../styles/Welcome.css'
import TextDivider from '../components/TextDivider'

function WelcomeSection() {
  return (
    <div>
        <Section dark={false}>
            <PageText heading={'Wall Printing'}>
                <div className='welcome-text'>
                    <h3>Welcome Everyone</h3>
                    <p>Vertical Wall Printing is an advanced technique that allows us to reproduce high-definition images and designs directly onto vertical surfaces, such as walls and partitions. Utilizing state-of-the-art digital printing technology and proprietary software, our system precisely applies ink with exceptional accuracy and color reproduction, resulting in stunning, lifelike visuals that transcend traditional painting and wallpapering methods.</p>
                    <p>The key features and advantages of Vertical Wall Printing include:</p>
                    <TextDivider />
                    <p><b>Unleashing Creativity:</b> With this technology, artists, designers, and businesses can bring their imagination to life like never before. Whether it's awe-inspiring murals, captivating branding displays, or personalized spaces, the possibilities for creative expression are limitless.</p>
                    <TextDivider />
                    <p><b>Seamless Customization:</b> From residential homes to commercial establishments, our Vertical Wall Printing solutions cater to every client's unique preferences and requirements. The ability to customize designs ensures a perfect fit for any space, capturing the essence of individuality.</p>
                    <TextDivider />
                    <p><b>Efficiency and Speed:</b> Traditional hand-painted murals can take weeks to complete. Vertical Wall Printing drastically reduces turnaround time without compromising on quality. Projects that once seemed arduous and time consuming are now achievable in a fraction of the time.</p>
                    <TextDivider />
                    <p><b>Sustainable and Eco-Friendly:</b> We are committed to environmental responsibility. Our printing process employs eco-friendly inks and minimizes waste, making it a sustainable choice for conscious customers.</p>
                    <TextDivider />
                    <p><b>Ease of Maintenance:</b> The printed surfaces are easy to maintain and clean, providing long-lasting visual appeal without the need for costly touch-ups or replacements.</p>
                </div>

            </PageText>
        </Section>
    </div>
  )
}

export default WelcomeSection