import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

import morgan from 'morgan';
import mongoose from 'mongoose';

// Routers
import jobRouter from './routes/jobRouter.js';
import userRouter from './routes/userRouter.js';

// Middlewares
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

//Routes
app.use('/api/v1/jobs', jobRouter);
app.use('/api/v1/users', userRouter);

// Not Found Setup
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' });
});

// Error Handler middleware
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000; // use env port if exists

try {
  await mongoose.connect(process.env.MONGO_URL);

  // Start Server
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
