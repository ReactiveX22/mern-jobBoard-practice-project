import { NavLink } from 'react-router-dom';
import { DashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { useContext } from 'react';

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useContext(DashboardContext);

  return (
    <div className="links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
