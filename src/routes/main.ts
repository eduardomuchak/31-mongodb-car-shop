import CarController from '../controllers/cars.controller';
import CarService from '../services/cars.service';
import CarModel from '../models/cars.model';

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

export default carController;
