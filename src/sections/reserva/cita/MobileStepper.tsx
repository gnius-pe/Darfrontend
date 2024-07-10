// MobileStepper.tsx
import React from 'react';

interface MobileStepperProps {
  activeStep: number;
  steps: number;
}

const MobileStepper: React.FC<MobileStepperProps> = ({ activeStep, steps }) => {
  return (
    <div className="flex justify-between w-full mb-3">
      {Array.from({ length: steps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 w-full ${index <= activeStep ? 'bg-purple-700' : 'bg-gray-400'} ${index < steps - 1 ? 'mr-1' : ''} rounded-full`}
        />
      ))}
    </div>
  );
};

export default MobileStepper;

