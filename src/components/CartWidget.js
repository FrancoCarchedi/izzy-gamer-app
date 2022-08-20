import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from "@mui/material/IconButton";
import MuiBadge from '@mui/material/Badge';
import MuiShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  return (
      <MuiTooltip title="Carrito">
        <MuiIconButton sx={{ p: 0 }}>
          <MuiBadge badgeContent={1} color="secondary">
            <MuiShoppingCartIcon sx={{
              color: 'primary.contrastText'
            }}/>
          </MuiBadge>
        </MuiIconButton>
      </MuiTooltip>
  )
}