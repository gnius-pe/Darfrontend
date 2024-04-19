

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Misiones"
            total={9}
            color="success"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Pacientes"
            total={135}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Medicos"
            total={10}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png"/>}
          />
        </Grid>

      

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Resumen"
            chart={{
              series: [
                { label: 'Atendidos', value:100 },
                { label: 'Pendientes', value: 44 },
                { label: 'En consulta', value: 25 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Cupos"
            subheader=""
            chart={{
              series: [
                { label: 'Obstetricia', value: 90 },
                { label: 'Pediatria', value: 25 },
                { label: 'Oftalmologia', value: 48 },
                { label: 'Medicina Interna', value: 70 },
                { label: 'Odontologia', value: 40 },
                { label: 'Quiropraccia', value: 80 },
                { label: '', value: 0 },
                { label: '', value: 0 },
                { label: '', value: 0 },
                { label: '', value: 0 },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}