'use strict';

// const PI = 3.141593;
// console.log(PI);
// PI = 25; // Uncaught TypeError: Assignment to constant variable.


// for (var i = 0; i <= 10; i++) {
//   // do smth.
// }
//
// console.log(i); // 11
//
// for (let j = 0; j <= 10; j++) {
//   // do smth.
// }
//
// console.log(j); // Uncaught ReferenceError: j is not defined


// {
//   let foo = 'bar'
//   console.log(foo);
// }
//
// console.log(foo); // Uncaught ReferenceError: foo is not defined


// let foo = () => { console.log(this) };
//
// foo(); // window
//
// var bar = new foo; // Uncaught TypeError: () => { console.log(this) } is not a constructor


// function add(x, y = 30, z = 20) {
//   return x + y + z;
// }
//
// add(1, 2, 3); // 6
// add(50); // 100


// function showFirstOther(name, age, ...other) {
//   console.log(other[0]);
// }
//
// showFirstOther("Volodymyr", 32, "Babeloper", 5); // Babeloper


// let foo = 'bar';
// let baz = [...foo]; // ["b", "a", "r"]
//
// console.log(baz);
//
// let boo = ['m', 'y', ...baz]; // ["m", "y", "b", "a", "r"]
// console.log(boo);

// var beer = {
//   name: 'Staropramen'
// }
//
// var logo = `Hello ${beer.name}`; // Hello Staropramen
// console.log(logo);


// var arr = [1, 10, 100, 1000];
//
// var [sec, min, hour, day] = arr;
//
// console.log(hour); // 100


// class Beer {
//   constructor(name) {
//     this.name = name;
//   }
//
//   drink() {
//     console.log('Drinking ' + this.name);
//   }
// }
//
// let staropramen = new Beer('staropramen');
// staropramen.drink(); // Drinking staropramen
//
//
// class BeerMix extends Beer {
//   constructor(name, juice) {
//     super(name);
//     this.juice = juice;
//   }
//
//   drink() {
//     console.log('Drinking ' + this.juice + ' with ' + this.name);
//   }
// }
//
// let beermix = new BeerMix('staropramen', 'lime');
// beermix.drink(); // Drinking lime with staropramen


// class Car {
//   constructor(name) {
//     this.name = name;
//     this._speed = 0;
//   }
//
//   get speed() {
//     return this._speed;
//   }
//
//   set speed(speed) {
//     this._speed = speed < 250 ? speed : 250;
//   }
// }
//
// var car = new Car('Audi');
//
// console.log(car.speed);
//
// car.speed = 60;
//
// console.log(car.speed);
//
// car.speed = 300;
//
// console.log(car.speed);
