import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';
import Order from './components/Order';

const theme = createTheme({
  palette: {
    primary: {
      light: '#2a4154',
      main: '#001b2b',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#65a3ff',
      main: '#1d75d3',
      dark: '#004aa1',
      contrastText: '#ffffff',
    },
    badge: {
      main: '#002884',
      contrastText: '#fff',
    }
  },
  typography: {
    button: {
      textTransform: 'none',
      textDecoration: 'none'
    }
  }
});

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/cart/checkout' element={<Order/>}/>
          <Route exact path='/*' element={<Navigate to="/"/>}/>
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
