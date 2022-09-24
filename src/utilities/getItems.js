import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const getItems = (category="") => {

    const querydb = getFirestore();

    const items = collection(querydb, "products")
    const itemsFiltered = query(items, where("category", "==", category))
    
    if (category === "") {
      return getDocs(items)
    }
    else {
      return getDocs(itemsFiltered)
    }
}