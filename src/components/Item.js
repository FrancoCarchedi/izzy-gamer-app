import * as React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiTypography from '@mui/material/Typography';
import MuiCardActionArea from '@mui/material/CardActionArea';
import formatNumber from '../utilities/formatNumber';
import { Link } from 'react-router-dom';

export const Item = ({id, name, price, image}) => {

  return (
    <Link to={`/item/${id}`}>
    <MuiCard>
      <MuiCardActionArea>
        <MuiCardMedia
          component="img"
          image={image}
          height={200}
          sx={{objectFit: "contain"}}
          alt={name}
        />
        <MuiCardContent sx={{height: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <MuiTypography gutterBottom component="div" sx={{fontWeight: 500}}>
            {name}
          </MuiTypography>
          <MuiTypography variant="body1" color="secondary" sx={{fontWeight: 500}}>
            {formatNumber(price)}
          </MuiTypography>
        </MuiCardContent>
      </MuiCardActionArea>
    </MuiCard>
    </Link>
  )
}