import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import MuiBox from "@mui/material/Box";
import MuiGrid from "@mui/material/Grid";
import MuiTypography from "@mui/material/Typography";
import MuiCircularProgress from "@mui/material/CircularProgress";
import MuiButton from "@mui/material/Button";
import ItemCount from "./ItemCount";
import Layout from "./Layout"
import formatNumber from "../utilities/formatNumber";


export const ItemDetail = ({id, name, description, price, URLImg, stock, loading}) => {

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
      <MuiGrid container pacing={1} sx={{ padding: 2, marginTop: 2, flexDirection: "row", justifyContent: "center"}}>
        <MuiCircularProgress color="secondary"/>
      </MuiGrid>
      :
      <MuiGrid container spacing={2} sx={{ padding: 2, flexDirection: "row", justifyContent: "center"}}>
        <MuiGrid item xs={6} sx={{textAlign: "center"}}>
          <MuiBox component="img"
            sx={{
            width: 500
            }}
            alt={name}
            src={URLImg}/>
        </MuiGrid>
        <MuiGrid item xs={6}>
          <MuiTypography sx={{marginY: 2}} variant={"h6"} fontWeight={700}>{name}</MuiTypography>
          <MuiTypography sx={{marginY: 2}} variant={"body1"}>{description}</MuiTypography>
          <MuiTypography sx={{marginY: 2}} variant={"body1"}>Unidades disponibles: {stock}</MuiTypography>
          <MuiTypography sx={{marginY: 2}} variant={"h6"} color={"secondary.main"} fontWeight={500}>{formatNumber(price)}</MuiTypography>
          {!item.isInCart(id)?
          <MuiBox sx={{display: stock === 0? "none" : "block"}}>
          <ItemCount stock={stock} onAdd={onAdd}/>
          <MuiButton variant="contained" onClick={() => item.addItem({id, name, URLImg, stock, price}, quantity)}>Agregar al carro</MuiButton>
          </MuiBox>
          :
          <Link to={`/cart`}>
            <MuiButton variant="contained">Finalizar compra</MuiButton>
          </Link>
          }
        </MuiGrid>
      </MuiGrid>
      }
    </Layout>
  )
}
