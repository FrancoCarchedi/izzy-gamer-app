import { useState } from 'react';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiRemoveIcon from '@mui/icons-material/Remove';
import MuiAddIcon from '@mui/icons-material/Add';
import MuiButton from '@mui/material/Button';

export const ItemCount = ({stock, initial=1, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  
  const handleCounterRemove = () => {
    counter > 1 ? setCounter(counter -1) : setCounter(counter)
  }

  const handleCounterAdd = () => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter)
  }
    
  return (
    <MuiBox>
      <MuiBox 
        sx={{
          width: 140,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
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
      {onAdd &&
      <MuiButton variant='contained' onClick={() => onAdd(counter)}>Agregar al carrito</MuiButton>
      }
    </MuiBox>
    
  )
}
