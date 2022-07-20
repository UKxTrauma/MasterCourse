let offer = 'none';
let time = 1200;

const cafe = {
    name: 'Whitesheep',
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
    ],

    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry, no offer"
};

if (time < 1100) {
    offer = cafe.nreakfastOffer;
    console.log(offer);
} else if (time < 1500) {
    offer = cafe.lunchOffer;
    console.log(offer);
};
