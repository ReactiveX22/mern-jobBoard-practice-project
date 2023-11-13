import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import dayjs from 'dayjs';

// Get All Jobs
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

// Get Single Job
export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

// Create A Job
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// Update Job
export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: 'Job Updated', updatedJob });
};

// Delete Job
export const deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'Job deleted' });
};

// Stats
export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  });

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = [
    {
      date: 'Nov 26',
      count: 12,
    },
    {
      date: 'Dec 26',
      count: 12,
    },
    {
      date: 'Jan 26',
      count: 1,
    },
  ];

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
