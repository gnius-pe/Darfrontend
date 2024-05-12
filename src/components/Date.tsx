import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');


interface CalendarProps {
  label: string;
}

export default function Calendar({ label }: CalendarProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
      <DatePicker
        label={label}
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