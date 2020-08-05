const sort = require('fast-sort');

class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }

  getMarca() {
    return this.marca;
  }

  getModelo() {
    return this.modelo;
  }

  getPrecio() {
    return this.precio;
  }

  toString() {
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // `;
  }
}

class Automovil extends Vehiculo {
  constructor(marca, modelo, numPuertas, precio) {
    super(marca, modelo, precio);
    this.numPuertas = numPuertas;
  }

  toString() {
    return (
      `${super.toString()}` +
      `Puertas: ${this.numPuertas} // Precio: $${this.precio}`
    );
  }
}

class Motocicleta extends Vehiculo {
  constructor(marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }

  getCilindrada() {
    return this.cilindrada;
  }

  toString() {
    return (
      super.toString() +
      `Cilindrada: ${this.cilindrada} // Precio: $${this.precio}`
    );
  }
}

const sortByPrice = (vehicles, flag) => {
  if (flag) {
    return sort(vehicles).asc((vehicle) => vehicle.precio);
  }
  return sort(vehicles).desc((vehicle) => vehicle.precio);
};

const mostExpensive = (vehicles) => {
  sorted_vehicles = sortByPrice(vehicles, false);
  return sorted_vehicles;
};

const mostCheap = (vehicles) => {
  sorted_vehicles = sortByPrice(vehicles, true);
  return sorted_vehicles;
};

const containsY = (vehicles) => {
  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].modelo.includes('Y')) {
      return vehicles[i];
    }
    return null;
  }
};

// Main printer
const printLog = (vehicles) => {
  const mostCheapVehicle = mostCheap(listOfVehicles)[0];
  const mostCheapMark = mostCheapVehicle.getMarca();
  const mostCheapModel = mostCheapVehicle.getModelo();

  const mostExpensiveVehicle = mostExpensive(listOfVehicles)[0];
  const mostExpensiveMark = mostExpensiveVehicle.getMarca();
  const mostExpensiveModel = mostExpensiveVehicle.getModelo();

  const containsYx = containsY(vehicles);
  console.log(containsYx);
  //  const containsYMark = containsYx.getMarca();
  //const containsYModel = containsYx.getModelo();
  // const containsYPrice = containsYx.getPrecio();

  for (let i = 0; i < vehicles.length; i++) {
    console.log(vehicles[i].toString());
  }
  console.log('=============================');

  console.log(`Vehículo más caro: ${mostExpensiveMark} ${mostExpensiveModel}`);
  console.log(`Vehículo más barato: ${mostCheapMark} ${mostCheapModel}`);
  console.log(`Vehículo que contiene en el modelo la letra 'Y': `);
};

const auto1 = new Automovil('Peugeot', '206', 4, 200000);
const auto2 = new Motocicleta('Honda', 'Titan', '125c', 60000);
const auto3 = new Automovil('Peugeot', '208', 5, 250000);
const moto1 = new Motocicleta('Yamaha', 'YBR', '160c', 80500);

const listOfVehicles = [auto1, auto2, auto3, moto1];

printLog(listOfVehicles);
