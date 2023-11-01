import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            {/* <FaTimes /> */}
          </button>
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
