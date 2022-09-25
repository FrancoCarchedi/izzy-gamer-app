import { doc, getDoc, getFirestore } from 'firebase/firestore';

export const getItem = (productId) => {

    const db = getFirestore();
    
    const item = getDoc(doc(db, "products", `${productId}`))
    return item
}