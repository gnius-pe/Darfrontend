import ic_notification from '../../assets/images/header/ic_notification.svg';
import ic_message from '../../assets/images/header/ic_message.svg';
import user_profile from '../../assets/images/user/user_profile.svg';
import MenuUser from '../dashboard/view/Headercomp/logoutBtn';

const Header = (props: {
  navbarOpen: string | boolean | undefined;
  setnavbarOpen: (arg0: boolean) => void;
}) => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || "{}");

  return (
    <header className="top-0 h-14 w-full bg-custom-blue flex items-center py-2">
      <div className="flex flex-grow px-4 items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setnavbarOpen(!props.navbarOpen);
            }}
            className="z-99 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="w-full flex justify-between items-center gap-3 2xsm:gap-7">
          <p className=" ml-2 text-white">
            <span>Ayuda</span>
          </p>
          <div className="flex items-center gap-3">
            <select name="" id="" className="mr-2 px-4 py-1 rounded-2xl">
              <option className="bg-white" value="las">San Diego</option>
              <option className="bg-white" value="DNI">La Libertad</option>
              <option className="bg-white" value="Pasaporte">Ancash</option>
            </select>
            <div className="hidden sm:block bg-white px-1 py-2 rounded-3xl">
              <img src={ic_notification} alt="notification icon" className="mr-2" />
            </div>
            <div className="hidden sm:block bg-white px-1 py-2 rounded-3xl">
              <img src={ic_message} alt="message icon" />
            </div>
            <div className="flex justify-between items-center gap-3 text-teal-300">
              <div className="hidden sm:block">
                <h2 className="text-lg">{userInfo.username}</h2>
                <p className="text-sm">{userInfo.role}</p>
              </div>
              <div>
                <img src={user_profile} alt="" />
              </div>
              <div className="w-6 h-6 md:mr-20">
                <MenuUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
