import { useParams } from 'react-router-dom';
import MuiGrid from '@mui/material/Grid';
import { ItemListContainer } from '../components/ItemListContainer';
import { ProductsCategories } from '../components/ProductsCategories';
import { Layout } from '../components/Layout';

export const Products = () => {

  const { id } = useParams();

  return (
    <Layout>
      <MuiGrid container spacing={2} sx={{ padding: 2 }}>
        <MuiGrid item xs={3}>
          <ProductsCategories productsType={id}/>
        </MuiGrid>
        <MuiGrid item xs={9}>
          <ItemListContainer/>
        </MuiGrid>
      </MuiGrid>
    </Layout>
  )
}
