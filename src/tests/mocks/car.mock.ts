import { ICar } from "../../interfaces/ICar";

export const carMockList: ICar[] = [
  {
    model: "Audi A4",
    year: 2022,
    color: "white",
    buyValue: 294990,
    seatsQty: 5,
    doorsQty: 4,
  },
  {
    model: "BMW 320i",
    year: 2022,
    color: "grey",
    buyValue: 313950,
    seatsQty: 5,
    doorsQty: 4,
  },
];

export const createCarMock: ICar = {
  model: "Audi A4",
  year: 2022,
  color: "white",
  buyValue: 294990,
  seatsQty: 5,
  doorsQty: 4,
};

export const createdCarMock: ICar & {_id: string} = {
  _id: "6327a0af95535b52d638baec",
  model: "Audi A4",
  year: 2022,
  color: "white",
  buyValue: 294990,
  seatsQty: 5,
  doorsQty: 4,
};

export const updateCarMock: ICar = {
  model: "Audi A4",
  year: 2022,
  color: "red",
  buyValue: 274990,
  seatsQty: 5,
  doorsQty: 4,
};

export const updatedCarMock: ICar & {_id: string} = {
  _id: "6327a0af95535b52d638baec",
  model: "Audi A4",
  year: 2022,
  color: "red",
  buyValue: 274990,
  seatsQty: 5,
  doorsQty: 4,
};

