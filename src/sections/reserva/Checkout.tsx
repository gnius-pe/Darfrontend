import * as React from 'react';
import FormModal from './CheckoutFloat';

export default function Checkout() {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <FormModal isOpen={isOpen} onClose={handleClose}/>
    </>
  );
}