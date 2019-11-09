//forEach, map and filter practice

//array of numbers and total of all the numbers

numbers = [1, 2, 3, 4, 5];
let sum = 0;


function totalNumbers(num) {
    return sum += num;
}

numbers.forEach(totalNumbers);
console.log(sum);


//array of numbers keeping only numbers greater than 100

numbers2 = [2, 102, 14, 214, 356];

function greaterThanHundred(num) {
    if (num>100) {
        return true;
    }
}

console.log(numbers2.filter(greaterThanHundred));

// array of numbers returning only even numbers

numbers3 = [5, 6, 8, 12, 567];

function selectEven(num) {
    if (num%2 === 0) {
        return true;
    }
}

console.log(numbers3.filter(selectEven));

//array of names with initial small letter, return with capital letter

names = ["dan", "tom", "helen", "samantha"];

function capitalFirst(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

console.log(names.map(capitalFirst));
 

//array of names keeping only names longer than 5 characters

names2 = ["dan", "tom", "helen", "samantha"];

function longerThanFive(name) {
    if (name.length > 5) {
        return true;
    }
}

console.log(names2.filter(longerThanFive));

//array of numbers, return only whole numbers

numbers4 = [1, 1.5, 2, 2.5];

function selectWhole(num) {
    if (num %1 === 0) {
        return true;
    }
}

console.log(numbers4.filter(selectWhole));

//array of numbers summing up only whole numbers

numbers5 = [1, 1.5, 2, 2.5];
let sum1 = 0; 

function sumWhole(num) {
    if (num % 1 === 0) {
        return sum1 += num;
    }
}

numbers5.filter(sumWhole);
console.log(sum1);

//array of numbers including decimals, count decimal numbers

numbers6 = [1, 1.5, 2, 2.5];
let sum2 = 0;

function countDecimal(num) {
    if (num %1 === 0) {
        return sum2 +=1;
    }
}

numbers6.filter(countDecimal);
console.log(sum2);

//array of numbers returning square of the numbers

numbers7 = [1, 2, 3, 3.5];

function returnSquare(num) {
    return num*num;
}

console.log(numbers7.map(returnSquare));

//object of people, return array of just names

people = [
    {
        name: "Mary",
        age: 22,
        profession: "doctor"
    },
    {
        name: "Susan",
        age: 35,
        profession: "product manager"
    },
    {
        name: "Helen",
        age: 13,
        profession: "pupil"
    }
];

function returnName(people) {
    return people["name"];
}

console.log(people.map(returnName));

//object of people. return array with people 18 years or more

people1 = [
    {
        name: "Mary",
        age: 22,
        profession: "doctor"
    },
    {
        name: "Susan",
        age: 35,
        profession: "product manager"
    },
    {
        name: "Helen",
        age: 13,
        profession: "pupil"
    }
];

function returnOverage(people1) {
    if (people1.age > 18) {
        return true;
    }
}

console.log(people1.filter(returnOverage));

//count how many people are lawyers in an array of objects of people

people2 = [
    {
        name: "Mary",
        age: 22,
        profession: "lawyer"
    },
    {
        name: "Susan",
        age: 35,
        profession: "lawyer"
    },
    {
        name: "Helen",
        age: 13,
        profession: "pupil"
    }
];

let sum3 = 0;

function returnLawyer(people2) {
    if (people2.profession === "lawyer") {
        sum3 += 1;
    }
}

people2.forEach(returnLawyer);
console.log(sum3);
