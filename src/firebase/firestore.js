import { collection, doc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore"
import { db } from './firebase_config';


export const getDbFile = async (collectionName, fileName) => {
    const docRef = doc(db, collectionName, fileName)
    let targetDoc = {};
    try {
        targetDoc = await getDoc(docRef)
    } catch (error) {
        console.error('Could not GET file from db', error)
    }
    return {data: targetDoc.data()}
}

export const setDbFile = async (collectionName, fileName, newDoc) => {
    const docRef = doc(db, collectionName, fileName);
    try {
        await setDoc(docRef, newDoc)
        return true
    } catch (error) {
        console.error('Something went wrong with db file update', error)
        return false
    }
}

export const getCollectionItems = async (collectionName = 'gallery_images') => {
    let querySnaphot;
    try {       
        querySnaphot = await getDocs(collection(db, collectionName))
    } catch (error) {
        console.error(`could not get the ${collectionName} , something wrong with db`, error)
    }
    return querySnaphot || []
}

export const deleteDbFile = async (collectionName, fileName) => {
    try {
        await deleteDoc(doc(db, collectionName, fileName))
        return true
    } catch (error) {
        console.error('Could not delete file, check db', error)
        return false
    }
}