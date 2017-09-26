class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";///????
    this.waitingList = [];
    this.passengers = [];
    this.listOfFloors = [];
  }

  start() {
    let interval = setInterval(update, 1000);
  }
  stop() {
    clearInterval(interval);
  }

  //In later iterations, the elevator will process the list of requests
  // as it travels up and down.
  // We will need a list of floors that the elevator should serve in the update method.
  update() {
    this.log();
  }
  _passengersEnter(person) {
    this.passengers.push(person);
    console.log(`${person.name} has enter the elevator`);
   }
  _passengersLeave() {
    this.passengers=this.passengers.filter(person => {
      person.destinationFloor!==currFloor;
      console.log(`${person.name} has left the elevator`);
    });//how to remove ???

   }
  floorUp() { () => {
      this.floor < this.MAXFLOOR ? this.floor++ : this.MAXFLOOR;
      this.direction = "up";
    }
  }
  floorDown() { () => {
      this.floor===0 ? 0: this.floor--;
      this.direction ="down";
    }
  }
  call(person) {
    this.requests.push(person);
    this.waitingList.push(person);
  }
  log() {
    console.log(`Direction: ${this.direction==="up" ? "up" : "down"} | Floor: ${this.floor}`);
   }

}

module.exports = Elevator;
