import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../catalog/Error.catalog';

class CarService implements IService<ICar> {
  constructor(private _car: IModel<ICar>) {}

  public async create(payload: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(payload);
    
    if (!parsed.success) {
      throw parsed.error;
    }

    const created = await this._car.create(payload);

    return created;
  }

  public async read(): Promise<ICar[]> {
    const carList = await this._car.read();
    return carList;
  }

  public async readOne(_id: string): Promise<ICar> {
    const car = await this._car.readOne(_id);

    if (!car) throw new Error(ErrorTypes.EntityNotFound);

    return car;
  }

  // public async update(_id: string, payload: unknown): Promise<ICar> {
  //   const parsed = CarZodSchema.safeParse(payload);
    
  //   if (!parsed.success) {
  //     throw parsed.error;
  //   }

  //   const updated = await this._car.update(_id, parsed.data);

  //   if (!updated) throw new Error(ErrorTypes.EntityNotFound);

  //   return updated;
  // }

  // public async delete(_id: string): Promise<ICar> {
  //   const deleted = await this._car.delete(_id);

  //   if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

  //   return deleted;
  // }
}

export default CarService;
