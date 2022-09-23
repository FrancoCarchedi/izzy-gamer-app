import useCounter from '../hooks/useCounter';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiRemoveIcon from '@mui/icons-material/Remove';
import MuiAddIcon from '@mui/icons-material/Add';

export const ItemCount = ({stock, onAdd}) => {
  //uso del custom Hook
  const {counter, increment, decrement} = useCounter();
    
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
        <MuiIconButton color='secondary' onClick={() => {decrement(); onAdd(counter-1)}} disabled={counter<=1}>
          <MuiRemoveIcon/>
        </MuiIconButton>
        <MuiTypography>
          {counter}
        </MuiTypography>
        <MuiIconButton color='secondary' onClick={() => {increment(); onAdd(counter+1)}} disabled={counter === stock}>
          <MuiAddIcon/>
        </MuiIconButton>
      </MuiBox>
    </MuiBox>
  )
}
