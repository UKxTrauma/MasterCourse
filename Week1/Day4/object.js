// const person = {
//     name: "Brett",
//     age: 28,
//     movies: ["A New Hope", "Anything from Marvel"],
// };

// let array = [['water', 1],['pepsi', 1.50],['coke', 1.75]
// ];

// console.log(array[0][0]);

// console.log(person.movies[0]);

// const drinks = {
//   age:[
//     3,
//     10,
//     18,
//     20
//   ]
// }
// console.log(drinks.age.findIndex(checkAge));

// function checkAge(drink) {
//   return drink < 18;
// };

// const dataBlock = {
//   branch: "McDonalds Branch № 1024",
//   arrayA: [
//       ["Coke Med", 1.50],
//       ["Coke Lrg", 2.00],
//       ["Sprite Med", 1.35],
//       ["Sprite Lrg", 1.80],
//       ["Oasis Med", 1.15],
//       ["Oasis Lrg", 1.65]
//   ],
//   arrayB: [
//       ["Chicken Nuggets", 2.80],
//       ["Cheese Burger", 2.00],
//       ["Mc Flurry", 1.20],
//       ["Fries Med", 1.00],
//       ["Fries Lrg", 1.40],
//       ["Apple Pie", 1.00]
//   ]
// };


// console.log(`${dataBlock.arrayA[3][1]+dataBlock.arrayB[1][1]}`);

// const coffeeShop = { //object

//   name: "Tim Hortons",

//   branch: "Wilmslow Park, Unit 7 Wilmslow Rd",

//   drinks: [["Dark Roast Coffee", 2.29], //multi array1 drinks and price
//           ["Latte", 3.19],
//           ["Hot Chocolate", 3.49]],

//   foods: [["Crispy Chicken Wrap Meal", 7.99],//multi array2 food and price
//           ["Tims Classic Burger Meal", 8.49],
//           ["Tuna Melt Meal", 7.49]],

//       drinksOrdered (item, price){ //method 1
//           return drink = this.drinks[item][price];
//       },
//       foodOrdered (item, price){ //method 2
//           return food = [`${this.foods[item][price]}`];
//       }
// };

// console.log(`${(coffeeShop.drinksOrdered(0,1)), (drink+drink)}`);

const coffeeShop = { //object

  name: "Tim Hortons",

  branch: "Wilmslow Park, Unit 7 Wilmslow Rd",

  drinks: [["Dark Roast Coffee", 2.29], //multi array1 drinks and price
          ["Latte", 3.19],
          ["Hot Chocolate", 3.49]],

  foods: [["Crispy Chicken Wrap Meal", 7.99],//multi array2 food and price
          ["Tims Classic Burger Meal", 8.49],
          ["Tuna Melt Meal", 7.49]],

      drinksOrdered (item, price){ //method 1
          return this.drinks [item][price];
      },
      foodOrdered (item, price){ //method 2
          return this.foods[item][price];
      }
};

let Order = coffeeShop.drinksOrdered(0,1) + coffeeShop.drinksOrdered(1,1) + coffeeShop.drinksOrdered(1,1);


console.log(Order);