import Router from 'express';
import { createTypeController } from '../useCases/createType/indesx';

const router = Router();


router.post('/test', (request, response) => {
  return createTypeController.handler(request, response);
});


export { router }