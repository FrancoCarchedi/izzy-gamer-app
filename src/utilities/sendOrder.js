import { addDoc, collection, getFirestore } from "firebase/firestore";

const sendOrder = () => {

  const order = {
    buyer: { },
    items: [{}],
    total: NaN
  }

  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  // addDoc(ordersCollection, order).then(({ id }) => console.log("nada")

}

export default sendOrder