import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import MuiBox from '@mui/material/Box'
import MuiGrid from '@mui/material/Grid'
import MuiTypography from '@mui/material/Typography'
import MuiCircularProgress from '@mui/material/CircularProgress'
import MuiButton from '@mui/material/Button'
import { ItemCount } from './ItemCount'
import { Layout } from "./Layout"

export const ItemDetail = ({id, name, description, price, URLImg, loading}) => {

  const item = useCart();
  const [quantity, setQuantity] = useState(1)

  const onAdd = (quantityToAdd) => {
    if (quantityToAdd === 0) {
      setQuantity(1)
    }
    else (
      setQuantity(quantityToAdd)
    )
  }

  return (
    <Layout>
      {loading?
      <MuiGrid container pacing={1} sx={{ padding: 2, marginTop: 2, flexDirection: 'row', justifyContent: 'center'}}>
        <MuiCircularProgress color='secondary'/>
      </MuiGrid>
      :
      <MuiGrid container spacing={2} sx={{ padding: 2, flexDirection: 'row', justifyContent: 'center'}}>
        <MuiGrid item xs={6} sx={{textAlign: 'center'}}>
          <MuiBox component="img"
            sx={{
            width: 500
            }}
            alt={name}
            src={URLImg}/>
        </MuiGrid>
        <MuiGrid item xs={6}>
          <MuiTypography sx={{marginY: 2}} variant={'h6'} fontWeight={700}>{name}</MuiTypography>
          <MuiTypography sx={{marginY: 2}} variant={'body'}>{description}</MuiTypography>
          <MuiTypography sx={{marginY: 2}} variant={'h6'} color={'secondary.main'} fontWeight={500}>{price}</MuiTypography>
          <ItemCount stock={876} onAdd={onAdd}/>
          <Link to={`/cart`}>
            <MuiButton variant='contained' onClick={() => item.addItem({id, name, URLImg, price}, quantity)}>Agregar al carro</MuiButton>
          </Link>
        </MuiGrid>
      </MuiGrid>
      }
    </Layout>
  )
}
