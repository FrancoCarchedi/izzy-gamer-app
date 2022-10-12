import { doc, updateDoc, getDoc, getFirestore } from 'firebase/firestore';

//Esta función recibe los productos de la orden, y actualizará el stock
const updateItem = (orderItems) => {

  const db = getFirestore();

  orderItems.forEach(i => {
    const productRef = doc(db, "products", `${i.id}`);
    getDoc(productRef).then(o => updateDoc(productRef, {stock: o.data().stock - i.quantity}))
  });

}

export default updateItem