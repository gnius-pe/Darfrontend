import {useState} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');


interface CalendarProps {
  label: string;
  handleDate: (date: Date | null) => void;
  error?: string;
}

export default function Calendar({ label, handleDate, error }: CalendarProps) {
  const [ selectedDate, setselectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) =>{
    setselectedDate(date);
    handleDate(date);
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
      <DatePicker
        label={label}
        views={['day', 'month', 'year']}
        format='DD/MM/YYYY'
        slotProps={{
          textField: {
            size: 'small',
            error: !!error,
            helperText: error,
          },
        }}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
}