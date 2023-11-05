import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { DashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
import { useContext } from 'react';

const Navbar = () => {
  const { toggleSidebar } = useContext(DashboardContext);
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
