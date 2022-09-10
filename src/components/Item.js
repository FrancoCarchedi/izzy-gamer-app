import * as React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiTypography from '@mui/material/Typography';
import MuiCardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';

export const Item = ({id, name, price, image}) => {

  return (
    <Link to={`/item/${id}`}>
    <MuiCard sx={{ maxWidth: 300 }}>
      <MuiCardActionArea>
        <MuiCardMedia
          component="img"
          image={image}
          width={300}
          height={200}
          alt={name}
        />
        <MuiCardContent sx={{height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <MuiTypography gutterBottom component="div" sx={{fontWeight: 500}}>
            {name}
          </MuiTypography>
          <MuiTypography variant="body1" color="secondary" sx={{fontWeight: 500}}>
            {price}
          </MuiTypography>
        </MuiCardContent>
      </MuiCardActionArea>
    </MuiCard>
    </Link>
  )
}