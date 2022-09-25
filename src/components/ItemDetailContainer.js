import { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
import { getItem } from '../utilities/getItem.js'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

  const [item, setItem] = useState({
    data: {},
    loading: true
  })

  const {id} = useParams()

  useEffect(() => {
    getItem(id)
    .then(res => setItem({data: {id: res.id, ...res.data()}, loading: false}))
    .catch( (err) => {console.log(err)} )
  }, [id])

  return (
    <ItemDetail 
    id={item.data.id}
    name={item.data.name} 
    description={item.data.description} 
    price={item.data.price} 
    URLImg={item.data.URLImg} 
    loading={item.loading}
    />
  )
}
