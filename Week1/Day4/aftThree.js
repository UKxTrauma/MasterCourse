const coffeeShop = {
    branch: "McDonalds Branch № 1024",
    drinks: [
        ["Coke Med", 1.50],
        ["Coke Lrg", 2.00],
        ["Sprite Med", 1.35],
        ["Sprite Lrg", 1.80],
        ["Oasis Med", 1.15],
        ["Oasis Lrg", 1.65]
    ],
    food: [
        ["Chicken Nuggets", 2.80],
        ["Cheese Burger", 2.00],
        ["Mc Flurry", 1.20],
        ["Fries Med", 1.00],
        ["Fries Lrg", 1.40],
        ["Apple Pie", 1.00]
    ],
    getOrder (){
        drink = this.drinks[Math.floor(Math.random() * this.drinks.length)];
        drinkIndex = this.drinks.indexOf(drink);
        actualDrink = this.drinks[drinkIndex][0];
        drinkPrice = this.drinks[drinkIndex][1];
        food = this.food[Math.floor(Math.random() * this.food.length)];
        foodIndex = this.food.indexOf(food);
        actualFood = this.food[foodIndex][0];
        foodPrice = this.food[foodIndex][1];
        total = drinkPrice + foodPrice;
        total = (Math.round(total * 100) / 100).toFixed(2);
        drinkPrice = (Math.round(drinkPrice * 100) / 100).toFixed(2);
        foodPrice = (Math.round(foodPrice * 100) / 100).toFixed(2);
        console.log(`\n${this.branch}\nYour order:\n\n${actualDrink} - £${drinkPrice}\n${actualFood} - £${foodPrice}\n\nTotal: £${total}`);
    }
};

coffeeShop.getOrder();