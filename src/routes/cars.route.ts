import { Router } from 'express';
import { carController } from './main';

const route = Router();

route.get('/cars/:id', (req, res) => carController.readOne(req, res));
route.put('/cars/:id', (req, res) => carController.update(req, res));
route.delete('/cars/:id', (req, res) => carController.delete(req, res));
route.get('/cars', (req, res) => carController.read(req, res));
route.post('/cars', (req, res) => carController.create(req, res));

export default route;