import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
      <DatePicker
        label="Fecha de Nacimiento"
        views={['day', 'month', 'year']}
        format='DD/MM/YYYY'
        slotProps={{
          textField: {
            size: 'small',
          },
        }}
      />
    </LocalizationProvider>
  );
}