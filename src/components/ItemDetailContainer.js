import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getItem } from '../utilities/getItem.js';

const ItemDetailContainer = () => {

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
    stock={item.data.stock} 
    loading={item.loading}
    />
  )
}

export default ItemDetailContainer