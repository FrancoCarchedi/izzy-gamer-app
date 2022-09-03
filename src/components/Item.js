import * as React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiTypography from '@mui/material/Typography';
import MuiCardActionArea from '@mui/material/CardActionArea';

export const Item = ({name, price, image}) => {
  return (
    <MuiCard sx={{ maxWidth: 320 }}>
      <MuiCardActionArea>
        <MuiCardMedia
          component="img"
          image={image}
          alt={name}
        />
        <MuiCardContent>
          <MuiTypography gutterBottom component="div" sx={{fontWeight: 500}}>
            {name}
          </MuiTypography>
          <MuiTypography variant="body1" color="secondary" sx={{fontWeight: 500}}>
            {price}
          </MuiTypography>
        </MuiCardContent>
      </MuiCardActionArea>
    </MuiCard>
  )
}