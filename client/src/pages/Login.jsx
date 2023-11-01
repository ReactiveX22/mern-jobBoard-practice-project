import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="anna@gmail.com" />
        <FormRow type="password" name="password" defaultValue="123456" />
        <button type="button" className="btn btn-block">
          Submit
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            SignUp
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
