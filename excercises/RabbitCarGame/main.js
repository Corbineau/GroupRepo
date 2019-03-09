var car = {
    make: "Honda",
    model: "Fit",
    color: "Blue Raspberry",
    mileage: 3000,
    isWorking: true,

    driveToWork: function() {

      alert("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 8;

      alert("New mileage: " + this.mileage);
    },

    driveAroundWorld: function() {

      alert("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 24000;

      alert("New Mileage: " + this.mileage);
      alert("Car needs a tuneup!");

      this.isWorking = false;
    },

    getTuneUp: function() {
      alert("Car is ready to go!");
      this.isWorking = true;
    },

    honk: function() {
      alert("Honk! Honk!");
    }
  };

document.onkeyup = function() {

    var controls = event.key;
    if(controls === 'd') {
        car.driveToWork();
        reWriteStats();
    } else if(controls === 'w') {
        car.driveAroundWorld();
        reWriteStats();
    } else if(controls === 't') {
        car.getTuneUp();
        reWriteStats();
    } else if(controls === 'h') {
        car.honk();
    } else {
        //add a randomizer for this message, because it is funny.
        alert("The car idles. A bird circles overhead.")
    }

}

function reWriteStats() {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Milage: ${car.mileage}`);
    console.log(`Color: ${car.color}`);
    console.log(`Is the car functional?: ${car.isWorking}`);
}

    