import logoHead from '../../assets/images/header/ic_logo.svg'
import ic_notification from '../../assets/images/header/ic_notification.svg';
import ic_message from '../../assets/images/header/ic_message.svg';
import user_profile from '../../assets/images/user/user_profile.svg';
import desglose from '../../assets/images/header/desglose.svg'


export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-14 z-10 bg-custom-blue flex items-center">
      <div className="w-64 flex justify-center items-center">
        <img className='self-center' src={logoHead} alt="logo" />
      </div>
      <div className="w-0 h-10 border border-teal-300 rounded-lg overflow-hidden"></div>
      
      <div className="flex flex-grow px-4 items-center justify-between">
        <p className='text-white'><span>Ayuda</span></p>
        <div className="flex items-center gap-3">
          <select name="" id="" className="mr-2 px-4 py-1 rounded-2xl">
            <option className='bg-white' value="las" >San Diego</option>  
            <option className='bg-white' value="DNI">La Libertad</option>
            <option className='bg-white' value="Pasaporte">Ancash</option>
          </select>
          <div className='bg-white  px-1 py-2 rounded-3xl'>
            <img src={ic_notification} alt="notification icon" className="mr-2" />
          </div>
          <div className='bg-white  px-1 py-2 rounded-3xl'>
            <img src={ic_message} alt="message icon" />
          </div>
          <div className='flex items-center gap-3 text-teal-300'>
            <div>
              <h2 className='text-lg'>User</h2>
              <p className='text-sm'>Administrador</p>
            </div>
            <div>
              <img  src={user_profile} alt="" />
            </div>
            <div className='w-6 h-6 mr-24'>
              <img src={desglose} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
