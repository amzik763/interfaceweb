import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Info, ContactMail, ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import './Layout.css';

const Layout = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="layout">
      <div className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`}>
        <div className="sidebar-header">
          <button onClick={toggleSidebar} className="toggle-button">
            {isSidebarExpanded ? <ArrowBackIos /> : <ArrowForwardIos />}
          </button>
        </div>
        <nav className="nav-menu">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Home /> {isSidebarExpanded && <span>Home</span>}
          </NavLink>
          <NavLink 
            to="/task" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Info /> {isSidebarExpanded && <span>Task</span>}
          </NavLink>
          <NavLink 
            to="/history" 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <ContactMail /> {isSidebarExpanded && <span>History</span>}
          </NavLink>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
