import React, { useEffect, useState } from 'react'
import useSlides from '../../../components/hooks/useSlides'
import { deleteDbFile } from '../../../firebase/firestore'
import { deleteImageInStorage } from '../../../firebase/storage'
import { Button } from 'react-bootstrap'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

function ModifyImage({image, modifyImageInDb, setSlides}) {

    const [viewDetails, setViewDetails] = useState(false)
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

    const handleDeleteClick = () => {
        deleteDbFile('gallery_images', image.id)
        deleteImageInStorage(image)
        setSlides((prev) => prev.filter((slide) => slide.id !== image.id))
    }

    const handleInputChange = (e, setInput) => {
        setInput(e.target.value)
    }


  return (
    <div key={image.id} className="image-profile">
      <div className="d-flex">
          <img className='me-3' src={image.src} width={250} height={250} />
          <div className='d-flex flex-column'>
          <AiOutlineEdit className='mb-2' onClick={() => setViewDetails((prev) => !prev)} size={35} />
          <AiOutlineDelete onClick={handleDeleteClick} size={35} />
          </div>
      </div>
        { viewDetails && <form name='details-form'>
          <div className="form-group">
            <label htmlFor='title'>Title:</label>
            <input className='form-control' value={title} onChange={(e) => handleInputChange(e, setTitle)} type="text" name="title" /><br />
          </div>
          <div className="form-group">
            <label htmlFor='width'>Width:</label>
            <input className='form-control' value={width} onChange={(e) => handleInputChange(e, setWidth)} type="text" name="width" /><br />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input className='form-control' value={height} onChange={(e) => handleInputChange(e, setHeight)} type="text" name="height" /><br />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input className='form-control' value={price} onChange={(e) => handleInputChange(e, setPrice)} type="text" name="price" /><br />
          </div>
          <div className="form-group">
            <textarea className='form-control' value={details} onChange={(e) => handleInputChange(e, setDetails)} form='details-form' name={image.id} placeholder='Extra details' cols="30" rows="5"></textarea>
          </div>
          <div className="form-group mt-3 mb-5">
            <Button className='mx-3' type='submit' form='details-form' onClick={(e) => handleUploadClick(e)}>Upload</Button>
          </div>
        </form>}
    </div>
  )
}

export default ModifyImage