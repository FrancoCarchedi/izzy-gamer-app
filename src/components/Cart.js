import { useCart } from '../context/CartContext'
import { Layout } from './Layout';
import Typography from '@mui/material/Typography';
import ItemsCart from './ItemsCart';

const Cart = () => {

  const itemsAdded = useCart();

  return (
    <Layout>
      <Typography variant='h4'>Carrito de compras</Typography>
      <ItemsCart item={itemsAdded}></ItemsCart>
    </Layout>
  )
}

export default Cart