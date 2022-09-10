import MuiGrid from '@mui/material/Grid';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { Item } from './Item';
import { Layout } from './Layout';
import { ProductsCategories } from './ProductsCategories';

export const ItemList = ( {items = [], loading} ) => {
  return (
    <Layout>
      {loading?
      <MuiGrid container pacing={1} sx={{ padding: 2, marginTop: 2, flexDirection: 'row', justifyContent: 'center'}}>
        <MuiCircularProgress color='secondary'/>
      </MuiGrid>
      :
      <MuiGrid container spacing={2} sx={{ padding: 2 }}>
        <MuiGrid item xs={3}>
          <ProductsCategories/>
        </MuiGrid>
        <MuiGrid item xs={9}>
          <MuiGrid container spacing={3}>
            {items.map( i => 
              <MuiGrid item xs={4} key={i.id}>
                <Item id={i.id} name={i.name} price={i.price} image={i.URLImg}/>
              </MuiGrid>
            )}
          </MuiGrid>
        </MuiGrid>
      </MuiGrid>
      }
    </Layout>
  )
}
