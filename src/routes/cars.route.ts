import { Router } from 'express';
import carController from './main';

const route = Router();

route.get('/cars', (req, res) => carController.read(req, res));
route.post('/cars', (req, res) => carController.create(req, res));

export default route;