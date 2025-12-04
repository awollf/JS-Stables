//QUESTION 1 no need for brackets on return inside the function
function describeHorse(horseName, horseAge) {
  return horseName + " is " + horseAge + "!"
}

console.log(describeHorse("mark", 12));

//QUESTION2 - no need to name conditionals
// if (beansFed && charlieFed && StrawberryFed) {
//     console.log("All horses are fed!")
// } else {
//     console.log("Some horses still need food!")
// }

//QUESTION 3
let horseNames = ["beans", "Charlie", "Strawberry"]

// i=0 is where it starts -- subject -- i++ is repeat forward
for(let i=0; i < horseNames.length; i++) {
    console.log(horseNames[i]);
}

console.log(horseNames.length);

//EXTRA QUESTION
for(let i=1; i < 11; i++) {
    console.log(i)
}

//EXTRA QUESTION
for(let i=0; i < 4; i++) {
    console.log("Figma Sucks!")
}

// QUESTION 4 ** REVIEW
let beans = { 
    name: "beans",
    favSnack: "carrots",
    age: 10
}

console.log(beans.name);
console.log(beans.favSnack);
console.log(beans.age);

beans.isCool= true; 
console.log(beans);

// QUESTION 5 - functions can contain any data - object, loop, string REVIEW

function groomHorse(horseName, needsGrooming) {
if(needsGrooming) {
      return horseName + " needs grooming!"
}
else {
    return "Charlie is already groomed!"
    } 
}

let first = console.log(groomHorse("beans", false));
let second = console.log(groomHorse("Charlie", false));
let third = console.log(groomHorse("Strawberry", false));

// QUESTION 6 Array is in square brackets and you do not declare the variable
let stable = [
    {
        name: "beans",
        age: 12,
        isHungry: true,
    },
  {
        name: "charlie",
        age: 8,
        isHungry: false,
    },
  {
        name: "strawberry",
        age: 4,
        isHungry: true,
    }
]
   
function countHungryHorses(stable) {
// this is the variable that will keep count   
    let count= 0;
//go through all horses in the array
    for (let i = 0; i < stable.length; i++) {
// if the horse is hungry, increase count by 1         
        if(stable[i].isHungry) {
            count++; 
        }
    }
    return count;
}

let hungryCount=countHungryHorses(stable);
console.log(countHungryHorses(stable));

// EXTRA QUESTION 
//given an array of numbers, make a function that will go through it 
//and print "foo" for even numbers and print "bar" for odd numbers.

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function test(numArray) {
    for (let i = 0; i < numArray.length; i++) {

    }
}
if(myArr[i] % 2 === 0) {
    console.log("foo") {
        else 
    } {
console.log("bar");
}
}
test(myArr);

// QUESTION 7 
//a METHD IS A FUNCTION INSIDE AN OBJECT
const stable = {
    name: "Sunny Acres",
    horses: ["Beans", "Charlie", "Strawberry"],
    addHorse(horseName) {
  this.horses.push(horseName);      
    }
};
//access an object through a dot notation 
//SCENARIOS YOU USE EACH SKILL
// Git hub push steps
//push final stables

