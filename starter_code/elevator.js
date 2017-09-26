class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";///????
    this.waitingList = [];
    this.passengers = [];
  }

  start() {
    let interval = setInterval(update, 1000);
  }
  stop() {
    clearInterval(interval);
  }
  update() {
    this.log();
  }
  _passengersEnter() { }
  _passengersLeave() { }
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
    this.requests.pop(person);
    this.waitingList.pop(person);
  }
  log() {
    console.log(`Direction: ${this.direction==="up" ? "up" : "down"}
                  | Floor: ${this.floor}`);
   }

}

module.exports = Elevator;
