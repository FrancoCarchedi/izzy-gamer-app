import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import MuiTypography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";
import MuiContainer from "@mui/material/Container";
import MuiButton from "@mui/material/Button";
import Layout from "./Layout";
import ItemsCart from "./ItemsCart";
import formatNumber from "../utilities/formatNumber";

const Cart = () => {

  const itemsAdded = useCart();

  return (
    <Layout>
      <MuiContainer maxWidth="lg">
        <MuiTypography variant="h5" sx={{marginY: 3, textAlign: "start"}}>Carrito de compras</MuiTypography>
        {!itemsAdded.cart.length?
        <MuiBox sx={{textAlign: "center"}}>
          <MuiTypography variant="body1" sx={{marginY: 3, textAlign: "center"}}>No hay productos en el carrito</MuiTypography>
          <Link to={`/`}>
            <MuiButton variant="contained" color="secondary">Seguir comprando</MuiButton>
          </Link>
        </MuiBox>
        : 
        <MuiBox>
          <ItemsCart item={itemsAdded}></ItemsCart>
          <MuiTypography variant="h6" sx={{textAlign: "end", marginY: 3}}>Precio total: <MuiTypography variant="h6" component={"span"} fontWeight={700} color="secondary">{formatNumber(itemsAdded.totalPrice())}</MuiTypography></MuiTypography>
          <MuiBox sx={{textAlign: "end"}}>
            <MuiButton variant="contained" color="secondary" sx={{marginRight: 2, }} onClick={() => itemsAdded.clear()}>Vaciar carrito</MuiButton>
            <Link to={`/cart/checkout`}>
              <MuiButton variant="contained" color="primary">Finalizar compra</MuiButton>
            </Link>
          </MuiBox>
        </MuiBox>   
        }
      </MuiContainer>
    </Layout>
  )
}

export default Cart