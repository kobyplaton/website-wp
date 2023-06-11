import React, { useEffect, useState } from 'react'
import useSlides from '../../../components/hooks/useSlides'
import { deleteDbFile } from '../../../firebase/firestore'
import { deleteImageInStorage } from '../../../firebase/storage'

function ModifyImage({image, modifyImageInDb}) {

    const [title, setTitle] = useState(image.title || '')
    const [width, setWidth] = useState(image.width || '')
    const [height, setHeight] = useState(image.height || '')
    const [price, setPrice] = useState(image.price || '')
    const [details, setDetails] = useState(image.details || '')

    const handleUploadClick = (e) => {
        e.preventDefault();
        modifyImageInDb({
          ...image,
          title,
          width,
          height,
          price,
          details,
        })
    }

    const handleDeleteClick = (e) => {
        e.preventDefault()
        deleteDbFile('gallery_images', image.id)
        deleteImageInStorage(image)
    }

    const handleInputChange = (e, setInput) => {
        setInput(e.target.value)
    }

  return (
    <div key={image.id} className="image-profile">
        <img src={image.src} width={250} height={250} />
        <form name='details-form'>
          <label htmlFor='title'>Title:</label>
          <input value={title} onChange={(e) => handleInputChange(e, setTitle)} type="text" name="title" /><br />
          <label htmlFor='width'>Width:</label>
          <input value={width} onChange={(e) => handleInputChange(e, setWidth)} type="text" name="width" /><br />
          <label htmlFor="height">Height:</label>
          <input value={height} onChange={(e) => handleInputChange(e, setHeight)} type="text" name="height" /><br />
          <label htmlFor="price">Price:</label>
          <input value={price} onChange={(e) => handleInputChange(e, setPrice)} type="text" name="price" /><br />
          <textarea value={details} onChange={(e) => handleInputChange(e, setDetails)} form='details-form' name={image.id} placeholder='Extra details' cols="30" rows="5"></textarea>
          <button type='submit' form='details-form' onClick={handleUploadClick}>Upload</button>
          <button type='submit' form='details-form' onClick={handleDeleteClick}>Delete</button>
        </form>
    </div>
  )
}

export default ModifyImage