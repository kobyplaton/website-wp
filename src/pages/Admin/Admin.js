import React, { useState } from 'react'
import Page from '../../components/Page'
import '../../styles/Admin.css'
import ImageUploadSection from './ImageUploadSection/ImageUploadSection'
import GenerateKeySection from './GenerateKeySection'
import ModifyGallerySection from './ModifyGallerySection/ModifyGallerySection'
import ManageProcessesSection from './ManageProcessesSection/ManageProcessesSection'


function Admin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verified, setVerified] = useState(true)

    const loginVerification = () => {
        if (email == 'here' && password == '123') {
            setVerified(true)
            setEmail('');
            setPassword('');
        }
    }
     

  return (
    <Page hero={`${verified ? 'Admin' : 'Admin login'}`}>
        {!verified &&
        <div className="login-form">
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='email' />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='password' />
            <button onClick={loginVerification}>login</button>
        </div>
        }
        {verified &&
        <>
            <ImageUploadSection />
            <GenerateKeySection />
            <ModifyGallerySection />
            <ManageProcessesSection />
        </>
        }
    </Page>
  )
}

export default Admin

