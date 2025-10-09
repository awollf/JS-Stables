let horseOneName= "Pebbles";
let horseOneAge= 15;
let isHorseOneInStable= true;
let monthlyFee= 200;
let latePayment= monthlyFee * 1.2;
let welcomeMessage= "Welcome to my stables!"
let latePaymentMessage = "Unfortunately, your monthly bording fee is late. You now owe " + (monthlyFee + lateFee) + ". Please pay us immediately!"
let introduceHorseOne= "This is Pebbles! He is " + horseOneAge + "years old!"

let horses = {
    horseOne: {
        name: "Pebbles",
        age:15, 
        nickname: "Pebbs",
        favoriteTreat: "Carrots", 
        monthlyRent: 200,
        isInStable: true, 
        color: "Blue",
        canFly: true, 
        isHungry: true
    }
    horseTwo: {
        name: "Toffee",
        age: 12,
        nickname: "Tofu",
        favoriteTreat: "Crackers",
        monthlyRent: 300,
        isInStable: false,
        color: "Red",
        canFly: false,
        isHungry: true }
        
    horseThree: {
        name: "Sprite",
        age:6,
        nickname:"Spit",
        favoriteTreat:"Champagne", 
        monthlyRent: 200,
        isInStable:false,
        color: "Light Green",
        canFly:true,
        isHungry: false}
    }

    console.log(horseOne.isHungry);
    console.log(horseTwo.isHungry);
    console.log(horseThree.isHungry);

let horses = [horseOne, horseTwo, horseThree, horseFour, horseFive];
    console.log(horses);

