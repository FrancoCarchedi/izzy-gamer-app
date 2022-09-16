import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from "@mui/material/IconButton";
import MuiBadge from '@mui/material/Badge';
import MuiShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

  const item = useContext( CartContext );
  
  return (
      <MuiTooltip title="Carrito">
        <MuiIconButton sx={{ p: 0 }}>
          <MuiBadge badgeContent={item.cart.length} color="secondary">
            <MuiShoppingCartIcon sx={{
              color: 'primary.contrastText'
            }}/>
          </MuiBadge>
        </MuiIconButton>
      </MuiTooltip>
  )
}