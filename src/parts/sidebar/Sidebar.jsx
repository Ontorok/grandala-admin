import {
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline
} from '@mui/icons-material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = function () {
  console.log('redner');
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* Dashboard */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li>
              <NavLink to="/" className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span>Analytics</span>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <span>Sales</span>
            </li>
          </ul>
        </div>
        {/* /Dashboard */}

        {/* Quick Menu */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li>
              <NavLink to="/users" className="sidebarListItem" activeClassName="active">
                <PermIdentity className="sidebarIcon" />
                <span>User</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="sidebarListItem" activeClassName="active">
                <Storefront className="sidebarIcon" />
                <span>Products</span>
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              <span>Sales</span>
            </li>
          </ul>
        </div>
        {/* /Quick Menu */}

        {/* Notifications */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <span>Mail</span>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              <span>Feedback</span>
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              <span>Message</span>
            </li>
          </ul>
        </div>
        {/* /Notifications */}

        {/* Staff */}
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span>Manage</span>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              <span>Analytics</span>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              <span>Report</span>
            </li>
          </ul>
        </div>
        {/* /Staff */}
      </div>
    </div>
  );
};

export default Sidebar;
