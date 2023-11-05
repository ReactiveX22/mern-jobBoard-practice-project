import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import { DashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import { useContext } from 'react';

const BigSidebar = () => {
  const { showSidebar } = useContext(DashboardContext);

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
