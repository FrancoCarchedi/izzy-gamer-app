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
    getItems(id)
    .then(res =>
      setItem({data: res.docs.map( product => ({data: {id: product.id, ...product.data()}}) ), loading: false}))
    .catch( err => {
      console.log(err)
    })
  }, [id])

  return (
    
    <ItemList items={items.data.map(p => p.data)} loading={items.loading}/>
  )
}