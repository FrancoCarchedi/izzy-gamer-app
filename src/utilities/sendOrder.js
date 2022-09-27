import { addDoc, collection, getFirestore } from "firebase/firestore";

const sendOrder = (order) => {
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  return addDoc(ordersCollection, order)

}

export default sendOrder