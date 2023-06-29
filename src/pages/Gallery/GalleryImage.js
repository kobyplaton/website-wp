import React from 'react'

function GalleryImage({ src, width, height, onClick, index }) {
  
  return (
    <div
    style={{width: width, height: height}}
    onClick={() => onClick(index)} className='gallery-image'>
            <div className="image-overlay-text-box">
                <div className="image-overlay-text">
                    <p>Details</p>
                </div>
            </div>
            <img width={width} height={height} src={src} />
    </div>
  )
}

export default GalleryImage