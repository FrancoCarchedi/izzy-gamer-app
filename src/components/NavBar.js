import React from "react";
import MuiBox from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import MuiContainer from '@mui/material/Container';
import MuiToolbar from '@mui/material/Toolbar';
import MuiTypography from '@mui/material/Typography';
import MuiLink from "@mui/material/Link";
import { CartWidget } from "./CartWidget";
import Brand from "../../src/assets/imgs/brand/brand.svg";

const pages = ['Hardware', 'Periféricos', 'Monitores'];

export const NavBar = () => {
  
  return (
    <MuiBox sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <MuiContainer maxWidth="xl">
          <MuiToolbar disableGutters>
            <img src={Brand} alt="brand"></img>
            {/* <MuiTypography>
              IzzyGamer
            </MuiTypography> */}

            <MuiBox sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {pages.map( (page) => (
              <MuiLink
                href="#"
                underline="none"
                variant="h6"
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', mx: 2 }}
              >
                <MuiTypography>{page}</MuiTypography>
              </MuiLink>
              ))}
            </MuiBox>

            <MuiBox sx={{ flexGrow: 0 }}>
              <CartWidget/>
            </MuiBox>
          </MuiToolbar>
        </MuiContainer>
      </MuiAppBar>
    </MuiBox>
  ) 
}