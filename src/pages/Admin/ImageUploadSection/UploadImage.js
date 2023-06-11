import React, { useRef, useState } from 'react'

function UploadImage({ image, uploadImageToDb }) {

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
    }

  return (
    <div key={image.id} className="image-profile">
        <img src={URL.createObjectURL(image.imageFile)} width={250} height={250} />
        <form name='details-form'>
          <label htmlFor='title'>Title:</label>
          <input ref={titleRef} type="text" name="title" /><br />
          <label htmlFor='width'>Width:</label>
          <input ref={widthRef} type="text" name="width" /><br />
          <label htmlFor="height">Height:</label>
          <input ref={heightRef} type="text" name="height" /><br />
          <label htmlFor="price">Price:</label>
          <input ref={priceRef} type="text" name="price" /><br />
          <textarea form='details-form' ref={detailsRef} name={image.id} placeholder='Extra details' cols="30" rows="5"></textarea>
          <button type='submit' form='details-form' onClick={handleClick}>Upload</button>
        </form>
    </div>
  )
}

export default UploadImage