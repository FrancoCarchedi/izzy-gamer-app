import MuiContainer from '@mui/material/Container';
import MuiGrid from '@mui/material/Grid';
import { ItemCount } from './ItemCount';
import { ProductsCategories } from "./ProductsCategories"

export const ItemListContainer = ( {greeting} ) => {

  return (
    <MuiContainer maxWidth="xl">
      <MuiGrid container spacing={2} sx={{ padding: 2 }}>
        <MuiGrid item xs={3}>
          <ProductsCategories/>
        </MuiGrid>  
        <MuiGrid item xs={9}>
          <h1>{greeting} Aquí vendrá el listado de productos</h1>
          {/* Temporalmente se monta el componente ItemCount, luego se quitará y se incluirá dentro del detalle del item */}
          <ItemCount stock={5} initial={1}></ItemCount>
        </MuiGrid>
      </MuiGrid>
    </MuiContainer>
  )
}