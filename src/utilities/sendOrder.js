import { addDoc, collection, getFirestore } from "firebase/firestore";

//Esta función se encargará de crear la colección orders si es que no existe, y luego cargará la orden
const sendOrder = (order) => {
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  return addDoc(ordersCollection, order)

}

export default sendOrder