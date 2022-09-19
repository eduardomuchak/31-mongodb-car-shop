import { Router } from 'express';
import { motorcycleController } from './main';

const route = Router();

const motorcycleDefaultRoute = '/motorcycles';

route.get(`${motorcycleDefaultRoute}/:id`, (req, res) => motorcycleController.readOne(req, res));
route.put(`${motorcycleDefaultRoute}/:id`, (req, res) => motorcycleController.update(req, res));
route.delete(`${motorcycleDefaultRoute}/:id`, (req, res) => motorcycleController.delete(req, res));
route.get(motorcycleDefaultRoute, (req, res) => motorcycleController.read(req, res));
route.post(motorcycleDefaultRoute, (req, res) => motorcycleController.create(req, res));

export default route;