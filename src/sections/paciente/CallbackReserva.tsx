import { FC } from 'react';
import CheckoutFloat from '../reserva/CheckoutFloat'

interface NewUserModal {
  isOpen: boolean;
  onClose: () => void;
}

export const FormModal: FC<NewUserModal> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return  (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative max-w-3xl max-h-screen overflow-y-auto bg-white rounded-lg shadow-lg">
      <button
        className="absolute top-4 right-4"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>


      </button>
        <CheckoutFloat />
      </div>
    </div>
  );
};

export default FormModal;

///solamente falta el segundo numero para que se quede libre