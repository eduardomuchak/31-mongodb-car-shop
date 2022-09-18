import * as sinon from 'sinon';
import chai from 'chai';
import Car from '../../../models/cars.model';
import { Model } from 'mongoose';
import { carMockList, createCarMock, createdCarMock } from '../../mocks/car.mock';

const { expect } = chai;

describe('Car Model', () => {
  const carModel = new Car();
  
  before(async () => {
    sinon.stub(Model, 'find').resolves(carMockList);
    sinon.stub(Model, 'findOne').resolves(createdCarMock);
    sinon.stub(Model, 'create').resolves(createdCarMock);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Get Cars', () => {
    it('should return an array', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.an('array');
      expect(cars).to.have.lengthOf(2);
    });

    it('should return a list of cars', async () => {
      const cars = await carModel.read();
      expect(cars).to.be.eql(carMockList);
    });

    it('should return a car by id', async () => {
      const car = await carModel.readOne(createdCarMock._id);
      expect(car).to.be.eql(createdCarMock);
    });
  });

  describe('Create Car', () => {
    it('should create a car', async () => {
      const car = await carModel.create(createCarMock);
      expect(car).to.be.eql(createdCarMock);
    });
  });

  it('', async () => {});

});