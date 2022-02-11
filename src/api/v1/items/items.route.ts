import { Router } from 'express';
import Controller from './items.controller';

const route: Router = Router();
const controller = new Controller();

route.get('/', controller.findAll);

export default route;
