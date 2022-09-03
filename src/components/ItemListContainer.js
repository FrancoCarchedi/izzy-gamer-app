import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import itemsJson from "../data.json";

export const ItemListContainer = () => {

  const [items, setItem] = useState([])

  //Función para obtener la data del archivo json, con promise
  const getItems = (data, time) => new Promise ((resolve, reject) => {
    setTimeout(() => {
      data? resolve(data) : reject("Error")
    }, time)
  })

  useEffect(() => {
    getItems(itemsJson, 2000)
    .then((res)=> {
      setItem(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
    <ItemList items={items}/>
  )
}