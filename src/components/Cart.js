import { useCart } from '../context/CartContext'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Layout } from './Layout';
import { ItemCount } from './ItemCount';

const Cart = () => {

  const itemsAdded = useCart();
  console.log(itemsAdded.cart)

  return (
    <Layout>
      <Typography variant='h4'>Carrito de compras</Typography>
        {itemsAdded.cart.map( i =>
        <Card sx={{ display: 'flex', alignItems: 'center', marginY: 1}} key={i.item.id}>
          <CardMedia component="img"
          image={i.item.URLImg}
          sx={{ width: 200}}
          alt={'name'}
          > 
          </CardMedia>
          <CardContent sx={{display: 'flex'}}>
            <Typography variant='h6'>Monitor Samsung</Typography>
            {/* <ItemCount></ItemCount> */}
          <ItemCount></ItemCount>
          </CardContent>
        </Card> 
        )}
           
    </Layout>
  )
}

export default Cart