import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  req.body.password = await hashPassword(req.body.password);

  await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthenticatedError('invalid credentials');

  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({ userId: user.id, role: user.role });

  //http only cookie
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production' ? true : false,
  });

  res.status(StatusCodes.OK).json({ msg: 'user logged in' });
};
