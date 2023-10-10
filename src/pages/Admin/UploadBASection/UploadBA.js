import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import CustomShowcase from './CustomShowcase';

function UploadBA({imageBefore, imageAfter, setImageBefore, setImageAfter, uploadBAToDb}) {

    const typeRef = useRef()

    const handleClick = (e) => {
        e.preventDefault();
        uploadBAToDb({
          ...imageBefore,
          ...imageBefore,
          type: typeRef.current.value
        })
        setImageBefore(null)
        setImageAfter(null)
    }

  return (
    <div className="image-profile">
        {imageBefore && 
        <CustomShowcase imageFile={imageBefore.imageFile} />
        }
        {imageAfter &&
        <CustomShowcase imageFile={imageAfter.imageFile} />
        }
        <form name='details-form'>
            <div className="form-group">
            <label htmlFor='type'>Type:</label>
            <input className='form-control' ref={typeRef} type="text" name="type" />
          </div>
          <div className="form-group mt-3">
            <Button type='submit' form='details-form' onClick={handleClick}>Upload</Button>
          </div>
          
          
        </form>
    </div>
  )
}

export default UploadBA