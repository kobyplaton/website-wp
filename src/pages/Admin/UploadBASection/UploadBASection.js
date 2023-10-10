import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { uploadImageToStorage } from '../../../firebase/storage';
import { setDbFile } from '../../../firebase/firestore';
import Section from '../../../components/Section';
import UploadBA from './UploadBA';

function UploadBASection() {
    const [imageBefore, setImageBefore] = useState([]);
    const [imageAfter, setImageAfter] = useState([]);

    const uploadBAToDb = (imageBefore, imageAfter, type) => {
      const {idB, imageFileB} = imageBefore
      const {idA, imageFileA} = imageAfter
      const imageBeforeUploaded = uploadImageToStorage({idB, imageFileB,location: 'before-and-after-images'})
      const imageAfterUploaded = uploadImageToStorage({idA, imageFileA,location: 'before-and-after-images'})
      delete imageBefore.imageFile
      delete imageAfter.imageFile
      const fileUploaded = setDbFile('before-and-after-images', nanoid(), {imageBeforeId: idB, imageAfterId: idA, type})
      if (imageBeforeUploaded && imageAfterUploaded && fileUploaded) {
        alert("Before And After Uploaded")
      }
    }
  
    const handleImageUpload = (e, setImage) => {
      const image = {
        imageFile: e.target.files[0],
        id: nanoid()
      }
      setImage(image)
    }

    const handleImageBeforeUpload = (e) => {
        handleImageUpload(e, setImageBefore)
    }

    const handleImageAfterUpload = (e) => {
        handleImageUpload(e, setImageAfter)
    }
  
    return (
      <Section>
        <div className='image-upload-table'>
              <div className="custom-file">
                  <input
                      className='custom-file-input'
                      multiple='multiple'
                      type='file'
                      onChange={handleImageBeforeUpload}
                      />
                  <input
                      className='custom-file-input'
                      multiple='multiple'
                      type='file'
                      onChange={handleImageAfterUpload}
                      />
              </div>
              <div className="image-uploads">
                <UploadBA imageBefore={imageBefore} imageAfter={imageAfter} setImageBefore={setImageBefore} setImageAfter={setImageAfter} uploadBAToDb={uploadBAToDb} />
              </div>
          </div>
      </Section>
    )
}

export default UploadBASection