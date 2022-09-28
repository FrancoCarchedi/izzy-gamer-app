import { useState } from 'react';
import { Layout } from './Layout';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MuiBox from '@mui/material/Box';
import MuiContainer from '@mui/material/Container';
import MuiGrid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiCardContent from '@mui/material/CardContent';
import MuiTextField from '@mui/material/TextField';
import MuiButton from '@mui/material/Button';
import MuiArrowBackIcon from '@mui/icons-material/ArrowBack';
import formatNumber from '../utilities/formatNumber';
// import sendOrder from '../utilities/sendOrder';


const Order = () => {

  const itemsAdded = useCart();
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const [order, setOrder] = useState({
    buyer: {name: "", phone: "", email: ""},
    items: [{name: "", quantity: 0, price: 0}],
    total: 0
  })

  console.log(order)

  return (
    <Layout>
      <MuiContainer>
        <Link to={`/cart`}>
          <MuiButton color="secondary" startIcon={<MuiArrowBackIcon />} sx={{marginY: 1}}>
            <MuiTypography variant='body1'>Volver al carro</MuiTypography>
          </MuiButton>
        </Link>
        <MuiGrid container spacing={2}>
          <MuiGrid item xs={6}>
            <MuiBox
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1 },
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center'
            }}
            noValidate
            autoComplete="off"
            >
            <MuiTypography variant='h6' sx={{marginY: 2}} fontWeight={700}>Información del cliente</MuiTypography>
            <MuiTextField
                required
                id="outlined-required"
                label="Nombre"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
            />
            <MuiTextField
                required
                id="outlined-required"
                type="number"
                autoComplete="off"
                label="Teléfono"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
            />
            <MuiTextField
                required
                id="outlined-required"
                type="email"
                label="Correo electrónico"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
            />
            </MuiBox>
          </MuiGrid>
          <MuiGrid item xs={6}>
            <MuiTypography variant="h6" fontWeight={700} sx={{marginY: 2}}>Resumen del pedido</MuiTypography>
            <MuiBox sx={{display: "flex", flexDirection: "column"}}>
              {itemsAdded.cart.map(i => 
                <MuiCard key={i.item.id} sx={{display: "flex", padding: 2, marginBottom: 2, backgroundColor: "transparent"}}>
                  <MuiCardMedia 
                  component="img"
                  image={i.item.URLImg}
                  width={100}
                  sx={{ width: 100, height: 80, objectFit: 'contain'}}
                  alt={i.item.name}
                  />
                  <MuiCardContent sx={{padding: 0}}>
                    <MuiTypography color="secondary">{i.item.name}</MuiTypography>
                    <MuiTypography>{formatNumber(i.item.price)}</MuiTypography>
                    <MuiTypography>Cantidad: {i.quantity}</MuiTypography>
                  </MuiCardContent>
                </MuiCard>
              )}
              <MuiButton variant='contained' color='primary' sx={{
                width: 'adjust', 
                alignSelf: 'end'
                }}
                onClick={() => {setOrder({
                  buyer: {name: nameValue, phone: phoneValue, email: emailValue},
                  items: itemsAdded.cart.map(i => ({name: i.item.name, quantity: i.quantity, price: i.item.price})),
                  total: itemsAdded.totalPrice()
                })}}
                >
                Cargar orden de compra
              </MuiButton>
            </MuiBox>
          </MuiGrid>
        </MuiGrid>
      </MuiContainer>
    </Layout>
  )
}

export default Order