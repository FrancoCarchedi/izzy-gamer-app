import React from 'react'
import MuiContainer from '@mui/material/Container';
import { NavBar } from './NavBar'
import Footer from './Footer';

export const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <MuiContainer maxWidth="xl" sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
      {children}
    </MuiContainer>
    <Footer/>
    </>
  )
}
