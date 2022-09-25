import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

export const getItems = (category="") => {

    const querydb = getFirestore();

    const items = collection(querydb, "products")
    const itemsByCategory = query(items, where("category", "==", category))
    // const itemsBySubcategory = query(items, where("category", "==", category), where("subcategory", "==", subcategory))
    
    if (category === "") {
      return getDocs(items)
    }
    else {
      return getDocs(itemsByCategory)
    }
}