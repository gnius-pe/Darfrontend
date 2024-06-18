import Checkout from '../sections/reserva/Checkout.tsx';
import DefaultLayout from '../layout/Defaultlayout.js';

export default function ReservaCita(){
    return(
        <>
        <DefaultLayout>
            <div className='pt-14'> 
            <Checkout />
            </div>
        </DefaultLayout>
        </>
    )
}


