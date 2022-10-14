import MuiContainer from '@mui/material/Container';
import MuiPaper from '@mui/material/Paper';
import { NavBar } from './NavBar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
      <MuiPaper sx={{backgroundColor: "#f5f5f5"}} elevation={0}>
        <MuiContainer maxWidth="xl" 
        sx={{display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
        backgroundColor: '#f5f5f5', 
        }}>
          {children}
        </MuiContainer>
      </MuiPaper>
    <Footer/>
    </>
  )
}

export default Layout