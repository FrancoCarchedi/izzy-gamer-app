import MuiBox from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import MuiContainer from '@mui/material/Container';
import MuiToolbar from '@mui/material/Toolbar';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from "./CartWidget";
import Brand from "../../src/assets/imgs/brand/brand.svg";

const links = [
  {
    "label": "Hardware",
    "link": "/category/hardware"
  },
  {
    "label": "Periféricos",
    "link": "/category/perifericos"
  },
  {
    "label": "Monitores",
    "link": "/category/monitores"
  }
]

export const NavBar = () => {
  
  return (
    <MuiBox sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <MuiContainer maxWidth="xl">
          <MuiToolbar disableGutters>
            <Link to={`/`}>
              <img src={Brand} alt="brand"></img>
            </Link>

            <MuiBox sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {links.map( link => (
              <NavLink to={link.link} key={link.label}>
                <MuiButton sx={{ my: 2, display: 'block', mx: 2}} >
                  <MuiTypography sx={{ color: 'white' }}>
                  {link.label}
                  </MuiTypography>             
                </MuiButton>
              </NavLink>
            ) )}
            </MuiBox>

            <MuiBox sx={{ flexGrow: 0 }}>
              <NavLink to={"/cart"}>
                <CartWidget/>
              </NavLink>
            </MuiBox>
          </MuiToolbar>
        </MuiContainer>
      </MuiAppBar>
    </MuiBox>
  ) 
}