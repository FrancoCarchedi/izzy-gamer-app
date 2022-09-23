
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MuiButton from '@mui/material/Button'

const ItemsCart = ({item}) => {

  return (
    <>
    {item.cart.map( i =>
      <Card sx={{ display: 'flex', alignItems: 'center', marginY: 1}} key={i.item.id}>
        <CardMedia component="img"
        image={i.item.URLImg}
        sx={{ width: 200}}
        alt={'name'}
        > 
        </CardMedia>
        <CardContent sx={{display: 'flex'}}>
          <Typography variant='h6'>{i.item.name}</Typography>
          <MuiButton onClick={() =>  i.quantity > 1? item.removeItemQuantity(i.item, 1) : item.removeItem(i.item.id)}>Quitar</MuiButton>
          <Typography variant='h6' sx={{marginX: 2}}>{i.quantity}</Typography>
          <MuiButton onClick={() => item.addItem(i.item, 1)}>Agregar</MuiButton>
        </CardContent>
      </Card>
    )}
    </>
  )
}

export default ItemsCart