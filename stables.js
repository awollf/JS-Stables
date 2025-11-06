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
