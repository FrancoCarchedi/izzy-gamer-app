import MuiGrid from '@mui/material/Grid';
import MuiCircularProgress from '@mui/material/CircularProgress';
import { Item } from './Item';
import Layout from './Layout';

export const ItemList = ( {items = [], loading} ) => {
  return (
    <Layout>
      {loading?
      <MuiGrid container sx={{ padding: 2, marginTop: 2, flexDirection: "row", justifyContent: "center"}}>
        <MuiCircularProgress color="secondary"/>
      </MuiGrid>
      :
      <MuiGrid container columnSpacing={3} rowSpacing={3} sx={{ padding: 2, justifyContent: "center" }}>
        {items.map( i => 
          <MuiGrid item xs={12} sm={6} md={4} lg={3} xl={3} key={i.id}>
            <Item id={i.id} name={i.name} price={i.price} image={i.URLImg}/>
          </MuiGrid>
        )}
      </MuiGrid>
      }
    </Layout>
  )
}
