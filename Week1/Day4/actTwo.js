let orderCount = 0;
let topping = [
    "pineapple",
    "ham",
    "tomato",
    "jalepino",
    "beef"
]
let thickness = [
    "deep pan",
    "thin and crispy"
]

const takeOrder = (top, thick) => {
    orderCount++;
    console.log(orderCount + `. ${thick} pizza with ${top}`);
}

while (orderCount < 3) {
    takeOrder(topping[Math.floor(Math.random() * topping.length)], thickness[Math.floor(Math.random() * thickness.length)]);
};