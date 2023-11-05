import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { DashboardContext } from '../pages/DashboardLayout';
import { useContext } from 'react';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useContext(DashboardContext);

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
