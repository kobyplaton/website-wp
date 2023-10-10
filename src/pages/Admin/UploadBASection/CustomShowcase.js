import React, { useEffect, useState } from 'react'
import { convertImageSizes } from '../../../extras/convertImageSizes'

function CustomShowcase({imageFile}) {

    const [originalSizes, setOriginalSizes] = useState({width: 0, height: 0})
    const [convertedSizes, setConvertedSizes] = useState({width: 0, height: 0})


    useEffect(() => {
        if (imageFile) {
            console.log(imageFile)
            const reader = new FileReader()
            reader.readAsDataURL(imageFile)
            reader.onload = (e) => {
                const image = new Image()
                image.src = e.target.result
                image.onload = () => {
                setOriginalSizes({width: image.width, height: image.height})
                }
            }
        }
    }, [imageFile])

    useEffect(() => {
        setConvertedSizes(convertImageSizes(originalSizes))
    }, [originalSizes])


    return (
        <img src={URL.createObjectURL(imageFile)} width={convertedSizes.width} height={convertedSizes.height} alt='' />
    )
}

export default CustomShowcase