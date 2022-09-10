import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => {
    return (
      <Typography variant="body2" color='primary.contrastText'>
        {'Copyright © '}
        <Link color='primary.contrastText' href="/" sx={{textDecoration: 'none'}}>
          Franco Carchedi
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const Footer = () => {
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: 'primary.main'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color='primary.contrastText'>
            Proyecto realizado para CoderHouse
          </Typography>
          <Copyright />
        </Container>
      </Box>
  )
}

export default Footer