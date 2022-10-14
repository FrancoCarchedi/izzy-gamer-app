import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MuiBox from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import MuiContainer from '@mui/material/Container';
import MuiToolbar from '@mui/material/Toolbar';
import MuiButton from '@mui/material/Button';
import MuiTypography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import MuiMenu from '@mui/material/Menu';
import MuiMenuIcon from '@mui/icons-material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import CartWidget from "./CartWidget";
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

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  
  return (
    <MuiBox sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <MuiContainer maxWidth="xl">
          <MuiToolbar disableGutters sx={{marginY: 1}}>
            <Link to={`/`}>
              <img src={Brand} alt="brand"></img>
            </Link>

            <MuiBox sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, justifyContent: 'center',  }}>
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

            <MuiBox sx={{flexGrow: 1, display: {xs: "flex", sm: "none"}, justifyContent: "end"}}>
              <MuiIconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MuiMenuIcon />
              </MuiIconButton>
              <MuiMenu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {links.map( link => (
                  <NavLink to={link.link} key={link.label}>
                    <MuiMenuItem onClick={handleCloseNavMenu}>
                      <MuiTypography textAlign="center" sx={{ color: 'black' }}>{link.label}</MuiTypography>
                    </MuiMenuItem>
                  </NavLink>
                ))}
              </MuiMenu>
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