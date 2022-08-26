import express, { NextFunction, Request, Response } from 'express';
import 'dotenv';
import 'express-async-error';
import { router } from './router';

const app = express();

app.use(express.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, nest: NextFunction) => {
  return response.json({
    status: "error",
    menssage: error.message
  });
});


export { app }