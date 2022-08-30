import MuiListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';

const SecondaryMuiListItem = styled(MuiListItem)(({ theme }) => ({
    '&$selected:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      transition: theme.transitions.create('background-color', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      transition: theme.transitions.create('background-color', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      color: theme.palette.secondary.contrastText,
      '& .MuiListItemIcon-root': {
        color: theme.palette.secondary.contrastText
      }
    }
  }));

export default SecondaryMuiListItem