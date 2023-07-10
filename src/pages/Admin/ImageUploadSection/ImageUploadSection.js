import React, { useState } from 'react'
import Section from '../../../components/Section'
import { nanoid } from 'nanoid';
import UploadImage from './UploadImage';
import { uploadImageToStorage } from '../../../firebase/storage';
import { setDbFile } from '../../../firebase/firestore';

function ImageUploadSection() {

  const [imagesUploaded, setImagesUploaded] = useState([]);

  const uploadImageToDb = (image) => {
    const {id, imageFile} = image
    const imageUploaded = uploadImageToStorage({id, imageFile})
    delete image.imageFile
    const fileUploaded = setDbFile('gallery_images', id, image)
    if (imageUploaded && fileUploaded) {
      alert("Image Uploaded")
    }
  }

  const handleImageUpload = (e) => {
    const filesUploaded = Array.from(e.target.files)
    const newArrayOfImageObjects = filesUploaded.map(imageFile => ({
        imageFile,
        details: '',
        id: nanoid()
    }))
    setImagesUploaded(newArrayOfImageObjects)

  }

  return (
    <Section>
      <div className='image-upload-table'>
            <div className="custom-file">
                <input
                    className='custom-file-input'
                    type='file'
                    multiple="multiple"
                    onChange={handleImageUpload}
                    />
            </div>
            <div className="image-uploads">
                {imagesUploaded.map(image => (
                    <UploadImage image={image} setImagesUploaded={setImagesUploaded} uploadImageToDb={uploadImageToDb} key={nanoid()} />
                ))}
            </div>
        </div>
    </Section>
  )
}

export default ImageUploadSection