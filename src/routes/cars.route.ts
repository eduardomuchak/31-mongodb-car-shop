import { Router } from 'express';
import carController from './main';

const route = Router();

route.get('/cars', carController.read);

export default route;