import React, { useState } from 'react';
import MuiBox from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import MuiCardHeader from '@mui/material/CardHeader';
import MuiCardActions from '@mui/material/CardActions';
import MuiTypography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiRemoveIcon from '@mui/icons-material/Remove';
import MuiAddIcon from '@mui/icons-material/Add';
import MuiButton from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ItemCount = ({stock, initial=1, onAdd="Aun no está implementado el carro xD"}) => {

  const [counter, setCounter] = useState(initial)
  
  const handleCounterRemove = () => {
    counter > 1 ? setCounter(counter -1) : setCounter(counter)
  }

  const handleCounterAdd = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter)
  }

  const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  

    
  return (
    <MuiCard sx={{maxWidth: 200}} elevation={0}>
      <MuiCardHeader
       title={<MuiTypography variant='body1'>Stock disponible: {stock}</MuiTypography>}
       sx={{ textAlign: 'start', padding: 0}}
      >
      </MuiCardHeader>
      <MuiCardActions sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
        <MuiBox 
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginY: 1
            }}
        >
          <MuiIconButton color='secondary' onClick={handleCounterRemove} disabled={counter === 1}>
            <MuiRemoveIcon/>
          </MuiIconButton>
          <MuiTypography>
            {counter}
          </MuiTypography>
          <MuiIconButton color='secondary' onClick={handleCounterAdd} disabled={counter === stock}>
            <MuiAddIcon/>
          </MuiIconButton>
        </MuiBox>
        <MuiButton variant='contained' fullWidth onClick={handleClickOpen}>Agregar al carrito</MuiButton>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"¡Nosotros también queremos que compres!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            El carrito no está implementado aún, por lo que te pedimos disculpas.
            Muy pronto podrás comprar este y otros productos más.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleClose} autoFocus>
            <MuiTypography color='secondary'>De acuerdo</MuiTypography>
          </MuiButton>
        </DialogActions>
        </Dialog>
      </MuiCardActions>
    </MuiCard>
    
  )
}

export default ItemCount;