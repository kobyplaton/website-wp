import { useEffect, useState } from 'react'

function useImageSizes() {

    const [file, setFile] = useState()
    const [sizes, setSizes] = useState()


    useEffect(() => {
        if (file) {
            const image = new Image()
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                image.src = e.target.result
                image.onload = () => {
                setSizes({width: image.width, height: image.height})
                }
            }
        }
    }, [file])

    useEffect(() => {
        console.log(sizes)
    }, [sizes])

    return [sizes, setFile]
}

export default useImageSizes