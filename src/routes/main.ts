import CarController from '../controllers/cars.controller';
import CarService from '../services/cars.service';
import CarModel from '../models/cars.model';

import MotorcycleController from '../controllers/motorcycle.controller';
import MotorcycleService from '../services/motorcycle.service';
import MotorcycleModel from '../models/motorcycle.model';

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

export { carController, motorcycleController };
