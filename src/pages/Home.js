import MuiGrid from '@mui/material/Grid';
import { Layout } from '../components/Layout';
import Banner from '../../src/assets/imgs/banner.png'
import { Paper } from '@mui/material';

const Home = () => {
  return (
    <Layout>
      <MuiGrid container spacing={2} sx={{ padding: 1 }}>
        <MuiGrid item xs={12}>
          {/* Aca viene el diseño de la home */}
          <Paper elevation={0}
          sx={{
            position: 'relative',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: {Banner},
          }}
          >
          <img src={Banner} alt='banner' width={'100%'}></img>
          </Paper>
          
        </MuiGrid>
        <MuiGrid item xs={12}>
          Productos destacados
        </MuiGrid>
      </MuiGrid>
    </Layout>
  )
}

export default Home;