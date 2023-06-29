import { deleteObject, getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage"
import { storage } from "./firebase_config"

export const uploadImageToStorage = async ({id, imageFile}) => {
    const imageRef = ref(storage, `images/${id}`)
    try {
        const res = await uploadBytes(imageRef, imageFile)
        if (res.status === 200) return true
        return false
    } catch (error) {
        console.error('Could not upload Image to Storage, check Storage', error)
        return false
    }
}

export const deleteImageInStorage = async ({id}) => {
    const imageRef = ref(storage, `images/${id}`)
    
    try {
        await deleteObject(imageRef)
    } catch (error) {
        console.error('Could not delete Image from Storage, check Storage', error)
    }
}


export const getImageList = async (setImages) => {
    let images;
    try {
        images = await listAll(ref(storage, "images/"))
        images.items.forEach(async (item) => {
            try {
                const url = await getDownloadURL(item)
                setImages((prev) => [{src: url}, ...prev])
            } catch (error) {
                console.error('Cannot get Image from Storage, check Storage', error)
            }
        })
    } catch (error) {
        console.error('Cannot GET Images from Storage, check Storage', error)
    } 
}