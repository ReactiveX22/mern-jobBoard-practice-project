import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

import morgan from 'morgan';

// Routers
import jobRouter from './routes/jobRouter.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//Routes
app.use('/api/v1/jobs', jobRouter);

// Not Found Setup
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' });
});

// Error Handler middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'somethin went wrong' });
  next();
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}..`);
});
