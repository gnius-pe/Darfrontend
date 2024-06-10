import React from 'react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateForm: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative p-4 bg-white rounded-lg max-w-4xl w-full mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Formulario de Nuevo Usuario</h2>
          <button
            className="focus:outline-none"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <form className='flex justify-between'>
            <div>
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          </div>
          <div>
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          </div>
          <div>
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          </div>
          <div>
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          <input className="block w-full mb-2 border p-2" placeholder='ingrese su nombre' />
          </div>
        </form>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;