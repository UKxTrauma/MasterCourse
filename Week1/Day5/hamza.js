const coffeeShop = { //object

    name: "Tim Hortons",

    branch: "Wilmslow Park, Unit 7 Wilmslow Rd",

    OrderType: ["Eat in","Takeout"],

    drinks: [["Dark Roast Coffee", 2.29], //multi array1 drinks and price
            ["Latte", 3.19],
            ["Hot Chocolate", 3.49]],

    foods: [["Crispy Chicken Wrap Meal", 7.99],//multi array2 food and price
            ["Tims Classic Burger Meal", 8.49],
            ["Tuna Melt Meal", 7.49]],

        drinksTotalOrdered (item, price){ //method 1
            return this.drinks [item][price];
        },
        foodTotalOrdered (item, price){ //method 2
            return this.foods[item][price];
        }
};



console.log(`\n${coffeeShop.name} \n\n${coffeeShop.branch}\n
${coffeeShop.OrderType[1]}\n
Your Order is:\n1 x ${coffeeShop.drinksTotalOrdered(0,0)} £${coffeeShop.drinksTotalOrdered(0,1)}
2 x ${coffeeShop.drinksTotalOrdered(1,0)} £${coffeeShop.drinksTotalOrdered(1,1)}
1 x ${coffeeShop.foodTotalOrdered(0,0)} £${coffeeShop.foodTotalOrdered(0,1)}
1 x ${coffeeShop.foodTotalOrdered(2,0)} £${coffeeShop.foodTotalOrdered(2,1)}\n\n
Grand Total: £${coffeeShop.drinksTotalOrdered(0,1) + coffeeShop.drinksTotalOrdered(1,1) + coffeeShop.drinksTotalOrdered(1,1) + coffeeShop.foodTotalOrdered(0,1) + coffeeShop.foodTotalOrdered(2,1)}`)