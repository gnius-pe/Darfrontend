import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

interface ReviewFormProps {
  formData: any; 
}

const Review: React.FC<ReviewFormProps> = ({ formData }) => {
  const { name, lastName, numberId, firstNumberPhone, sexo, birthDate, departamento, provincia, distrito, direccion, fechareserva, especiality, hora, mensaje, analisis, ayuda, visita } = formData;//tal como esta estructurado en el interface formProps

  return (
    <React.Fragment>

      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }} className="text-red-700">
            Datos Personales
          </Typography>
          <Grid container>
              <Typography gutterBottom className={`${name} ${lastName}` ? 'text-blue-800' : 'bg-red-400'}>{`${name} ${lastName}`}</Typography>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom className={numberId ? 'text-blue-800' : 'bg-red-400'}>DNI</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{numberId}</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom className={firstNumberPhone ? 'text-blue-800' : 'bg-red-400'}>Celular</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{firstNumberPhone}</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom className={sexo ? 'text-blue-800' : 'bg-red-400'}>sexo</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{sexo}</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom className={birthDate ? 'text-blue-800' : 'bg-red-400'}>Nacimiento</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{birthDate}</Typography>
                </Grid>
              </React.Fragment>
            </Grid>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }} className="text-red-700">
            Locacion
          </Typography>
          <Grid container>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom className={departamento ? 'text-blue-800' : 'bg-red-400'}>Departamento</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{departamento}</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom className={provincia ? 'text-blue-800' : 'bg-red-400'}>Provincia</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{provincia}</Typography>
                </Grid>
              </React.Fragment><React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom className={distrito ? 'text-blue-800' : 'bg-red-400'}>Distrito</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{distrito}</Typography>
                </Grid>
              </React.Fragment><React.Fragment > 
                <Grid item xs={6}>
                  <Typography gutterBottom className={direccion ? 'text-blue-800' : 'bg-red-400'}>Direccion</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom >{direccion}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom className="text-red-600">
        Citas
      </Typography>
      <List disablePadding>
          <ListItem sx={{ py: 0, px: 0 }}>
            <ListItemText primary={especiality} secondary={hora} />
            <Typography variant="body2">{fechareserva}</Typography>
          </ListItem>
      </List>
    </React.Fragment>
  );
};

export default Review;
