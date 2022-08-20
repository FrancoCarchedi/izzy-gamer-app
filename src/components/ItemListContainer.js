import MuiGrid from '@mui/material/Grid';
import { HardwareCategories } from "./HardwareCategories"

export const ItemListContainer = ( {greeting} ) => {
  
  return (
    <MuiGrid container spacing={2} sx={{ padding: 2 }}>
      <MuiGrid item xs={4}>
        <HardwareCategories/>
      </MuiGrid>  
      <MuiGrid item xs={8}>
        <h1>{greeting} Aquí vendrá el listado de productos</h1>
      </MuiGrid>
    </MuiGrid>
  )
}