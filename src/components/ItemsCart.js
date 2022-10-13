import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiTooltip from "@mui/material/Tooltip";
import MuiIconButton from "@mui/material/IconButton";
import MuiRemoveIcon from "@mui/icons-material/Remove";
import MuiAddIcon from "@mui/icons-material/Add";
import MuiDeleteIcon from "@mui/icons-material/Delete";
import formatNumber from "../utilities/formatNumber";

const ItemsCart = ({item}) => {

  return (
    <>
    {item.cart.map( i =>
      <MuiCard sx={{ display: "flex", alignItems: "center", marginY: 1}} key={i.item.id}>
        <MuiCardMedia component="img"
        image={i.item.URLImg}
        width={200}
        sx={{ width: 200, height: 180, objectFit: "contain"}}
        alt={"name"}
        > 
        </MuiCardMedia>
        <MuiCardContent sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
          <MuiTypography variant="body1">{i.item.name}</MuiTypography>
          <MuiBox sx={{display: "flex", flexDirection: "column"}}>
            <MuiTypography variant="body2" sx={{textAlign: "center"}}>{i.item.stock} disponibles</MuiTypography>
            <MuiBox sx={{display: "flex", padding: 2}}>
              <MuiIconButton onClick={() =>  i.quantity > 1? item.removeItemQuantity(i.item, 1) : item.removeItem(i.item.id)}>
                <MuiRemoveIcon color="secondary">Quitar</MuiRemoveIcon>
              </MuiIconButton>
              <MuiTypography variant="h6" sx={{marginX: 2}}>{i.quantity}</MuiTypography>
              <MuiIconButton color="secondary" onClick={() => item.addItem(i.item, 1)} disabled={i.quantity >= i.item.stock}>
                <MuiAddIcon/>
              </MuiIconButton>
            </MuiBox>
            <MuiTypography variant="body1" color="secondary" sx={{textAlign: "center"}}>{formatNumber(i.item.price * i.quantity)}</MuiTypography>
          </MuiBox>
        </MuiCardContent>
        <MuiTooltip title="Eliminar producto">
          <MuiIconButton aria-label="delete" sx={{alignSelf: "start"}} onClick={() => item.removeItem(i.item.id)} >
            <MuiDeleteIcon/>
          </MuiIconButton>
        </MuiTooltip>
      </MuiCard>
    )}
    </>
  )
}

export default ItemsCart