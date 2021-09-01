// 3.	צרו פונקציה שמקבלת מהמשתמש שם פרטי, שם משפחה וגיל. הפונקציה מדפיסה ללוג אובייקט של
// person עם השדות שם מלא, גיל ואימייל שמורכב מהשם הפרטי + "@jmail.com" והערכים שהתקבלו מהמשתמש .

// function printingemail(namePrompt, lastNamePrompt, agePrompt) {
//     var object = {
//         name:namePrompt,
//         lastName:lastNamePrompt,
//         age:agePrompt
//     }
//     console.log(object);
//     console.log(`${object.name}@gmail.com`);
// }

// printingemail(prompt("Enter firstName:"), prompt("Enter lastName:"), prompt("Enter age:"))

// =========================================================================================
// 5.	צרו פונקציה שמקבלת מהמשתמש שם רכב, חברה וסמק. הפונקציה מחזירה אובייקט של
// car עם השדות שם רכב, חברה, סמק, שנת ייצור (השנה שהאובייקט נוצר).

// var carInfoArray=[];
// buttonID.onclick=()=>{
//     var carInfo = {
//         color: carColor.value,
//         brand: carBrand.value,
//         smk: carSmk.value,
//         date: new Date()
//         }
//         carInfoArray.push(carInfo)
// };

// =========================================================================================

// 15.	צרו פונקציה שמקבלת שם מלא מהמשתמש.
// הפונקציה מדפיסה כמה תווים יש בשם.
// הפונקציה מדפיסה האם יש רווח בשם.

// function getFullName(userName) {
//   console.log(` the length is :  ${userName.length} char`);
//   for (let i = 0; i < userName.length; i++) {
//     if (userName[i] == " ") {
//       console.log(`the space is in index ${i}`);
//     }
//   }
// }

// getFullName("eden tasama");

// 16.	צרו פונקציה שמקבלת 2 סטרינגים ומחזירה האם הסטרינגים זהים בלי קשר לגודל האותיות. (toLowerCase)

// function getStringEqual(valueOne , valueTwo){
//     console.log( valueOne.toLowerCase() ,valueTwo.toLowerCase())
// }
// getStringEqual("TURTYUIRET", "JFHDJKSFHDJKS")

// function upperCase(valueOne , valueTwo){
//     return valueOne.toUpperCase() +" " + valueTwo.toUpperCase()
// }

// var x = upperCase("eden", "tasama");
// console.log(x);
// =========================================================================================

// 18.	צרו פונקציה שמקבלת שם פרטי ושם משפחה מהמשתמש.
// הפונקציה מדפיסה את השם הארוך יותר.

// function longestName(firstName , lastName){
//     var lengthName = firstName.length ;
//     var lengthLastName= lastName.length;
//     if(lengthName>lengthLastName){
//         console.log(`${firstName} is the longest char `);
//     }
//     if(lengthLastName>lengthName){
//         console.log(`${lastName} is the longest char `);
//     }

// }

// longestName("tal","ed")
// =========================================================================================
// 26.	כתבו פונקציה שמקבלת שם ותו,
// במידה והתו קיים בשם הפונקציה מחזירה את השם, אחרת היא מדפיסה הודעה מתאימה.

// function returnCharIfExist(string, char) {
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == char) {
//       return `${char} is exist in INDEX ${i+1} `;
//     }
//   }

//   alert("NOT EXIST");
// }

// var x = returnCharIfExist("edentasff dama", "f");
// console.log(x);

// =========================================================================================
// ,תרגילי Dom

// 6.	צרו פונקציה שמדפיסה לחלון "hello there".
// function printingHello(string) {
//     document.write(string)
// }

// printingHello("gsiiiiiii")

// 7.	צרו פונקציה שמדפיסה לחלון "hello there David".

// function printingHelloD(string) {
//     document.write(`Hello there ${string}`)    }

//     printingHelloD("eden");

// 8.	צרו פונקציה שמקבלת מהמשתמש שם. הפונקציה מדפיסה לחלון "hello there". ואת השם שהתקבל מהמשתמש.
// function printingToWindow(string) {
//     document.write(`Hello there ${string}`)
// }

// printingToWindow(prompt("Enter your name"));

// =========================================================================================
// 10.	צרו פונקציה שמקבלת מהמשתמש שם וגיל.
//  הפונקציה מדפיסה ל div עם id שיצרתם ב HTML את הערכים שהתקבלו מהמשתמש.

// function printing(string,age) {
//     divOfInput.innerText = `name : ${string} , age: ${age}`
// }

// printing("rrtrtrefcf" , 26);

// 12.	צרו פונקציה שמקבלת מהמשתמש שם וגיל.
//  הפונקציה מדפיסה לחלון את הערכים שהתקבלו מהמשתמש, המידע עטוף בתגית של div.

// function printingToWindow(name ,age) {
//     document.write(`<div>${name} , ${age}</div>`)
// }

// printingToWindow("eden" , 25)

// 16.	א. צרו פונקציה שמקבלת מהמשתמש שם פרטי.
//  הפונקציה מדפיסה לחלון את השם שהתקבל מהמשתמש, המידע עטוף בתגית של p עם id.
// ב.
//  צרו פונקציה נוספת שמקבלת שם משפחה, מוצאת את האלמנט p שנוצר ומוסיפה לו את השם משפחה.

// function getNameAddLast(nameFirst) {
//     document.write(`<p id="paraOfName">${nameFirst}</p>`);
// }

// getNameAddLast("fhdfhdfjhgdjhfgd");

// function getLastName(lastName) {
//     paraOfName.innerText += ` ${lastName}`
// }

// getLastName("uuuuuuuuuuuuuuuuu"):

// =========================================================================
// 22.	צרו פונקציה שמקבלת מהמשתמש צבע רכב, חברה וסמק.
// א.	הפונקציה יוצרת אובייקט של car עם השדות צבע רכב, חברה, סמק, שנת ייצור (השנה שהאובייקט נוצר).
// ב.	הפונקציה מדפיסה לאלמנטי div את המידע שבאובייקט הרכב שנוצר, כל שדה באלמנט נפרד.

// var arrayOfObject = [];
// function printingObject(color, brand, smk) {
//   var object = {
//     carColor: color,
//     brandCar: brand,
//     smkCar: smk,
//     date: new Date()
//   }
//   divId.innerHTML=`<p id="objectCarColor">${object.carColor}</p> <p>${object.brandCar}</p> <p>${object.smkCar}</p>`

//   ;
// }

// printingObject(prompt("Enter car"),prompt("Enter כגכג"),prompt("Enter כגכגכג"))

// =========================================================================

// 2.	יוצרים בו אלמנט של קלט, כפתור וטקסט.

// צרו מערך חדש של שם ואז גיל, מתוך המערכים הקודמים. דוגמה [גיל,שם,גיל,שם]
// var names = ["a", "b", "c", "d"];
// var age = [10, 20, 30, 40, 50];
// var mix = [];
// var j=0;

// for (let i = 0; i < names.length ; i++) {
//     mix.push(names[i],age[j++]);
//   }
//   console.log(mix);
// =========================================================================
function printingRightAfterTyping() {
  inputId.oninput = () => {
    paraId.innerText = inputId.value.toUpperCase();
  };
}

printingRightAfterTyping();

var counter = 0;

// buttonId.addEventListner("click" , function() {
//    counter++;
//   if (counter > 3) {
//     paraId.innerText = inputId.value.toLowerCase()
//   }})

buttonId.onclick=()=>{
  counter++;
  if (counter >= 3) {
        paraId.innerText = inputId.value
}}

