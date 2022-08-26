import Router from 'express';

const router = Router();


router.get('/test', (request, response) => {
  return response.json({
    name: "test",
    password: "test"
  });
});


export { router }