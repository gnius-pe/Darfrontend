import { useState } from 'react';
import PropTypes from 'prop-types';

import Nav from '../sections/dashboard/nav';
import Header from '../sections/dashboard/header';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen">
      <Nav navbarOpen={sidebarOpen} setnavbarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <Header navbarOpen={sidebarOpen} setnavbarOpen={setSidebarOpen} />
        <div className="flex-grow overflow-auto bg-custom-purple-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  children: PropTypes.node,
};
