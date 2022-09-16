import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { getItems } from '../utilities/getItems.js'
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [items, setItem] = useState({
    data: [],
    loading: true
  })

  const { id } = useParams()

  useEffect(() => { 
    getItems(id, 2000)
    .then((res)=> {
      setItem({data: res, loading: false})
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [id])

  return (
    <ItemList items={items.data} loading={items.loading}/>
  )
}