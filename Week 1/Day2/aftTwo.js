let topping = 'meatballs'
 switch (topping) {
    case "meatballs":
    case "bacon":
        console.log(`${topping} is a meaty choice!`);
        break;
    case "tomato":
    case "sweetcorn":
        console.log(`${topping} is a beast of a vegetarian topper!`)
        break;
    case "pineapple":
        console.log(`${topping}? I believe some people would not approve your choice.`)
        break;
    default:
        console.log(`Your choice of ${topping} is not recognised by this tiny list of hard-coded toppings. Haha.`)
}