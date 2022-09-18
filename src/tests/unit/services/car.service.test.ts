import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import Car from '../../../models/cars.model';
import CarService from '../../../services/cars.service';
import { carMockList, createdCarMock } from '../../mocks/car.mock';

describe('Car Service', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'read').resolves(carMockList);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(createdCarMock)
      .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Get cars', () => {
    it('list all cars', async () => {
      const cars = await carService.read();
      expect(cars).to.be.an('array');
      expect(cars).to.have.lengthOf(2);
      expect(cars).to.be.eql(carMockList);
    });

    it('get car by id', async () => {
      const car = await carService.readOne(createdCarMock._id);
      expect(car).to.be.an('object');
      expect(car).to.be.eql(createdCarMock);
    });
  });

  it('', async () => {});

});