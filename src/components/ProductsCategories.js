import MuiBox from '@mui/material/Box';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiTypography from '@mui/material/Typography';
import MuiExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiList from '@mui/material/List';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiListItemText from '@mui/material/ListItemText';
import SecondaryMuiListItem from '../styled-components/SecondaryMuiListItem';
import MuiDivider from '@mui/material/Divider';

export const ProductsCategories = ({productsType}) => {


  const hardwareCategories = ['Motherboards', 'Procesadores', 'Placas de video', 'Fuentes', 'Gabinetes']

  return (
    <MuiBox>
      <MuiAccordion>
        <MuiAccordionSummary
          expandIcon={<MuiExpandMoreIcon color='secondary'/>}
        >
          <MuiTypography sx={{fontWeight: 500}}>Categorías</MuiTypography>
        </MuiAccordionSummary>
        <MuiDivider></MuiDivider>
        <MuiAccordionDetails sx={{padding: 0, marginTop: 2}}>
          <MuiBox>
          {hardwareCategories.map( (cat) => (
            <MuiAccordion key={cat}>
              <MuiAccordionSummary
                expandIcon={<MuiExpandMoreIcon color='secondary'/>}
              >
                <MuiTypography sx={{fontWeight: 500}}>
                  {cat}
                </MuiTypography>
              </MuiAccordionSummary>
              <MuiAccordionDetails sx={{paddingY: 0}}>
                <MuiList>
                  <SecondaryMuiListItem disablePadding>
                    <MuiListItemButton>
                      <MuiListItemText>
                        <MuiTypography sx={{fontWeight: 300}}>Seleccionar categoría</MuiTypography>
                      </MuiListItemText>
                    </MuiListItemButton>
                  </SecondaryMuiListItem>
                </MuiList>
              </MuiAccordionDetails>
            </MuiAccordion>
          ))}
          </MuiBox>
        </MuiAccordionDetails>
      </MuiAccordion>
    </MuiBox>
  )
}