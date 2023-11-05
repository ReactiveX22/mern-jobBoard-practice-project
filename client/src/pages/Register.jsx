import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from '../components';
import customFetch from '../utils/customFetch';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration success');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />

        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Anna" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Smith"
        />
        <FormRow
          type="text"
          name="location"
          labelText="Location"
          defaultValue="Earth"
        />
        <FormRow type="email" name="email" defaultValue="anna@gmail.com" />
        <FormRow type="password" name="password" defaultValue="12345678" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
