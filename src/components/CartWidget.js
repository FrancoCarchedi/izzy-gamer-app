import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from "@mui/material/IconButton";
import MuiBadge from '@mui/material/Badge';
import MuiShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

const CartWidget = () => {

  const item = useCart();
  
  return (
      <MuiTooltip title="Carrito">
        <MuiIconButton sx={{ p: 0 }}>
          <MuiBadge badgeContent={item.itemsInCart()} color="secondary">
            <MuiShoppingCartIcon sx={{
              color: 'primary.contrastText'
            }}/>
          </MuiBadge>
        </MuiIconButton>
      </MuiTooltip>
      
  )
}

export default CartWidget