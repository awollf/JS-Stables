let horseOneName = "Pebbles";
let horseOneAge = 15;
let isHorseOneInStable = true;
let monthlyFee = 200;
let latePayment = monthlyFee * 1.2;

let welcomeMessage = "Welcome to my stables!";
let latePaymentMessage = "Unfortunately, your monthly boarding fee is late. You now owe $" + latePayment + ". Please pay us immediately!";
let introduceHorseOne = "This is " + horseOneName + "! He is " + horseOneAge + " years old!";

let horses = {
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
  },
  horseThree: {
    name: "Sprite",
    age: 6,
    nickname: "Spit",
    favoriteTreat: "Champagne",
    monthlyRent: 200,
    isInStable: false,
    color: "Light Green",
    canFly: true,
    isHungry: false,
  },
};

// Access individual horses for easier logging
let { horseOne, horseTwo, horseThree } = horses;

console.log(horseOne.isHungry);
console.log(horseTwo.isHungry);
console.log(horseThree.isHungry);

// Create an array of horses
let horseList = [horseOne, horseTwo, horseThree];
console.log(horseList);

// LAB 2
let usedStalls = 3;
let totalStalls = 6;

function checkAvailableStalls(total, used) {
  let available = total - used;
  console.log("There are " + available + " stalls available.");
  return available;
}

let availableStalls = checkAvailableStalls(totalStalls, usedStalls);
console.log("Available stalls: ", availableStalls);

function calculateLatePayment(horse) {
  return horse.monthlyRent * 1.2;
}

console.log("Late payment for Sprite: $" + calculateLatePayment(horseThree));

function getNickname(horse) {
  return horse.nickname;
}

console.log("Toffee's nickname: " + getNickname(horseTwo));

// _______________________________________________________________

let horse = {
name: "Pebbles",
color: "purple",
age: 3,
nickname: "Pebsi",
intro: function() {
  console.log("This horse's name is " 
    + this.name + 
    " but you can call her " 
    + this.nickname + "!");
}
};

//INTRODUCTION is a method function

horseNamedBeans.intro();

console.log(horse);

//DECLARATION - passing 2 things through this function
function horseIntro(name, nickname) {
  console.log("This horses name is" + name + ", but you can call her " + nickname + "!")
}

function horseIntro(horseToIntroduce) {
  console.log("This horses name is" + horseToIntroduce.name + ", but you can call her " + horseToIntroduce.nickname + "!")
}
horseIntro(horseNamedPebbles);

//INVOCATION - replaces original perameters ^^
horseIntro("Thunder", "Flash");

function createHorse(horseName, horseNickname)
{
const obj = {};
obj.name = horseName;
obj.nickname= horseNickname;
obj.intro = function () {
  console.log("welcome, " + horseName);
};
return obj;
}

let horseNamedShadow = createHorse("shadow", "shade");
console.log(horseNamedShadow)


let horses= [];
let message = "Welcome to the Jungle";
let latePayment = 50;
let stallsAvailable = 8;

let Horse = function(name, nickname, favouriteTreat, age, 
  monthlyRent, location, canFly, colour) {
      this.name = name;
      this.nickname = nickname;
      this.favouriteTreat = favouriteTreat;
      this.age = age;
      this.monthlyRent = monthlyRent;
      this.location = location;
      this.canFly = canFly;
      this.colour = colour;
      this.introduction = function () {
        let message = "My horse's name is " + this.name + ". He is "
         + this.age + "years old. His favourite treat is " + this.favouriteTreat + " .";
    console.log(message); 
      };

this.canFly = function (canFly) {
console.log(this.canFly);
     };
};

let horse1 = new Horse("Rocky", "the rock", "dirt", 12, 200, true, true, "grey");
let horse2 = new Horse("Grinch", "Grinchy", "onions", 14, 1000, false, false, "green");
let horse3 = new Horse("Ruby", "Uby", "Gemstones", 2000, 20, false, true, "iridecent");

horses.push(horse1); 
horses.push(horse2);
horses.push(horse3);

let horse4 = {
  name: "Tree",
  nickname: "Bark",
  favouriteTreat: "Sunlight",
  age: 400,
  monthlyRent: 50,
  location: false, 
  canFly: false,
  colour: "Brown",

  introduction: function (){
    let message = "My horse's name is " 
    + this.name + ". He is "
         + this.age + "years old. His favourite treat is " 
         + this.favouriteTreat + " .";

    console.log(message);
}, 

  canFly: function() {
    console.log(this.canFly);
  }
};

horses.push(horse4);

horses[0].isHungry = true;
horses[1].isHungry = true;
horses[2].isHungry = false;
horses[3].isHungry = true; 

stallsAvailable = stallsAvailable - horses.length;

if (stallsAvailable < 2) {
  console.log("We need to build more stalls");
} else {
  console.log("We have " + stallsAvailable + " available!")
}

function latePaymentCost(horse, lateFee) {
    let total = horse.monthlyRent + lateFee;
    console.log("Late! You owe " + total + " dollars total.");
}
latePaymentCost(horse1, latePayment);

for (let i = 0;i < horses.length; i++){
  if(horses[i].favouriteTreat === "water") {
    console.log("Horse does not like it")
  } else {
    console.log("Yay");
       break; 
  }
}

function getHorseNickname(horse) {
  return horse.nickname; 
}
let coolNickname = getHorseNickname(horses[2]);
console.log(coolNickname);

function canHorseFly(horse) {
   if (horse.canFly > 100) {
    console.log("this horse can fly");
   } else {
      console.log("this horse is lame");
    }
   }
canHorseFly(horses[0]);

function moveHorseOutside(stable) {
  for (let i = 0; i < stable.length; i++) {
      if (stable[i].location === true) stable[i];
      if (currentHorse.location === true) {
        console.log("Go outside");
horses[i].location = false;
      }
  }
}

for (let i = 0; i < horses.length; i++) {
  horses[i].flipLocation = function () {
    this.location = !this.location;
  }
}

console.log(horse1.location);
horse1.flipLocation();
console.log(horse1.location);

function feedHorses(horses) {
   for (let i=0; i < horses.length; i++) {
          if (horses[i].location === false) {
            horses[i].flipLocation();
      }
      console.log("come inside and eat");
   }
}

feedHorses(horses);

function updateHorsesLocation(horses, isGettingDark) {
  for (let i = 0; i < horses.length; i++) {
    if(horses[i].location === true) {
      console.log("Go outside to the sun");
      horses[i].location = false;
    }
    if(horses[i].location === false && isGettingDark === true) {
       horses[i].flipLocation();
       console.log("It's late, come inside");
    }
  }
}


