import { customAlphabet, nanoid } from "nanoid"
import { deleteDbFile, getDbFile, setDbFile } from "../../firebase/firestore";
// import { addToDb } from "../../firebase/firestore";

export const generateKey = () => {
    const keygen = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 4);
    const key = `${keygen()}-${keygen()}-${keygen()}`.toUpperCase();
    return key
}

export const generateCustomerKey = (setKey) => {
    setKey(generateKey())
}

export const uploadKeyToDb = async (customerKey) => {
    setDbFile('active keys', customerKey, {
        customerKey,
        dateCreated: new Date().toLocaleDateString()
    })
}

export const verifyKey = async (customerKey) => {
    try {
        const response = await getDbFile('active keys', customerKey)
        if (response.data.customerKey === customerKey) return true
        return false
    } catch (error) {
        console.error('No key in the db', error)
        return false
    }
}

export const createProcess = async (customerKey) => {
    const response = await setDbFile('current processes', customerKey, 
    {
        processId: customerKey,
        dateStarted: new Date().toLocaleDateString()
    })
    return response
}

export const deleteKeyFromDb = async (customerKey) => {
    const response = await deleteDbFile('active keys', customerKey)
    return response
} 