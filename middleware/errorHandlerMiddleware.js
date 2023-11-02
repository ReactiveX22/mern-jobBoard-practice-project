import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMessage = err.message || 'Something Went Wrong';

  res.status(statusCode).json({ msg: errorMessage });
  next();
};

export default errorHandlerMiddleware;
