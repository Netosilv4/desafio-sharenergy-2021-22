import { NextFunction, Request, Response } from 'express';
import validateLogin from '../validations';

const credentialsCheck = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.query;

  const errorMessage = validateLogin(username as string, password as string);

  if (errorMessage) return res.status(401).send({ message: errorMessage });

  next();
};

export default credentialsCheck;
