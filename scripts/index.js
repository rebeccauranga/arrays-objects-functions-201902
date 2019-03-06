// Positive Numbers

function returnsPositiveNumbers(givenArray) {
    newArray = [];
    const positiveNumbers = givenArray.filter(num => {
        return num > 0;
    })
    newArray.push(positiveNumbers);
    return newArray;
}

/////////////////////////////////////////////////////

// Even Numbers

function returnEvenNumbers(givenArray) {
    newArray = [];
    const evenNumbers = givenArray.filter(num => {
        return num % 2 === 0;
    })
    newArray.push(evenNumbers);
    return newArray;
}

///////////////////////////////////////////////////////

// Square the Numbers

function squareTheNumbers(givenArray) {
    newArray = [];
    let squaredNumbers = givenArray.map(num => {
        return num * num;
    })
    newArray.push(squaredNumbers);
    return newArray;
}

////////////////////////////////////////////////////////

// Cities 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

function nameColdCities(givenArray) {
    newArray = [];
    givenArray.forEach(function (value) {
        if (value.temperature < 70)
        newArray.push(value.temperature);
    })
    return newArray;
}

//////////////////////////////////////////////////

// Good job

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

  people.forEach(function (name) {
      console.log(`Good job, ${name}!`)
  });

  /////////////////////////////////////////////////


// 3 times

function sayHello (words) {
    console.log("Hello, World!");
}
function call3Times(fun) {
    fun(sayHello);
    fun(sayHello);
    fun(sayHello);
  }

  ///////////////////////////////////////////////////

// N Times

function callNTimes (times, fun) {
    for (i = 0; i < times; i++)
        fun(sayHello);
}

///////////////////////////////////////////////////////

// Str Multiply

function strMultiply(str, times) {
    let arr = "";
    for (var i = 0; i < times; i++){
        arr += str;
    }
    return arr;  
}

///////////////////////////////////////////////////////

////////////// Bonus: Array Sorting //////////////////

// Sort an array



