import { FC } from 'react';
import CheckoutFloat from '../reserva/CheckoutFloat'

interface NewUserModal {
  isOpen: boolean;
  onClose: () => void;
}

export const FormModal: FC<NewUserModal> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return  (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="relative">
      <button
        className="absolute top-14 -right-3 focus:outline-none"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
      </button>
      <CheckoutFloat />
    </div>
  </div>
  );
};

export default FormModal;

///solamente falta el segundo numero para que se quede libre