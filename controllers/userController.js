import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';

// // Get All Jobs
// export const getAllJobs = async (req, res) => {
//   const jobs = await Job.find({});
//   res.status(StatusCodes.OK).json({ jobs });
// };

// Get Single User
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(StatusCodes.OK).json({ user });
};

// Create A User
export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

// Update User
export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: 'User Updated', updatedUser });
};

// Delete User
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'User deleted' });
};
