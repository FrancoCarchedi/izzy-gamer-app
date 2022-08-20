import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const HardwareCategories = () => {
  return (
    <Box>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color='secondary'/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Motherboards</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Mothers AMD</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Mothers Intel</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </AccordionDetails>
      </Accordion>

      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color='secondary'/>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Procesadores</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Procesadores AMD</ListItemText>
            </ListItemButton>
          </ListItem>
          <Divider/>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Procesadores Intel</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </AccordionDetails>
      </Accordion>
    </Box>
  )
}