import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import Car from '../../../models/cars.model';
import CarService from '../../../services/cars.service';
import { ZodError } from 'zod';
import { carMockList, createCarMock, createdCarMock } from '../../mocks/car.mock';

describe('Car Service', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'read').resolves(carMockList);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(createdCarMock)
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'create').resolves(createdCarMock);
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

  describe('Create car', () => {
    it('create car', async () => {
      const car = await carService.create(createCarMock);
      expect(car).to.be.an('object');
      expect(car).to.be.eql(createdCarMock);
    });

    it('create car with invalid data', async () => {
      try {
        await carService.create({} as any);
      } catch (error: any) {
        expect(error).to.be.an.instanceOf(ZodError);
      }
    });
  });

  it('', async () => {});

});