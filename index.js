//Problem:1  radianToDegree

      //Function declear with parameter
function radianToDegree(radian) {
      //  For checking input value is string
     if (typeof radian !== 'number') {
        return 'please enter a number';
    }
      //Degree converting calculation
    let degree = radian * 57.2958;
      // Use toFixed for taking two places after the decimal point.
    return parseFloat(degree.toFixed(2));
}
const radianValue = 199;
    //Function call with argument 
console.log(radianToDegree(radianValue));



//Problem:2  isJavaScriptFile

      //Function declear with parameter
function isJavaScriptFile(fileName) {
      //For checking input value is string
     if (typeof fileName !== 'string') {
        return 'please enter a string';
    }
      // Checking isJavaScriptFile endsWith method
    if (fileName.endsWith('.js')) {
        return true;
    } else {
        return false;
    }
}
const javaScriptfile = 'index.js';
      //Function call with argument 
console.log(isJavaScriptFile(javaScriptfile));



// Problem 3: oilPrice

    //Function declear with parameter
function oilPrice(digelQuantity, petrolQuantity, oktelQuantity) {
    //For checking input value is number
     if (typeof digelQuantity !== 'number'|| typeof petrolQuantity !== 'number'||typeof oktelQuantity !== 'number') {
        return 'please enter a number';
    }
    // all oil price declear
    const digelPrice = 114;
    const petrolPrice = 130;
    const oktelPrice = 135;
    
    //Total oil price calculation
    let totalDigelPrice = digelQuantity * digelPrice;
    let totalPetrolPrice = petrolQuantity * petrolPrice;
    let totalOktelPrice = oktelQuantity * oktelPrice;

    //Total price calculation
    let totalPrice = totalDigelPrice + totalPetrolPrice + totalOktelPrice;
    return totalPrice;
}

    //Function call with argument 
console.log(oilPrice(30,20,10));



// Problem 4: publicBusFare

       //Function declear with parameter
function publicBusFare(passengerNumber) {
     //For checking input value is number
     if (typeof passengerNumber !== 'number') {
        return 'please enter a number';
    }
    // all Capacity declear
    const busCapacity = 50;
    const microCapacity = 11;
    const ticketPrice = 250;
     
    // BusRemaining Passenger calculation
    let busRemaining = passengerNumber % busCapacity;
    // MicroBusRemaining Passenger calculation
    let microBusRemaining = busRemaining % microCapacity;

    //totalFare calculation
    let totalFare = microBusRemaining * ticketPrice;
    return totalFare;
}
    //Function call with argument 
console.log(publicBusFare(112));



// Problem 5: isBestFriend

      // Object declear
let bestFriend1 = {
    name: 'abul',
    friend:'babul'
}
let bestFriend2 = {
    name: 'babul',
    friend:'abul'
}
 
   //Function declear with parameter
function isBestFriend(bestFriend1, bestFriend2) {
    //For checking input value is number
     if (typeof bestFriend1 !== 'object'||typeof bestFriend2 !== 'object') {
        return 'please enter a object';
    }
    // Checking isBsetFriend with condition
    if (bestFriend1.name === bestFriend2.friend && bestFriend1.friend === bestFriend2.name) {
        return true;
    } else {
        return false;
    }
}

    //Function call with argument 
console.log(isBestFriend(bestFriend1, bestFriend2));



//  practice 01

//1.problem

// var harryGet = 1000;
// var apples = 400;
// var orange = 300;
// var totalBuy = apples + orange;
// console.log(totalBuy);
// var shopergiven = harryGet - totalBuy;
// console.log(shopergiven);

// //2.problem
// var math = 75.25;
// var bio = 65;
// var che = 80;
// var phy = 35.45;
// var ban = 99.50;
// var totalMarks = math + bio + che + phy + ban;
// var average = totalMarks / 5;
// console.log(average.toFixed(2));

// //3.problem
// var line1 = 'I am going to br';
// var line2 = 'an awesome web developer';
// var oneLine = line1 + ' ' + line2;
// console.log(oneLine);

// //4.problem
// var num = 119;
// var keep = 119 % 5;
// console.log(keep);


// //  practice 02
// //1.problem
// var fruits = ['Apple', 'Banana', 'orange'];
// console.log(fruits.indexOf('Banana'));
// fruits[1] = 'Mango';
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// console.log(fruits.push('Watermelon'));
// console.log(fruits);


// // 2.problem
// var Number = 96;
// var tom = 66;
// var jane = 95;
// var peter = 56;
// var john = 40;

// if (Number > 80) {
//    console.log('Grade A');
// } else if (Number > 60) {
//   console.log('Grade B');
//  }
//  else if (Number > 50) {
//   console.log('Grade C');
//  }
//  else if (Number > 40) {
//   console.log('Grade D');
//  }
//  else {
//   console.log('Grade F');
// }


// // 3.problem
// var num1 = 13;
// var num2 = 79;
// var num3 = 15;
// if (num1 > num2) {
//   if (num1 > num3) {
//       console.log('num1 largest number');
//   } else {
//     console.log(num3);
//    }
// } else {

//     if (num2 > num3) {
//        console.log('num2 largest number');
//      }
//   else {
    
//       console.log('num3 ');
//   }
// }

// // 4.problem
// var num = 7;
// var num2 = 8;
// var num3 = 9;
// if(num == num2 || num == num3 || num2 == num3){
//   console.log('iso');
// } else {
//   console.log('not');
// }


// // 5.problem
// var tk = 44;

// if (tk > 80) {
//   console.log('mac');
// } else if (tk > 60) {
//   console.log('gam');
// }
// else if (tk > 40) {
//   console.log('len');
// }
// else if (tk > 20) {
//   console.log('puran');
// }
// else  {
//   console.log('phon');
// }


// for (var i = 1; i < 39; i++){
//   console.log('mon mon mon');
// }
// for (var i = 581; i <=623; i+=2){
//   console.log(i);
// }
// for (var i = 412; i <=456; i+=2){
//   console.log(i);
// }
// for (var i = 58; i <= 98; i++){
//   console.log(i);
// }

// var array = ['html', 'css', 'bootstrap', 'tail', 'js'];
// for (var i = 0; i < array.length; i++){
//   console.log(array[i]);
// }

// var mobile = ['sumsang', 'nokai', 'hawya'];
// var pro = 0;
// while (pro < mobile.length) {
//   console.log(mobile[pro]);
//   pro++;
// }


// for (var i = 30; i <= 86; i++){
//   if (i > 44) {
//     break;
//     }
//   console.log(i);
// }


// // 6.problem
// var array = [11, 333, 55, 66, 222, 666];
// for (var i =0; i < array.length; i++){
//   if (array[i] > 200) {
//     continue;
//     }
//   console.log(array[i]);
// }

// // 7.problem
// var num = [4, 5, 7, 6, 8, 2, 4, 1, 15];
// console.log(num.indexOf(6));

// function movie(){
//   return "Din-The day";
//   return "Poran";
//   return "Hawa";
// }
// console.log(movie());


// const student1 = { name: "rafique", marks: 79, result: "A+" };
// console.log(student1.mark + 1);

// var marks = [13, 15, 14, 20, 18];
// console.log(typeof marks);


// const players = [
//  { name: { firstName: "Shakib", lastName: "Hasan" }, age: 34 },
//  { name: { firstName: "Tamim", lastName: "Iqbal" }, age: 32 },
//  { name: { firstName: "Mahmudullah", lastName: "Riyad" }, age: 36 },
//  { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38 },
// ];

// console.log(players.map((player) => player.name.firstName))


// const inches = 144;
// const feet = inches / 12;
// console.log(feet);


// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }
// const dada = 144;
// const dadaFeet = inchToFeet(dada);
// console.log(dadaFeet);


// function isEven(num) {
//     const remainder = num % 2;
//     if (remainder === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(221));



// sum of odd num
// function oddSum(nums) {
//     let oddnum = [];
//     for (let i = 0; i < nums.length; i++){
//          const index = i;
//         const element = nums[index];
//         if (element % 2 !== 0) {
//             console.log(index, element);
//             oddnum.push(element);
           
//         }
//     }
//     return oddnum;
// }
// function sumNum(nums) {
//     sum = 0;
//     for (let i = 0; i < nums.length; i++){
//          const index = i;
//         const element = nums[index];
//         if (element % 2 !== 0) {
//             sum = sum + element;
//         }
//     }
//     return sum;

// }
// const num = [2, 4, 3, 66, 7, 88,91];
// const oddn = oddSum(num);
// const oddNumSum = sumNum(oddn);
// console.log(oddNumSum);



// function leapYear(num) {
//     if (leapYear % 4 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const year = leapYear(2023);
// console.log(year);


// function myAge(num) {
//     if (myAge % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const age = myAge(22);
// console.log(age);


// function hours(hour) {
//     const mint = hour * 60;
//     return mint;
// }
// const getMint = hours(1);
// console.log(getMint);



// function hours(hour) {
//     const mint = hour * 3600;
//     return mint;
// }
// const getMint = hours(4);
// console.log(getMint);



// function foo() {
//     console.log('foo');
// }

// function bar() {
//     foo();
//     console.log('bar');
// }
// bar();



// function make_avg(a,b,c) {
//     const total = a + b + c;
//     const avg = total / 3;
//     return avg;
// }

// const num = make_avg(2, 2, 2);
// console.log(num);


// function factorial(num) {
//     let res = 1;
//     for(let i = 1; i <= num; i++){
//         res = res * i;
//     }
//       return res;
// }
// const nums=3
// const res = factorial(nums);
// console.log(res);


// function print(a, b, c){
//   return a+2;
//   return a*b;
//   return b*c+a;
// }
// console.log(print(1,2,3));



// const jim = 84;
// const dela = 99;
// const chinku = 77;
// function getMax()
// if (jim > dela && jim>chinku) {
//   console.log('jim get');
// } else if(dela>jim && dela>chinku){
//   console.log('dela get');
// } else {
//   console.log('chinku get');
// }


// let num1 = 22;
// let num2 = 44;
// let num3 = 51;
// function numMax(num1,num2,num3) {
//   return (Math.min(num1,num2,num3));
// }
// let num = numMax(33,55,77);
// console.log(num);


// function maxInArray(numbers) {
//    let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     console.log(element);
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }
// const height = [22, 144, 66, 11, 87, 99];
// const tall = maxInArray(height);
// console.log(tall);



// function maxInArray(numbers) {
//    let lowest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     console.log(element);
//     if (element < lowest) {
//       lowest = element;
//     }
//   }
//   return lowest;
// }
// const height = [22, 144, 66, 11, 87, 99];
// const tall = maxInArray(height);
// console.log(tall);



// function findLeapYear(arry) {
//    let num =[];
//   for (let i = 0; i < arry.length; i++){
//     const index = i;
//     const element = arry[index];
   
//     if (element % 4 === 0) {
//       num.push(element);
//     }
   
//   }
//   return num;
// }

// const arry = [2023, 2024, 2025, 2028, 2030];
// const leap = findLeapYear(arry);
// console.log(leap);


// function findOddSum(array) {
//   const oddNum =[];
//   for (let i = 0; i < array.length; i++){
//     const index = i;
//     const element = array[index];
//     if (element % 2 === 0) {
//       oddNum.push(element)
//     }
//   }
//   return oddNum;
// }
// function oddSum(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const index = i;
//     const element = nums[index];
//     sum = sum + element;
  
//   }
//   return sum;
// }
// const array = [5, 7, 8, 10, 45, 30];
// const odd = findOddSum(array);
// console.log(odd);
// const sum1 = oddSum(odd);
// console.log(sum1);



// function make_avg(array) {
//   let sum = 0;
//   let avg = 0;
//   for (let i = 0; i < array.length; i++) {
//     const index = i;
//     const element = array[index];
//     sum = (sum + element);
//     avg = sum / array.length;
//   }
//   return avg;
// }

// const num = [6, 6, 6];
// const arry = make_avg(num);
// console.log(arry);



// function add_even(num) {
//   if (num % 2 === 0) {
//     console.log('odd');
//   } else {
//     console.log('even');
//   }
// }
// const num = 32;
// const add = add_even(num);
// console.log(add);


// let signal ='red';
// switch (signal) {
//   case 'red':
//     console.log('danger');;
//     break;
//   case 'yellow':
//     console.log('stops');;
//     break;
//   case 'green':
//     console.log('cross');;
//     break;
//   default:
//     console.log('nothing');;
// }


// const number = -78;
// const answer = Math.abs(number);
// console.log(answer);


// var a = 2; var b = 3; if (a < b)
// { console.log("He"); }

// function multi(num) {
//     let res;
//     for (let i = 1; i <= 10; i++){
//         res = i * num;
//         console.log(res);
//     }
//     return res;
   
// }
// const num = 13;
// const numta = multi(num);
// console.log(numta);



// function upCase(str){
//     return str;
// }
// const str1 = 'wordOK';
// const str2 = upCase(str1.toLowerCase());
// console.log(str2);


// function fullName(fst, last) {
//     let res;
//     res = fst +' '+ last;
//     return res;
// }

// const newName = fullName('habul','kanto');
// console.log(newName);


// function square(num,exp) {
//     let num1 = Math.pow(num, exp);
//     return num1;
// }

// const square1 = square(5,2);
// console.log(square1);



// const pizza = {

//  toppings: ['cheese', 'sauce', 'pepperoni'],

//  crust: 'deep dish',

//  serves: 2

// }
// console.log(pizza.toppings[2]);


// function celToFer(num) {
//     let fer = (num - 32)*0.5 ;
//     return fer;
// }
// console.log(celToFer(33));


// function marks(num) {
//     if (num == 100) {
//         return ('A+');
//     } else {
//         return ('B');
//     }
   
// }

// const numta = marks(100);
// console.log(numta);


// let array = [3, 44, 11, 77];
// console.log(Math.min(...array));


// function area(h, w) {
//     let area = h * w;
//     return area;
// }
// console.log(area(2,3));






// function maxInArray(numbers) {
//    let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
//     console.log(element);
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }
// const height = [22, 144, 66, 11, 87, 99];
// const tall = maxInArray(height);
// console.log(tall);




// function area(a,b, h) {
//     let s = (a * b * h) / 2;
//     let area = Math.sqrt(s * ((s - a) * (s - b) * (s - h)));
//     return area;
// }
// console.log(area(2,2,2));



// function isPrime(num) {
//     for (let i = 2; i * i <= num; i++){
//         if (num % i === 0) {
//             return 'not prime';
//         }
//     }
//     return 'prime';
// }
// console.log(isPrime(11));



// const phones = [
//     {
//         name: 'samsung',
//         camera: 129,
//         storage: '12gb'
//     },
//     {
//         name: 'samsung2',
//         camera: 124,
//         storage: '124gb'
//     },
//     {
//         name: 'samsung3',
//         camera: 123,
//         storage: '123gb'
//     },
//     {
//         name: 'samsung4',
//         camera: 122,
//         storage: '122gb'
//     },
//     {
//         name: 'samsung5',
//         camera: 121,
//         storage: '121gb'
//     }
// ];
// function cheps(phones) {
//     let cheep = phones[0];
//     for (i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if (phone.camera < cheep.camera) {
//             cheep = phone;
//         }
//     } return cheep;
// }
// const mySelection = cheps(phones);
// console.log(mySelection);


// let sum=0;
// for( let i = 0; i<=3;i++){
//     sum = sum + i;
//     console.log(sum);
// }


// let name = 'Afsaaaaaa';
// const num = 88888;
// let ok = false;
// console.log(typeof ok);

// console.log(num);


// let num = 7;
// while (num <= 19) {
//     console.log(num);
//     num = num + 2;
// }



// let arry = [11, 22, 33, 44, 5, 6, 7];
// for (let i = 0; i < arry.length; i++){
    // let element = arry[i];
    // arry.splice(3, 1, 55, 66)
    // console.log(arry);
// }

// let arry = [11, 22, 33, 44, 5, 6, 7];
//  console.log(arry);


// let arry = [11, 22, 93, 44, 90, 6, 7];

// for (let i = 0; i < arry.length; i++) {
//     let element = arry[i];
//     if (element > 80) {
//         console.log(element);
//     }


// function threeNum(a, b, c) {
//     let multi = a * b * c;
//     return multi;
// }

// console.log(threeNum(2, 2, 2));


// let object = {
//     name: 'afsssss',
//     roll: 110,
//     add:'b block'
// }
// // object.add = 'c blk';
// console.log(object);


// function feetToInch(feet) {
//     let inch = 12 * feet;
//     return inch;
// }
// console.log(feetToInch(5.6));

// function centimeterToMeter(centimeter) {
//     let ToMeter = 0.01 * centimeter;
//     return ToMeter;
// }
// console.log(centimeterToMeter(5));


// function paperRequirements(frist,second,third) {
//     let fbook = 100*frist;
//     let sbook = 200*second;
//     let tbook = 300*third;
//     let total = fbook + sbook + tbook;
//     return total;
// }

// console.log(paperRequirements(1,1,1));


// function bestFriend(name) {
//     let friendLength = name;
//     for (let i = 0; i < name.length; i++){
//         let index = i;
//         let element = name[index];
//         if (element.length > friendLength.length) {
//             friendLength = element;
//         }
//     }
//     return friendLength;
// }


// let name = ['kolii', 'jotiiiiii', 'meet', 'akter', 'afsana'];
// console.log(bestFriend(name));




// function arrNum(arr) {
//     let nums = [];
//     for (let i = 0; i < arr.length; i++)
//     {
//         let element = arr[i];
//         if (element >= 0) {
//             nums.push(element);
//         } else {
//             break;
//         }
//     }
//     return nums;
// }
// const arr = [22,3,6,66 -44, 11, 66, -77];
// console.log(arrNum(arr));



// function maxInArray(numbers) {
//     let largest = '';
//     let secnd ='';
//   for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];
   
//     if (element > largest) {
//       largest = element;
//     }
//     }
//     for (let i = 0; i < numbers.length; i++) {
//     const index = i;
//     const element = numbers[index];

//     if (element < largest&& element>secnd) {
//       secnd = element;
//     }
//   }
//   return secnd;
// }
// const height = [22, 144, 66, 11, 87, 99];
// const tall = maxInArray(height);
// console.log(tall);



//   
let Friend1 = {
    name: 'abul',
    friend:'babul'
}
let Friend2 = {
    name: 'babul',
    friend:'abul'
}
 
   
function isBestFriend(Friend1, Friend2) {
   
     if (typeof Friend1 !== 'object'||typeof Friend2 !== 'object') {
        return 'please enter a object';
    }
  
    if (Friend1.name === Friend2.friend && Friend1.friend === Friend2.name) {
        return true;
    } else {
        return false;
    }
}

  
console.log(isBestFriend(Friend1, Friend2));






function oilPrice(digel, petrol, oktel) {
    
     if (typeof digel !== 'number'|| typeof petrol !== 'number'||typeof oktel !== 'number') {
        return 'please enter a number';
    }
   
    let totalDigelPrice = digel * 114;
    let totalPetrolPrice = petrol * 130;
    let totalOktelPrice = oktel * 135;

    let totalPrice = totalDigelPrice + totalPetrolPrice + totalOktelPrice;
    return totalPrice;
}

console.log(oilPrice(30,20,10));





     
function publicBusFare(public) {

     if (typeof public !== 'number') {
        return 'please enter a number';
    }
    
  
    let Passenger =public %50;
   
    let restPassenger = Passenger % 11;

  
    let Fare = restPassenger * 250;
    return Fare;
}
   
console.log(publicBusFare(55));


