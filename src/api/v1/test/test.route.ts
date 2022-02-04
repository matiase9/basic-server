import { Router } from 'express';

const route: Router = Router();

route.get('/', (req, res) => {
  return res.status(200).send('First endpoint');
});

export default route;
