class Appliance {
  turnOn() {
    throw new Error("Method 'turnOn()' must be implemented.");
  }
}
class WashingMachine extends Appliance {
  turnOn() {
    console.log("Washing machine is now running. ");
  }

  status() {
    console.log("Washing cycle in progress...");
  }
}


class Microwave extends Appliance {
  turnOn() {
    console.log("Microwave is heating your food.");
  }

  status() {
    console.log("Timer is set. Food will be ready soon!");
  }
}
const wash = new WashingMachine();
wash.turnOn();  
wash.status(); 

const oven = new Microwave();
oven.turnOn();  
oven.status();    