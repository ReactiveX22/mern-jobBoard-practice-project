import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { DashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import { useContext } from 'react';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useContext(DashboardContext);

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
