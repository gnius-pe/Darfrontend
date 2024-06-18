import { useState } from "react";
import CheckoutFloat from "../reserva/CheckoutFloat";


export default function FormModal(){

    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => setIsOpen(false);
    return (
    <>
        <div className='fixed inset-0 bg-black bg-opacity-50'>
            <CheckoutFloat isOpen={isOpen} onClose={handleClose}/>
        </div>
    </>
    )
};
///las funcionalidades del open y el close tengo que moverlos a este componente
///el checkoutfloat deberia quedar solo sin ningun open modal.