import './App.css';
import MuiContainer from '@mui/material/Container';
import MuiGrid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ProductsCategories } from './components/ProductsCategories';

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
    fontFamily: {
      
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <MuiContainer maxWidth="xl">
        <MuiGrid container spacing={2} sx={{ padding: 2 }}>
          <MuiGrid item xs={3}>
            <ProductsCategories/>
          </MuiGrid>
          <MuiGrid item xs={9}>
            <ItemListContainer/>
          </MuiGrid>
        </MuiGrid>
      </MuiContainer>
    </ThemeProvider>
  );
}

export default App;
