// Interface for a class
interface Vehicle {
  start(): void;
  stop(): void;
}

// Class implementing the interface
class Car1 implements Vehicle {
  start() {
    console.log("Car1 started");
  }

  stop() {
    console.log("Car1 stopped");
  }
}

// Usage
const myCar2 = new Car1();
myCar2.start();
myCar2.stop();