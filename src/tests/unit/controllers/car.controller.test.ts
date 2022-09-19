import * as sinon from 'sinon';
import { Request, Response } from 'express';
import chai from 'chai';
import Car from '../../../models/cars.model';
import CarService from '../../../services/cars.service';
import CarController from '../../../controllers/cars.controller';
import { carMockList, createdCarMock } from '../../mocks/car.mock';

const { expect } = chai;

describe('Car Controller', () => {
  const carModel = new Car();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'read').resolves(carMockList);
    sinon.stub(carService, 'readOne').resolves(createdCarMock);
    sinon.stub(carService, 'create').resolves(createdCarMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Get cars', () => {
    it('list all cars', async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });

    it('list one car', async () => {
      req.params = { id: createdCarMock._id };
      await carController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(createdCarMock)).to.be.true;
    });

    // it('list one car with invalid id', async () => {
    //   req.params = { id: 'invalid' };
    //   await carController.readOne(req, res);
    //   expect((res.status as sinon.SinonStub).calledWith(400)).to.be.true;
    // });   
  });

  describe('Create car', () => {
    it('create a car', async () => {
      req.body = createdCarMock;
      await carController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(createdCarMock)).to.be.true;
    });
  });


  it('', async () => {});

});