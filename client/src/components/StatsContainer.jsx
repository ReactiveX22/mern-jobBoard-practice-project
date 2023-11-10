import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import { StatItem } from '../components';

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'pending aplications',

      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#FF9671',
      bcg: '#4B4453',
    },
    {
      title: 'interviews scheduled',

      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#F9F871',
      bcg: '#4B4453',
    },
    {
      title: 'jobs declined',

      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: '#FF6F91',
      bcg: '#4B4453',
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
