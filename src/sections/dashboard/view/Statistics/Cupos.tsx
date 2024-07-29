import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

interface Quota {
  allQuotaNumber: number;
  quotaBusy: number;
  quotaAvailable: number;
}

interface CuposProps {
  quota: Quota;
}

export const Cupos: React.FC<CuposProps> = ({ quota }) => {
  // Calcula el porcentaje de ocupación
  const progress = (quota.quotaBusy / quota.allQuotaNumber) * 100;

  return (
    <div className='bg-white shadow-card px-3 py-7 md:px-6 border border-solid rounded-3xl shadow-md'>
      <h3 className='font-bold text-custom-blue'>Número de cupos</h3>
      <p><span className='text-3xl font-bold text-custom-blue'>{quota.allQuotaNumber}</span> total cupos para hoy</p>
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={progress} />
      </Stack>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-custom-bluebarra mr-2"></div>
          <span className="text-sm font-semibold text-custom-bluebarra">Ocupados</span>
        </div>
        <span className="text-sm font-bold text-custom-blue">{quota.quotaBusy}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-200 mr-2"></div>
          <span className="text-sm font-semibold text-gray-500">Disponibles</span>
        </div>
        <span className="text-sm font-bold text-gray-500">{quota.quotaAvailable}</span>
      </div>
    </div>
  );
}
