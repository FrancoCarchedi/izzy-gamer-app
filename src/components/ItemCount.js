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

const ItemCount = ({stock, initial=1, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  
  const handleCounterRemove = () => {
    counter > 1 ? setCounter(counter -1) : setCounter(counter)
  }

  const handleCounterAdd = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter)
  }
    
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
        <MuiButton variant='contained' fullWidth onClick={() => onAdd(counter)}>Agregar al carrito</MuiButton>
      </MuiCardActions>
    </MuiCard>
    
  )
}

export default ItemCount;