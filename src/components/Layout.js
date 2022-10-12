import React from 'react'
import MuiContainer from '@mui/material/Container';
import { NavBar } from './NavBar'
import Footer from './Footer';
import { Paper } from '@mui/material';

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
      <Paper sx={{backgroundColor: "#f5f5f5"}} elevation={0}>
        <MuiContainer maxWidth="xl" 
        sx={{display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5', 
        marginBottom: 2
        }}>
          {children}
        </MuiContainer>
      </Paper>
    <Footer/>
    </>
  )
}

export default Layout