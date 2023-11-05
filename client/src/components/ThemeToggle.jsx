import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { DashboardContext } from '../pages/DashboardLayout';
import { useContext } from 'react';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useContext(DashboardContext);

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};
export default ThemeToggle;
