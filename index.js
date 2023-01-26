//First js code

let person = {
    name: 'Mosh',
    age: 30
};

person.age = 15; 

person['age'] = 20;

console.log(person.age);

let selectedColors = ['red', 'green'];

selectedColors[2] = 10;
selectedColors[3] = person;

console.log(selectedColors);
console.log(selectedColors[2]);

//performing a task 
function greet(name1, lastName) {
    console.log('hello ' + name1 + ' ' + lastName);
}

greet('sara', 'bell');
greet('john');
greet('helen');

//Calculates 

function square(n) {
    let squared = n*n;
    if (squared >= 10) {
        console.log('greater than 10')
    }
    else {
        console.log("no")
    }

}

square(5);

function max(a, b) {
    return a > b ? a : b;
}

let myNum2 = max(6, -2);
console.log(myNum2);

function fizzBuzz(inp) {
    if (typeof inp !== 'number') {
        console.log('Not a number')
    }

    if ((inp % 3 === 0) && (inp % 5 === 0)) {
        console.log('FizzBuzz');
    } else if (inp % 3 === 0) {
        console.log('Fizz');
    } else if (inp % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(inp);
    }

}

fizzBuzz(10);



function createHappy(myVal, name) {
    return {
        myVal,
        name, 
        log() {
            console.log( name + ' is happy at ' + myVal);
        }
    };

}

const person1 = createHappy(4, 'sara');
const person2 = createHappy(7, 'bob');
person1.log();
person2.log();

function CreateSad(myVal, name) {
    this.myVal = -myVal;
    this.log = function () {
        console.log('I sad');
    }
}

const sadperson1 = new CreateSad(5, 'sam');

sadperson1.log();


function showAddress(address) {
    for (let key in address){
        console.log(address[key]);
    }
}


let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

let address2 = {
    street: 'd',
    city: 'e',
    zipCode: 'f'
};

let address3 = {
    street: 'g',
    city: 'h',
    zipCode: 'i'
};

function show_all(arr) {
    for (i in arr) {
        showAddress(arr[i]);
    }
}


function createAddress(street, city, zipCode) {
    return{
        street, 
        city,
        zipCode
    };
}

function CreateAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode; 
}

let add1 = new CreateAddress('Al', 'lol', 'a636');
let add1dup = new CreateAddress('Al', 'lol', 'a636');
let add2 = createAddress('cl', 'dol', 'b636');
let add3= createAddress('el', 'fol', 'q636');
let add1dup2 = add1;


show_all([add1, add2, add3]);

function areEqual(ad1, ad2){
    for (key in ad1) {
        if (ad1[key] !== ad2[key]) {
            return false;
        }
    }
    return true;
}

let compare = areEqual(add1, add1dup);
console.log(compare);

let compare2 = areEqual(add1, add2);
console.log(compare2);

function areSame(ad1, ad2) {
    return (ad1 === ad2) ? true : false;
}

let compareSame = areSame(add1, add1dup);
console.log(compareSame);

let compareSame2 = areSame(add1, add1dup2);
console.log(compareSame2);

//title
//body
//author
//views
//comments
// (author, body)
// is Live

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 0,

    comments:  [
    {author: 'lol', body: 'yes', },
    {author: 'tl', body: 'yews', }
    ],

    isLive: true
};

console.log(post);

function MakePost(title, body, author) {
        this.title = title;
        this.author = author;
        this.views = 0;
        this.comments = [];
        this.isLive = false;
}

let post2 = new MakePost('me,', 'hiiii', 'yuh');
console.log(post2);

const numbers = [3, 4];
//const does not stop us from modifying the contents of an array

numbers.push(5, 6);

numbers.unshift(1, 2);

numbers.splice(0, 3, 19, 20);

console.log(numbers);


function arrayFromRange(min, max) {
    myArray = [10];

    i = 0; 

    while (i < max) {
        myArray.push(min)
        min += 1; 
    }
    return myArray

}


const numbers1 = arrayFromRange(-5, 3);

//console.log(numbers1);