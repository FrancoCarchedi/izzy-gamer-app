import { doc, getDoc, getFirestore } from 'firebase/firestore';

//Esta función obtiene un producto a través de su ID
export const getItem = (productId) => {

    const db = getFirestore();
    
    const item = getDoc(doc(db, "products", `${productId}`))
    return item
}