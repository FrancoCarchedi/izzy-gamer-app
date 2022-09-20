import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Layout } from './Layout';
import { ItemCount } from './ItemCount';




const Cart = () => {
  return (
    <Layout>
      <Typography variant='h4'>Carrito de compras</Typography>
        <Card sx={{ display: 'flex'}}>
          <CardMedia component="img"
          image={"https://images.samsung.com/is/image/samsung/p6pim/ar/lc24rg50fzlczb/gallery/ar-c24rg5-433672-lc24rg50fzlczb-533475219?$1300_1038_PNG$"}
          sx={{ width: 200}}
          alt={'name'}
          > 
          </CardMedia>
          <CardContent sx={{display: 'flex'}}>
            <Typography>Monitor Samsung</Typography>
            <ItemCount></ItemCount>
          </CardContent>
        </Card>    
    </Layout>
  )
}

export default Cart