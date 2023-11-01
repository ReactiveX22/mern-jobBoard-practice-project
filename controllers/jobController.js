import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'meta', position: 'full-stack' },
];

// Get All Jobs
export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

// Get Single Job
export const getSingleJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    throw new Error('No job with that id');
  }
  res.status(200).json({ job });
};

// Create A Job
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: 'Bad Req: Empty Fields' });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  res.status(201).json({ job });
};

// Update Job
export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: 'Bad Req: Empty Fields' });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    throw new Error('No job with that id');
  }

  job.company = company;
  job.position = position;

  res.status(200).json({ job });
};

// Delete Job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    throw new Error('No job with that id');
  }

  res.status(200).json({ job });
};
