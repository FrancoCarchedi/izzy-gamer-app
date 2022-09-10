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
    getItem(parseInt(id), 2000)
    .then(item => setItem ({data: item, loading: false}))
    .catch( (err) => {console.log(err)} )
  }, [id])

  return (
    <ItemDetail 
    name={item.data.name} 
    description={item.data.description} 
    price={item.data.price} 
    URLImg={item.data.URLImg} 
    loading={item.loading}
    />
  )
}
