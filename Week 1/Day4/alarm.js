let day = '';
let alarm = '';

const obj = {
    weekendAlarm: "No alarm needed.",
    weekdayAlarm: "Get up at 7am.",
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
};

function randomDay () {
    day = (obj.days[Math.floor(Math.random() * obj.days.length)]);
};
randomDay();

obj.weekdays = obj.days.splice(1,5);

if (obj.days.includes(day)) {
    alarm = obj.weekendAlarm;
} else if (obj.weekdays.includes(day)) {
    alarm = obj.weekdayAlarm;
} else {
    console.log('ERROR');
};

console.log(day+':', alarm);