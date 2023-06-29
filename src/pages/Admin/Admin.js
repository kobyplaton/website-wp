import React, { useState } from 'react'
import Page from '../../components/Page'
import '../../styles/Admin.css'
import ImageUploadSection from './ImageUploadSection/ImageUploadSection'
import GenerateKeySection from './GenerateKeySection'
import ModifyGallerySection from './ModifyGallerySection/ModifyGallerySection'
import ManageProcessesSection from './ManageProcessesSection/ManageProcessesSection'
import { Accordion, Button } from 'react-bootstrap'


function Admin() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [verified, setVerified] = useState(false)
    const [incorrect, toggleIncorrect] = useState(false)

    const loginVerification = (e) => {
        e.preventDefault()
        if (login == process.env.REACT_APP_ADMIN_LOGIN && password == process.env.REACT_APP_ADMIN_PASSWORD) {
            setVerified(true)
            setLogin('');
            setPassword('');
            toggleIncorrect(false)
        } else {
            setLogin('');
            setPassword('');
            toggleIncorrect(true)
        }
    }
     

  return (
    <Page hero={`${verified ? 'Admin' : 'Admin login'}`}>
        {!verified &&
        <form className="login-form mx-auto">
            <div className="form-group">
                <label className='mb-2' htmlFor="login">Login:</label>
                <input className='form-control' name='login' onChange={(e) => setLogin(e.target.value)} value={login} type="text" placeholder='login' />
            </div>
            <div className="form-group">
                <label className='mb-2' htmlFor="password">Password:</label>
                <input className='form-control' name='password' onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='password' />
            </div>
            <div className="form-group">
                <Button type='submit' onClick={(e) => loginVerification(e)}>login</Button>
            </div>
            {incorrect && <div
            style={{color: 'red'}}
            >Incorrect login or password!</div>}
        </form>
        }
        {verified &&
        <>
            <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>UploadImage</Accordion.Header>
                    <Accordion.Body>
                        <ImageUploadSection />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Generate Client Key</Accordion.Header>
                    <Accordion.Body>
                        <GenerateKeySection />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Modify Gallery</Accordion.Header>
                    <Accordion.Body>
                        <ModifyGallerySection />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Manage Current Processes</Accordion.Header>
                    <Accordion.Body>
                        <ManageProcessesSection />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </>
        }
    </Page>
  )
}

export default Admin

