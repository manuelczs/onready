const sort = require('fast-sort');

// Main class
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

// Automovil class that extends the Vehiculo class
class Automovil extends Vehiculo {
  constructor(marca, modelo, numPuertas, precio) {
    super(marca, modelo, precio);
    this.numPuertas = numPuertas;
  }

  toString() {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return (
      `${super.toString()}` +
      `Puertas: ${this.numPuertas} // Precio: ${formatter.format(this.precio)}`
    );
  }
}

// Motocicleta class that extends the Vehiculo class
class Motocicleta extends Vehiculo {
  constructor(marca, modelo, cilindrada, precio) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }

  getCilindrada() {
    return this.cilindrada;
  }

  toString() {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return (
      super.toString() +
      `Cilindrada: ${this.cilindrada}c // Precio: ${formatter.format(
        this.precio
      )}`
    );
  }
}

// Auxiliar methods to sorting expensive and cheap values
const sortByPrice = (vehicles, flag) => {
  const copyVehicles = [...vehicles];
  if (flag) {
    return sort(copyVehicles).asc((vehicle) => vehicle.precio);
  }
  return sort(copyVehicles).desc((vehicle) => vehicle.precio);
};

const mostExpensive = (vehicles) => {
  const _vehicles = [...vehicles];
  sorted_vehicles = sortByPrice(_vehicles, false);
  return sorted_vehicles;
};

const mostCheap = (vehicles) => {
  const _vehicles = [...vehicles];
  sorted_vehicles = sortByPrice(_vehicles, true);
  return sorted_vehicles;
};

const containsY = (vehicles) => {
  for (let i = 0; i < vehicles.length; i++) {
    if (vehicles[i].getModelo().includes('Y')) {
      return vehicles[i];
    }
  }
  return null;
};

// Main printer
const printLog = (vehicles) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const _vehicles = [...vehicles];
  const vehicles_ = [...vehicles];
  const vehiclesSortedByDesc = sortByPrice(vehicles_);
  const mostCheapVehicle = mostCheap(_vehicles)[0];
  const mostCheapMark = mostCheapVehicle.getMarca();
  const mostCheapModel = mostCheapVehicle.getModelo();

  const mostExpensiveVehicle = mostExpensive(_vehicles)[0];
  const mostExpensiveMark = mostExpensiveVehicle.getMarca();
  const mostExpensiveModel = mostExpensiveVehicle.getModelo();

  const withY = containsY(_vehicles);
  const withYMark = withY.getMarca();
  const withYModel = withY.getModelo();
  const withYPrice = withY.getPrecio();

  for (let i = 0; i < _vehicles.length; i++) {
    console.log(_vehicles[i].toString());
  }
  console.log('=============================');

  console.log(`Vehículo más caro: ${mostExpensiveMark} ${mostExpensiveModel}`);
  console.log(`Vehículo más barato: ${mostCheapMark} ${mostCheapModel}`);
  console.log(
    `Vehículo que contiene en el modelo la letra 'Y': ${withYMark} ${withYModel} ${formatter.format(
      withYPrice
    )}`
  );
  console.log('=============================');
  console.log('Vehículos ordenados por precio de mayor a menor:');

  for (let i = 0; i < vehiclesSortedByDesc.length; i++) {
    console.log(
      `${vehiclesSortedByDesc[i].getMarca()} ${vehiclesSortedByDesc[
        i
      ].getModelo()}`
    );
  }
};

// Here I create the instances
const auto1 = new Automovil('Peugeot', '206', 4, 200000);
const moto1 = new Motocicleta('Honda', 'Titan', 125, 60000);
const auto2 = new Automovil('Peugeot', '208', 5, 250000);
const moto2 = new Motocicleta('Yamaha', 'YBR', 160, 80500.5);

// Set a list
const listOfVehicles = [auto1, moto1, auto2, moto2];

// And there we go!
printLog(listOfVehicles);
