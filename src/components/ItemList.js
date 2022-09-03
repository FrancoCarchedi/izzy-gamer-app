import MuiGrid from '@mui/material/Grid';
import { Item } from './Item';

export const ItemList = ( {items = []} ) => {
  return (
    <MuiGrid container spacing={3}>
      {items.map( i => 
        <MuiGrid item xs={4} key={i.id}>
          <Item key={i.id} name={i.name} price={i.price} image={i.URLImg}/>
        </MuiGrid>
      )}
    </MuiGrid>
  )
}