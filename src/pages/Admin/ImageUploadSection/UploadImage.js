import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import CustomImage from './CustomImage';

function UploadImage({ image, uploadImageToDb, setImagesUploaded }) {

    const {title, width, height, price, details} = image;
    const titleRef = useRef(title)
    const widthRef = useRef(width)
    const heightRef = useRef(height)
    const priceRef = useRef(price)
    const detailsRef = useRef(details)

    const handleClick = (e) => {
        e.preventDefault();
        uploadImageToDb({
          ...image,
          title: titleRef.current.value,
          width: widthRef.current.value,
          height: heightRef.current.value,
          price: priceRef.current.value,
          details: detailsRef.current.value,
        })
        setImagesUploaded((prev) => prev.filter((current) => current.id !== image.id))
    }

  return (
    <div key={image.id} className="image-profile">
        <CustomImage imageFile={image.imageFile} />
        <form name='details-form'>
          <div className="form-group">
            <label htmlFor='title'>Title:</label>
            <input className='form-control' ref={titleRef} type="text" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor='width'>Width:</label>
            <input className='form-control' ref={widthRef} type="text" name="width" />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height:</label>
            <input className='form-control' ref={heightRef} type="text" name="height" /><br />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input className='form-control' ref={priceRef} type="text" name="price" /><br />
          </div>
          <div className="form-group">
            <textarea className='form-control' form='details-form' ref={detailsRef} name={image.id} placeholder='Extra details' cols="30" rows="5"></textarea>
          </div>
          <div className="form-group mt-3">
            <Button type='submit' form='details-form' onClick={handleClick}>Upload</Button>
          </div>
          
          
        </form>
    </div>
  )
}

export default UploadImage