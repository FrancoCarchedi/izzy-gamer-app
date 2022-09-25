import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Layout } from './Layout';
import MuiTypography from '@mui/material/Typography';
import MuiBox from '@mui/material/Box'
import MuiContainer from '@mui/material/Container';
import MuiButton from '@mui/material/Button'
import ItemsCart from './ItemsCart';
import formatNumber from '../utilities/formatNumber';

const Cart = () => {

  const itemsAdded = useCart();
  console.log(itemsAdded.cart)

  return (
    <Layout>
      <MuiContainer maxWidth="lg">
        <MuiTypography variant='h5' sx={{marginY: 3, textAlign: 'start'}}>Carrito de compras</MuiTypography>
        {!itemsAdded.cart.length?
        <MuiBox sx={{textAlign: 'center'}}>
          <MuiTypography variant='body1' sx={{marginY: 3, textAlign: 'center'}}>No hay productos en el carrito</MuiTypography>
          <Link to={`/`}>
            <MuiButton variant='contained' color='secondary'>Seguir comprando</MuiButton>
          </Link>
        </MuiBox>
        : 
        <>
          <ItemsCart item={itemsAdded}></ItemsCart>
          <MuiTypography variant="h6" sx={{textAlign: 'end', marginY: 3}}>Precio total: <MuiTypography variant="h6" component={"span"} fontWeight={700} color="secondary">{formatNumber(itemsAdded.totalPrice())}</MuiTypography></MuiTypography>
        </>   
        }
      </MuiContainer>
    </Layout>
  )
}

export default Cart