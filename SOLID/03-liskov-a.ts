import { Audi, Honda, Skoda, Tesla, Toyota, Vehicule } from "./03-liskov-b";

(() => {
  const printCarSeats = (cars: Vehicule[]) => {
    cars.forEach((car) => {
      console.log(car.constructor.name + car.getNumberOfSeats());
    });
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5), new Skoda(5)];

  printCarSeats(cars);
})();
