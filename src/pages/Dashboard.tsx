import { useState } from 'react';
import PropTypes from 'prop-types';

import Nav from '../sections/dashboard/nav';
import Header from '../sections/dashboard/header';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      <div className="flex bg-white">
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <div className="ml-64 flex-grow">
            <div className="w-full h-full bg-custom-purple-800 pt-14">
                <Outlet/>
            </div>
        </div>
        
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
};
