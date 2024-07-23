import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface ReviewFormProps {
  formData: any; 
}

const Review: React.FC<ReviewFormProps> = ({ formData }) => {
  const { name, lastName, numberId, firstNumberPhone, sexo, birthDate, departamento, provincia, distrito, direccion, fechareserva, especiality } = formData;

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="text-red-700">
            Datos Personales
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-blue-800">Nombre Completo</TableCell>
                  <TableCell>{`${name} ${lastName}`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-blue-800">DNI</TableCell>
                  <TableCell>{numberId}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-blue-800">Celular</TableCell>
                  <TableCell>{firstNumberPhone}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-blue-800">Sexo</TableCell>
                  <TableCell>{sexo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-blue-800">Nacimiento</TableCell>
                  <TableCell>{birthDate}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="text-red-700">
            Ubicacion
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-blue-800">Departamento</TableCell>
                  <TableCell>{departamento}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-blue-800">Provincia</TableCell>
                  <TableCell>{provincia}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-blue-800">Distrito</TableCell>
                  <TableCell>{distrito}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-blue-800">Dirección</TableCell>
                  <TableCell>{direccion}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom className="text-red-600" sx={{ mt: 2 }}>
        Citas
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-blue-800">Fecha de Reserva</TableCell>
              <TableCell>{fechareserva}</TableCell>
            </TableRow>
            {especiality && especiality.length > 0 && (
              <React.Fragment>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="h6" gutterBottom className="text-red-600">
                      Especialidades
                    </Typography>
                  </TableCell>
                </TableRow>
                {especiality.map((especialidad: { label: string, value: string }, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="text-blue-800">{especialidad.label}</TableCell>
                    <TableCell>{especialidad.value}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Review;

