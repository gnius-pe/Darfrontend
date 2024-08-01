import { Link } from "react-router-dom";
import logoHead from '../assets/images/header/ic_logo.svg'
import log_in from '../assets/images/header/log_in.svg';

interface DefaultLayoutProps{
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps){
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-14 z-10 bg-custom-blue flex items-center">
            <Link to="/">
                <div className="w-12 md:w-64 flex justify-center items-center">
                    <img className='self-center' src={logoHead} alt="logo Dar" />
                </div>
            </Link>
            <div className="w-0 h-10 border border-teal-300 rounded-lg overflow-hidden"></div>
            
            <div className="flex flex-grow px-4 items-center justify-end">
                <div className="flex items-center gap-3">
                <select name="" id="" className="mr-2 px-4 py-1 rounded-2xl">
                    <option className='bg-white' value="las" >Tingua</option>  
                </select>
                <Link to="/login">
                    <div className='flex items-center gap-3 text-teal-300 cursor-pointer'>
                        <h2 className='text-lg'>Iniciar Cesion</h2>
                        <div>
                        <img src={log_in} alt="Log In" />
                        </div>
                    </div>
                </Link>
                </div>
            </div>
            </div>

            <main>{children}</main>
        </>
    )
}