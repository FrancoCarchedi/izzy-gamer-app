import MuiBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
      <Card sx={{ display: "flex", alignItems: "center", marginY: 1}} key={i.item.id}>
        <CardMedia component="img"
        image={i.item.URLImg}
        width={200}
        sx={{ width: 200, height: 180, objectFit: "contain"}}
        alt={"name"}
        > 
        </CardMedia>
        <CardContent sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
          <Typography variant="body1">{i.item.name}</Typography>
          <MuiBox sx={{display: "flex", flexDirection: "column"}}>
            <MuiBox sx={{display: "flex", padding: 2}}>
              <MuiIconButton onClick={() =>  i.quantity > 1? item.removeItemQuantity(i.item, 1) : item.removeItem(i.item.id)}>
                <MuiRemoveIcon color="secondary">Quitar</MuiRemoveIcon>
              </MuiIconButton>
              <Typography variant="h6" sx={{marginX: 2}}>{i.quantity}</Typography>
              <MuiIconButton color="secondary" onClick={() => item.addItem(i.item, 1)} disabled={i.quantity >= i.item.stock}>
                <MuiAddIcon/>
              </MuiIconButton>
            </MuiBox>
            <Typography variant="body1" color="secondary" sx={{textAlign: "center"}}>{formatNumber(i.item.price * i.quantity)}</Typography>
          </MuiBox>
          
        </CardContent>
        <MuiTooltip title="Eliminar producto">
          <MuiIconButton aria-label="delete" sx={{alignSelf: "start"}} onClick={() => item.removeItem(i.item.id)} >
            <MuiDeleteIcon/>
          </MuiIconButton>
        </MuiTooltip>
      </Card>
    )}
    </>
  )
}

export default ItemsCart