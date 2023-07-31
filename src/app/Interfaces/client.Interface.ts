export interface Client {
  name: string,
  phone: string | number,
  car: Car,
  orders: Order[]
}

export interface Car {
  mark: string,
  model: string,
  year: string,
  mileAge: string,
  vin: string,
  number: string
}

export interface Order {
  date: Date,
  jobs: Job[]
}

export interface Job {
  price: number,
  overview: string
}
