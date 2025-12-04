 horseOne: {
    name: "Pebbles",
    age: 15,
    nickname: "Pebbs",
    favoriteTreat: "Carrots",
    monthlyRent: 200,
    isInStable: true,
    color: "Blue",
    canFly: true,
    isHungry: true,
    speed: 100,
  },
  horseTwo: {
    name: "Toffee",
    age: 12,
    nickname: "Tofu",
    favoriteTreat: "Crackers",
    monthlyRent: 300,
    isInStable: false,
    color: "Red",
    canFly: false,
    isHungry: true,
    speed: 50,
  },

  function checkHorseSpeed(horse) {
    if (horse.speed > 25) {
        console.log("this horse is super fast. Thay can run " + horseOne.speed + "m per hour!")
    } else {
        console.log("this horse runs at a top speed of " + horseOne.speed + ".")
    }
  }

  checkHorseSpeed(horseOne);
  checkHorseSpeed(horseTwo);
































