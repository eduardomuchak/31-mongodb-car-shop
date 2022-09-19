import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../catalog/Error.catalog';

class MotorcycleService implements IService<IMotorcycle> {
  constructor(private _motorcycle: IModel<IMotorcycle>) {}

  public async create(payload: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(payload);
    
    if (!parsed.success) {
      throw parsed.error;
    }

    const created = await this._motorcycle.create(payload);

    return created;
  }

  public async read(): Promise<IMotorcycle[]> {
    const motorcycleList = await this._motorcycle.read();
    return motorcycleList;
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    const motorcycle = await this._motorcycle.readOne(_id);

    if (!motorcycle) throw new Error(ErrorTypes.EntityNotFound);

    return motorcycle;
  }

  public async update(_id: string, payload: IMotorcycle): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(payload);
    
    if (!parsed.success) {
      throw parsed.error;
    }

    const updated = await this._motorcycle.update(_id, payload);

    if (!updated) throw new Error(ErrorTypes.EntityNotFound);

    return updated;
  }

  public async delete(_id: string): Promise<IMotorcycle> {
    const deleted = await this._motorcycle.delete(_id);

    if (!deleted) throw new Error(ErrorTypes.EntityNotFound);

    return deleted;
  }
}

export default MotorcycleService;
