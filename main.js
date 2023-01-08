"use strict";
// console.log(1);
// let freu = "fre";
// console.log(freu);
// // alert("пошёл нахуй" );
// const gopert = 10;
// freu = "234";
// console.log(freu);
// const tyi = {
//     a: 50
// };
// tyi.a = "ret";
// console.log(tyi);
// // объект
// let sdf = {
//     name: "botis",
//     age: 23,
//     jir: "68kg"
// }

// sdf ["1234"] = "potr";
// console.log(sdf ["1234"])
// console.log(sdf.age);
// const b = "www";
// sdf["b"] = "frooooo";

// console.log(sdf["b"])
// // массив, он является разновидностью объекта
// let rtoa = ["der", "ver", "her",6,7 ];
// console.log(rtoa[3]);
// const result = confirm("вы готовы?");
// console.log(result);
// const answer = +prompt ("вам есть 18", "18");
// console.log(answer + 5);
// const answers = [];
// answers[0] = prompt(" Your name","");
// answers[1] = prompt(" Your family","");
// answers[2] = prompt(" Your age","");
// document.write(answers);
// console.log(typeof(answers));
// const category = ("toys");
// console.log (`https://someurl.com/${category}/5`);
// const user = 'ivan';
// alert(`привет ${user}`);
// let incr = 10,
//     decr = 10;
//     // incr++;
//     // decr--;
//     // console.log(incr++);
//     // console.log(decr--);
//     // console.log(5%2);

//     // console.log( 2*4 === '8');

//     const isChecked = true,
//     isClouse = false;
//     console.log(isChecked && isClouse )
//     console.log(2 + 2 * 2 === '6');
// const numberOfFilms =  +prompt('сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false,
// };
// const a = prompt('один из последних просмотренных фильмов?', ''),

//     b = prompt('на сколько оцените его?',''),
//     c = prompt('один из последних просмотренных фильмов?', ''),
//     d = prompt('на сколько оцените его?','');
//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
//     console.log(personalMovieDB );
// УСЛОВИЯЯЯЯ
// if (4 == 4){
//     console.log('ok!');
// }
// if (4 == 9){
//     console.log('ok!');
// }else{
//     console.log('error');
// };

// if (num < 10){
//     console.log(false)
// }else if(num> 100) {
//     console.log("много")
// }else {
//     console.log ('ok')
// }
// (num ===50) ? console.log('ok!') : console.log ( 'error');
// const num = 50;
// switch(num) {
// case 49:
//         console.log('неверное');
// break;
//     case 100:
//             console.log('неверное');
//     break;
//         case 51:
//                 console.log('в точку');
//         break;
//             default:
//                 console.log('не вв этот раз');
//             break;

// };

// const hamburger = false;
// const fries = true;
// if (hamburger && fries){
//     console.log('я сыт')
// };
// console.log((hamburger && fries));
// const hamburger = 3;
// const fries = 1;
// const colla = 0;
// console.log(hamburger === 3 && colla && fries);
// if (hamburger === 3 && fries){
//     console.log('all сыт')
// }else{
//     console.log('мы уходим')
// };
// console.log( 1 && 0); //ноль как первое неворное значение
// console.log( 1 && 5); // 5 как последнее число и оно верное выводится в консоль
// console.log(null && 6); // выводит null так как это сходу фалс
// // console.log(0 && 'dgdfgsd'); // тут тоже сразу с ходу фалс
// // const hamburger = 3;
// // const fries = 1;
// // const colla = 0;
// // const soda = 3;

// // if (hamburger ===3 && colla === 1 || fries === 1 && soda === 3){
// //         console.log('все довольны')
// //     }else{
// //         console.log('мы уходим')
// //     };
// //     console.log(hamburger ===3 && colla === 1 || fries && soda === 3 );
// //       let jon, mria, bob, sam = 'done';
// //       console.log (jon || mria || bob || sam);
// //       console.log( NaN || 2 || undefined );

// // console.log( NaN && 2 && undefined );

// // console.log( 1 && 2 && 3 );

// // console.log( !1 && 2 || !3 );

// // console.log( 25 || null && !3 );

// // console.log( NaN || null || !3 || undefined || 5);

// // console.log( NaN || null && !3 && undefined || 5);

// // console.log( 5 === 5 && 3 > 1 || 5);
// ///ЦЫКЛЫ
// // let num = 50;

// // while ( num < 55){console.log(num); num++;};
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while(num <=55);
// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);}

// };
// // *
// // **
// // ***
// // ****
// // *****
// // ******
// let result = '';
// const lenght = 7;
// first: for(let i = 0; i < 3; i++){
//     console.log(`first level: ${i}`);
//  for (let j = 0; j < 3; j++){
//     console.log(`second level: ${j}`);
//     for (let k = 0; k < 3; k++){
//         if (k === 2) continue first ;
//         console.log(`third level: ${k}`)
//          }

//     }
// };
// console.log(result);
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
//   };

//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     };
//   const a = prompt('один из последних просмотренных фильмов?', ''),

//     b = prompt('на сколько оцените его?',''),
//     c = prompt('один из последних просмотренных фильмов?', ''),
//     d = prompt('на сколько оцените его?','');
//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
// const numberOfFilms =  +prompt('сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//         count: numberOfFilms,
//         movies:{},
//         actors:{},
//         genres:[],
//         privat: false,
//     };
//     for( let i = 0; i < 2; i++){
//  const a = prompt('один из последних просмотренных фильмов?', ''),
//     b = prompt('на сколько оцените его?','');
//     if (a  != null && b != null && a != "" && b != "" && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else {
//         console.log ('error');
//         i--;
//     }
//     if (personalMovieDB.count < 10) {
//         console.log('просмотрено мало фильмов')
//     }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
//         console.log('вы классический зритель')}
//         else if(personalMovieDB.count >= 30  ){
//              console.log( 'вы киноман ')
//         }else {
//             console.log('произошла ошибка')
//         }

//     };
//     console.log(personalMovieDB );
// const numberOfFilms =  +prompt('сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB = {
//         count: numberOfFilms,
//         movies:{},
//         actors:{},
//         genres:[],
//         privat: false,
//     };
//     let i = 0;
//     while( i > 2){
//     i++;
//  const a = prompt('один из последних просмотренных фильмов?', ''),
//     b = prompt('на сколько оцените его?','');
//     if (a  != null && b != null && a != "" && b != "" && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else {
//         console.log ('error');
//         i--;
//     } if (personalMovieDB.count < 10) {
//         console.log('просмотрено мало фильмов')
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
//         console.log('вы классический зритель')}
//         else if(personalMovieDB.count >= 30  ){
//              console.log( 'вы киноман ')
//         }else {
//             console.log('произошла ошибка')
//         }

//     //ФУНКЦИИИ
//   //function declarathin
//     console.log(personalMovieDB );
//     let num = 10;
//     function showFirstMessage (text) {
//         console.log(text);
//          num = 20;

//     };
//     showFirstMessage('hello world');
// console.log( num);
// // function calc (a, b){
// //     return (a + b);

// // };
// // console.log(calc(4, 3));
// // console.log(calc(5, 4));
// // console.log(calc(6,23));
// function ret(){
//     let num = 50;
//     return num;

// }
// const anotherNumm = ret();
// console.log(anotherNumm);
// //function expression
// const logger = function( ){
//     console.log('hello');
// };
// logger();
// //стрелочные функции

// const calc =(a, b ) => {
//     console.log(1);
//     return a + b;
// };
// console.log(calc(5, 10));
// const usdCurr = 28;
// const eurCurr = 32;
// function convert(amount, curr){
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

// function bich(a, b){
//     z = a +b;
//     return z
// }

// console.log(bich(5, 6));
// function returnNeighboingNumbers(num){
//     return [num - 1, num, num + 1];

// }
// console.log(returnNeighboingNumbers(5));
// //методы и свойства строк и чисел
// const str = 'text';
// // const arr = [1, 2, 3];
// console.log(str.toL());
// console.log(str);

// let fruit = 'Some fruit';
// console.log (fruit.indexOf('o'));
// //ТУТ НАДО РАЗОБРАТЬСЯ
// // const logg = 'Hello world';
// console.log (logg.slice(6));
// //С ЭТИМ МЕТОДОММММ
// let rep = [1, 2, 3, 4, 5, 6, 7];
// rep.splice(2, 5, 'dod', 'bob')
// console.log(rep);
// //splise (первое значение место где начиется, второе сколько элементов вырезать, параметр то что хотим вставить)
// //сл. метод supstring
// let fffop = [1, 2, 3,4, 5, 6];
// console.log(fffop);
// const logg = 'Hello world';
// console.log(logg.substr(6,11));
// const num = 12.2;
// console.log(Math.round(num));
//  const test = '12.2px';
//  console.log(parseFloat(test));

//  let numberOfFilms;
//  function start(){
//     numberOfFilms =  +prompt('сколько фильмов вы уже посмотрели?', '');
//     while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ){
//         numberOfFilms =  +prompt('сколько фильмов вы уже посмотрели?', '');
//     }
//     start();

//  }

//  const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false,
// };
// let i = 0;
// while( i > 2){
// i++;
// const a = prompt('один из последних просмотренных фильмов?', ''),
// b = prompt('на сколько оцените его?','');
// if (a  != null && b != null && a != "" && b != "" && a.length < 50){
//     personalMovieDB.movies[a] = b;
//     console.log('done');
// }else {
//     console.log ('error');
//     i--;
// } if (personalMovieDB.count < 10) {
//     console.log('просмотрено мало фильмов')
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
//     console.log('вы классический зритель')}
//     else if(personalMovieDB.count >= 30  ){
//          console.log( 'вы киноман ')
//     }else {
//         console.log('произошла ошибка')
//     }

// };

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);
console.log(personalMovieDB);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
