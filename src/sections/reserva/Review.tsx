import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

interface ReviewFormProps {
  formData: any; // Tipo de tus datos del formulario
}

interface Product {
  name: string;
  desc: string;
  fech: String;
}

interface PersonalDate {
  name: string;
  detail: string;
}

const products: Product[] = [
  {
    name: 'Odontologia',
    desc: '',
    fech: '10/10/2024',
  },
  {
    name: 'oftalmologia',
    desc: '',
    fech: '10/10/2024',
  },
  {
    name: 'Medicina general',
    desc: '',
    fech: '10/10/2024',
  },
];

const addresses: string[] = ['Jr. Tiahuanaco 501', 'Apurimac', 'Abancay', 'Tiban', 'Peru'];
const datos: PersonalDate[] = [
  { name: 'Cel', detail: '999 999 999' },
  { name: 'Correo electronico', detail: 'example@mui.com' },
  { name: 'DNI', detail: '10203040' },
  { name: 'Nacimiento', detail: '10/10/2000' },
  { name: 'Sexo', detail: 'Masculino' },
];

const Review: React.FC<ReviewFormProps> = ({ formData }) => {
  const { name, lastName } = formData;//tal como esta estructurado en el interface formProps



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Paciente
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Nombres y Direccion
          </Typography>
          <Typography gutterBottom>{name}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Contacto
          </Typography>
          <Grid container>
            {datos.map((dato) => (
              <React.Fragment key={dato.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{dato.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{dato.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.fech}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Review;
