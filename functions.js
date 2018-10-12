// Practice: ChickenMonkey

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//   let word = ""
//   if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//     word = "chickenmonkey"
//     console.log(word);
//   } else if (currentNumber % 5 === 0) {
//     word = "chicken"
//     console.log(word);
//   } else if (currentNumber % 7 === 0) {
//     word = "monkey"
//     console.log(word);
//   } else {
//     console.log(currentNumber);
//   }
// }


// Practice: Take a Number - Battle of the Bands----

const bandNumber = 1

const takeNumber = function () {
  /*
      Write your awesome code here. See comments
      below for what should be returned.
  */

  return `${bandNumber}`

}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console


// Practice: Cookout ------------------------------
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];