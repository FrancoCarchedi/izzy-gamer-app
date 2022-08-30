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

export const ItemCount = ({stock, initial}) => {

  const [counter, setCounter] = useState(initial)
  
  const handleCounterRemove = () => {
    counter > 0 ? setCounter(counter -1) : setCounter(counter)
  }

  const handleCounterAdd = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter)
  }

  return (
    <MuiCard sx={{maxWidth: 320}}>
      <MuiCardHeader
       title={<MuiTypography>AMD Ryzen 5 5600</MuiTypography>}
       subheader={<MuiTypography>Stock disponible: {stock}</MuiTypography>}
       sx={{ textAlign: 'center' }}
      >
      </MuiCardHeader>
      <MuiCardActions sx={{ display: 'flex', flexDirection: 'column' }}>
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
          <MuiIconButton color='secondary' onClick={() => handleCounterRemove()}>
            <MuiRemoveIcon/>
          </MuiIconButton>
          <MuiTypography>
            {counter}
          </MuiTypography>
          <MuiIconButton color='secondary' onClick={() => handleCounterAdd()}>
            <MuiAddIcon/>
          </MuiIconButton>
        </MuiBox>
        <MuiButton variant='contained' fullWidth>Agregar al carrito</MuiButton>
      </MuiCardActions>
    </MuiCard>
  )
}