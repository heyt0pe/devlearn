const patients = [
    {
        firstName: "Tope",
        temperature: 97.5,
    },
    {
        firstName: "Paul",
        temperature: 97,
    },
    {
        firstName: "Yemi",
        temperature: 99,
    },
    {
        firstName: "Tobi",
        temperature: 92.8,
    },
];

function convertFtoC(f) {
    return (f - 32) * (5 / 9);
}

// for (let i = 0; i < patients.length; i++) {
//     const celsiusTemp = convertFtoC(patients[i].temperature);
//     if (celsiusTemp >= 37) {
//         console.log(
//             `%cPatient ${patients[i].firstName} has a temperature of ${celsiusTemp}°C. Temperature is too high`,
//             'color: orange;'
//         )
//     } else if (celsiusTemp < 36) {
//         console.log(
//             `%cPatient ${patients[i].firstName} has a temperature of ${celsiusTemp}°C. Temperature is too low`,
//             'color: orange;'
//         )
//     } else {
//         console.log(
//             `%cPatient ${patients[i].firstName} has a temperature of ${celsiusTemp}°C. Temperature is normal`,
//             'color: orange;'
//         )
//     }
// }

// const print = console.log

// const users = [
//     {
//         firstName: 'Tope',
//         dateOfBirth: 2002,
//     },
//     {
//         firstName: 'Tobi',
//         dateOfBirth: 1995,
//     },
//     {
//         firstName: 'Yemi',
//         dateOfBirth: 1992,
//     },
// ]

// function calculateAge(yearOfBirth){
//     const currentYear = new Date().getFullYear();
//     return currentYear - yearOfBirth;
// }

// for(let i = 0; i < users.length; i++){

//     let dateOfBirth = (2023 - users[i].dateOfBirth)

//     dateOfBirth = calculateAge(users[i].dateOfBirth)

//     print(dateOfBirth)
// }

// const fuelLevel = 80; //in litres

const places = [
    {
        place: "Ikeja",
        distance: 92, //147.2km
    },
    {
        place: "Oshodi",
        distance: 102, //163.2km
    },
    {
        place: "Mile 2",
        distance: 24, //147.2km
    },
];

// let fuelLevel = 80;

// for (let place of places) {
//     const maxTravel = fuelLevel * 2
//     const currentDistance = place.distance * 1.6
//     if (maxTravel >= currentDistance) {
//         const spare = maxTravel - currentDistance
//         console.log(`%cYou can travel to ${place.place} and you will have ${(spare / 2).toFixed(2)}L of fuel that can take you an additional ${spare.toFixed(2)}km`, 'color: orange')
//         // console.log(`%cYou can travel to ${place.place}, and you will have ${(spare / 2).toFixed(2)}L of fuel`, 'color: orange')
//     } else {
//         const difference = currentDistance - maxTravel
//         // console.log(`%cyou cannot travel to ${place.place}, you will need N${((difference / 2) * 600).toFixed(2)} to buy an additional ${(difference / 2).toFixed(2)}L of fuel in order to travel the remaining ${difference.toFixed(2)}km to reach your destination`, 'color: orange')
//         console.log(`%cyou cannot travel to ${place.place}`, 'color: orange')
//     }
// }

// function doubleNumber(x) {
//     return x * 2;
// }

// let num = 63;

// let newNum = doubleNumber(num);
// newNum = 126;

// let arr = [3, 8, 6];

// newNum = doubleNumber(arr[1]);

// newNum = 16;

// let obj = {
//     age: 40,
// };

// newNum = doubleNumber(obj.age);

// newNum = 80;

// function milesToKilometres(distance) {
//     return distance * 1.6;
// }

// let locations = [{ miles: 20 }, { miles: 56 }, { miles: 120, },];

// for (let i = 0; i < locations.length; i++) {

//     let currentKM = milesToKilometres(locations[i].miles);

//     console.log(currentKM);
// }


// let user = {
//     age: 18,
//     firstName: 'Tope'
// }


// fuelLevel = 30;

// function milesToKilometres(miles) {
//     return miles * 1.6
// }

// function fuelLevelToDistance() {
//     return fuelLevel * 2
// }




// const myName = 'Tope';

// myName;

// console.log(myName);


const weight = 100 //kg

const participants = [
    {
        fullName: 'Mike Tyson',
        weight: 216, //lbs
    },
    {
        fullName: 'Floyd Mayweather',
        weight: 250, //lbs
    },
    {
        fullName: 'Anthony Joshua',
        weight: 220, //lbs
    },
]

// 1kg = 2.2lbs
// 1kg = 1000 calories
// N1 = 3.5 calories


// console.log('%c You can fight Mike Tyson, because you weigh 2.6kg more than him. He needs N742 to buy 2,600 calories of food to catch up', 'color: orange');
// console.log('%c You cannot fight Floyd Mayweather, because he weighs 5.1kg more than you. You need N1,457 to buy 5,100 calories of food to catch up', 'color: orange');


// const actions = [
//     {
//         'action': 'deposit',
//         'amount': 150000,
//     },
//     {
//         'action': 'deposit',
//         'amount': 57200,
//     },
//     {
//         'action': 'withdraw',
//         'amount': 86200,
//     },
//     {
//         'action': 'deposit',
//         'amount': 71200,
//     }, {
//         'action': 'withdraw',
//         'amount': 813200,
//     },
// ];

// let balance = 1000

// function deposit(amount) {
//     balance += amount
// }

// function withdraw(amount) {
//     balance -= amount
// }

// function koboToNaira(kobo) {
//     return kobo / 100
// }

// for (let i = 0; i < actions.length; i++) {
//     let actionTaken = actions[i].action
//     let money = koboToNaira(actions[i].amount)
//     if (actionTaken == 'deposit') {
//         deposit(money)
//         console.log(`%c You have successfully deposited N${money} to your account, your balance is now N${balance}`, 'color: orange');
//     } else if (actionTaken == 'withdraw') {
//         if (money > balance) {
//             console.log(`%c Insufficient Funds! You cannot withdraw N${money} from your account, your balance is still N${balance}`, 'color: orange');
//         } else {
//             withdraw(money)
//             console.log(`%c You have successfully withdrawn N${money} from your account, your balance is now N${balance}`, 'color: orange');
//         }
//     }
// }


// const operations = [
//     {
//         operation: 'add',
//         number: 45,
//     },
//     {
//         operation: 'subtract',
//         number: 45,
//     },
//     {
//         operation: 'multiply',
//         number: 45,
//     },
//     {
//         operation: 'pow',
//         number: 45,
//     },
// ]


function subtract(a) {
    return a * 1000
}








