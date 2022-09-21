import useCounter from '../hooks/useCounter';
import { useCart } from '../context/CartContext'
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiRemoveIcon from '@mui/icons-material/Remove';
import MuiAddIcon from '@mui/icons-material/Add';
import MuiButton from '@mui/material/Button';

export const ItemCount = ({stock, itemsInCart=0, onAdd}) => {

  const item = useCart();
  //uso del custom Hook
  const {counter, increment, decrement} = useCounter();
  console.log(item.cart)
  console.log(itemsInCart!==0&& itemsInCart.item.id)
  console.log(counter)
    
  return (
    <MuiBox>
      <MuiBox 
        sx={{
          width: 140,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          }}
      >
        <MuiIconButton color='secondary' onClick={() => decrement()} disabled={itemsInCart===0? counter<=1 : itemsInCart.quantity<=1}>
          <MuiRemoveIcon/>
        </MuiIconButton>
        <MuiTypography>
          {itemsInCart===0? counter : itemsInCart.quantity}
        </MuiTypography>
        <MuiIconButton color='secondary' onClick={() => increment(itemsInCart=== 0? 1 : item.addItem(itemsInCart.item, 1))} disabled={counter === stock}>
          <MuiAddIcon/>
        </MuiIconButton>
      </MuiBox>
      {onAdd &&
      <MuiButton variant='contained' onClick={() => onAdd(counter)}>Agregar al carrito</MuiButton>
      }
    </MuiBox>
    
  )
}
