import { useState, useEffect } from 'react';
import Layout from './Layout';
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
import MuiCollapse from '@mui/material/Collapse';
import MuiAlert from '@mui/material/Alert';
import MuiIconButton from '@mui/material/IconButton';
import MuiCloseIcon from '@mui/icons-material/Close';
import formatNumber from '../utilities/formatNumber';
import sendOrder from '../utilities/sendOrder';
import updateItem from '../utilities/updateItem';

const Order = () => {

  const itemsAdded = useCart();

  const [order, setOrder] = useState({
    buyer: {name: "", phone: "", email: ""},
    items: [{id: 0, name: "", quantity: 0, price: 0}],
    total: 0
  })

  const [open, setOpen] = useState({
    isOpen: false,
    idOrder: 0
  });

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const { name, phone, email } = form

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [ name ]: value
    })
  }

  useEffect( () => {
    setOrder({
      buyer: {name: name, phone: phone, email: email},
      items: itemsAdded.cart.map(i => ({id: i.item.id, name: i.item.name, quantity: i.quantity, price: i.item.price})),
      total: itemsAdded.totalPrice()
      });
  }, [form, name, phone, email, itemsAdded])

  return (
    <Layout>
      <MuiContainer sx={{marginY: 2}}>
        <Link to={`/cart`}>
          <MuiButton color="secondary" startIcon={<MuiArrowBackIcon />}>
            <MuiTypography variant='body1'>Volver al carro</MuiTypography>
          </MuiButton>
        </Link>
        <MuiCollapse in={open.isOpen}>
          <MuiAlert 
          action={
            <MuiIconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen({isOpen: false});
              }}
            >
              <MuiCloseIcon fontSize="inherit" />
            </MuiIconButton>
          }
          severity="success"
          >
            Orden de compra: <MuiTypography component={"span"} fontWeight={700}>{open.idOrder}</MuiTypography> — ¡Muchas gracias!
          </MuiAlert>
        </MuiCollapse>
        <MuiGrid container spacing={2} sx={{justifyContent: "end"}}>
          <MuiGrid item xs={12} sm={12} md={6} display={!itemsAdded.cart.length? "none" : "block"}>
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
            <MuiTypography variant='h6' sx={{marginY: 2, textAlign: {xs: "center", sm: "start"}}} fontWeight={700}>Información del cliente</MuiTypography>
            <MuiTextField
                required
                id="outlined-required"
                autoComplete="off"
                label="Nombre"
                name="name"
                value={ name }
                onChange={ onInputChange }
            />
            <MuiTextField
                required
                id="outlined-required"
                type="number"
                autoComplete="off"
                label="Teléfono"
                name="phone"
                value={ phone }
                onChange={ onInputChange }
            />
            <MuiTextField
                required
                id="outlined-required"
                type="email"
                label="Correo electrónico"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            </MuiBox>
          </MuiGrid>
          <MuiGrid item xs={12} sm={12} md={6} display={!itemsAdded.cart.length? "none" : "block"}>
            <MuiTypography variant="h6" fontWeight={700} sx={{marginY: 2, textAlign: {xs: "center", sm: "start"}}}>Resumen del pedido</MuiTypography>
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
              <MuiTypography sx={{textAlign: "end"}}>
                Precio total <MuiTypography color="secondary" component={"p"}>{formatNumber(itemsAdded.totalPrice())}</MuiTypography>
              </MuiTypography>
            </MuiBox>
          </MuiGrid>
          <MuiButton variant="contained" color="primary" sx={{
                marginTop: 2,
                display: !itemsAdded.cart.length? "none" : "flex",
                width: "adjust", 
                }}
                onClick={ () => {
                  if (name === "" || phone === "" || email === "") {
                    alert("Por favor, completar con tus datos")
                  } 
                  else {
                    //Envia la orden
                    //Actualiza el stock de cada producto
                    //Muestra al usuario el ID de su orden
                    //Vacia el carrito 
                    sendOrder(order).then( ({ id }) => {
                      updateItem(order.items);
                      setOpen({ isOpen: true, idOrder: id }); 
                      itemsAdded.clear();
                    })} 
                  }}
                >
                Cargar orden de compra
              </MuiButton>
        </MuiGrid>
      </MuiContainer>
    </Layout>
  )
}

export default Order