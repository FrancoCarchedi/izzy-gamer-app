import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

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
      <ItemListContainer greeting={'¡Saludos!'}/>
    </ThemeProvider>
  );
}

export default App;
