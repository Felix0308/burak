// console.log("Hello World!");

// **********************************************************************
// TASK H:

// Raqamlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12".

// function getPositive(arr: number[]): string {
//     return arr.filter(num => num > 0).join("");
// }

// console.log(getPositive([1, -4, 2]));         // "12" bu yerda 1 va 2 musbat son bo'lgani uchun ularni birlashtirib berdi
// console.log(getPositive([-1, -2, -3]));    // "" bu yerda musbat son yo'q, hammasi manfiy
// console.log(getPositive([5, 0, 10]));      // "510" barchasi musbat son
// console.log(getPositive([]));              // "" bu bo'sh array bo'lgani uchun

// **********************************************************************
// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin

// MASALAN: getDigits("m14i1t") return qiladi "141"

// function getDigits(str: string): string {
//   return str.replace(/\D/g, "");
// }

// // call
// console.log(getDigits("m14i1t")); // "141"
// console.log(getDigits("abc"));    // ""
// console.log(getDigits("a1b2c3")); // "123"

// \D bilan raqam bo'lmagan belgilar topiladi.
// g (global flag)- butun string bo'ylab qo'llanadi.
// / — Regulyar ifoda chegaralari

// **********************************************************************
// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(arr: number[]): number {
//   return arr.sort()[Math.floor(arr.length / 2)];
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// **********************************************************************

/* Project Standards:
  - Logging standards
  - Naming standards
      function, method, variable => CAMEL     goHome
      class => PASKAL                         MemberService
      folder, file => KEBAB            
      css => SNAKE                            button_style
  -Error handling
 */

/**  Request:
 * Traditional Api (form POST) => html ni o'zini elementlari orqali amalga oshiriladigon request: form elementi orqali backendga qilinadigon POST requesti
 * Rest Api
 * GraphQl Api
 * ...
 */

// **********************************************************************
// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str: string): string {
//   return str.split(" ").sort((a, b) => b.length - a.length)[0];
// }

// console.log(findLongestWord("I come from Uzbekistan")); // "Uzbekistan"

// *************************************************************************************************

/* Frontend ni develop qilish jarayoni 2 xil:
    - Traditional Frontend Development => boshqacha nomi - SSR (BSSR) (burak adminka aplication) => EJS fayli orqali quriladi
    - Modern Frontend Development      => boshqacha nomi - SPI  (burak user aplication)    => REACT library foydalaniladi
  
 */

// *************************************************************************************************
// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(str: string): number {
//     const vowels = "aeiouAEIOU";
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//             count++;
//         }
//     }
//     return count;
// }

// *************************************************************************************************
// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib
// va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";

// function reverseSentence(str: string): string {
//     return str
//         .split(' ')                                      // Stringni so‘zlarga ajratamiz
//         .map(word => word.split('').reverse().join(''))  // Har bir so‘zni teskari o‘giramiz
//         .join(' ');                                      // So‘zlarni bo‘sh joy bilan qayta birlashtiramiz
// }

// console.log(reverseSentence("we like coding"));    // "ew ekil gnidoc"

// *************************************************************************************************
/*  Cookies:
   request join
   self destroy
*/

/*  Validation:
   Frontend validation => frontend da malumotlarni to'g'ri kiritilayotganini tekshiradi.
   pipe validation     => backend va frontend oralig'idagi serverga kirish oralig'idagi validation
   Backend validation  => 
   Database validation => 


*/

// *************************************************************************************************
// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam
// uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
// hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(arr: number[]): { number: number; square: number }[] {
//   return arr.map((num) => ({ number: num, square: num * num }));
// }

// console.log(getSquareNumbers([1,2,3]));

// *************************************************************************************************
// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
// orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str: string): boolean {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(palindromCheck("dad"));   // true
// console.log(palindromCheck("son"));   // false

// *************************************************************************************************
// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi
// sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(array: any[]): number {
//   let sum = 0;

//   for (let element of array) {
//     if (typeof element === "number") {

//       sum += element;
//     } else if (typeof element === "string" && !isNaN(Number(element))) {

//       sum += Number(element);
//     } else if (
//       typeof element === "object" &&
//       element !== null &&
//       "son" in element &&
//       typeof element.son === "number"
//     ) {

//       sum += element.son;
//     }
//   }

//   return sum;
// }

// //call
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

// *************************************************************************************************
// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: Record<string, any>): [string, any][] {
//     return Object.keys(obj).reduce<[string, any][]>((acc, key) => {
//         acc.push([key, obj[key]]);
//         return acc;
//     }, []);
// }

// // call
// console.log(objectToArray({ a: 10, b: 20 })); // [['a', 10], ['b', 20]]

// *************************************************************************************************
// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string.
// Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true;
//         hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty<T extends object>(obj: T, str: string): boolean {
//   return str in obj;
// }

// // call
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// *************************************************************************************************
// TASK R

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.

// function calculate(expression: string): number {
//   const [a, operator, b] = expression.split(" ");
//   const num1 = parseFloat(a);
//   const num2 = parseFloat(b);

//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num2 !== 0 ? num1 / num2 : NaN; // => Nolga bo'lishdan saqlanish
//     default:
//       throw new Error("Invalid operator");
//   }
// }

// console.log(calculate("1 + 3")); // 4
// console.log(calculate("10 - 2")); // 8
// console.log(calculate("4 * 5")); // 20
// console.log(calculate("8 / 2")); // 4

// *************************************************************************************************
// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi
// tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }
//   return nums.length;
// }

// console.log(missingNumber([3, 0, 1]));

// *************************************************************************************************
// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

// console.log(result);

// *************************************************************************************************
// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi
// faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function sumOdds(number: number): number {
//   let count = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(sumOdds(9));
// console.log(sumOdds(11));

// *************************************************************************************************
// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

// function countChars(str: string): Record<string, number> {
//   const result: Record<string, number> = {};
//   for (let char of str) {
//     result[char] = (result[char] || 0) + 1;
//   }

//   return result;
// }

// console.log(countChars("hello"));

// *************************************************************************************************
// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin.
// Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray<T>(array: T[], size: number): T[][] {
//   let result = [];
//   while (array.length) {
//     result.push(array.splice(0, size));
//   }
//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// *************************************************************************************************
// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin.
//  Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin
//  (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// function countOccurrencesIterative(obj: Record<string, any>, target: string): number {
//     let count = 0;
//     const stack = [obj];

//     while (stack.length > 0) {
//         const currentObj = stack.pop();
//         if (currentObj) {
//             for (const key in currentObj) {
//                 if (key === target) {
//                     count++;
//                 }
//                 if (typeof currentObj[key] === "object" && currentObj[key] !== null) {
//                     stack.push(currentObj[key]);
//                 }
//             }
//         }
//     }

//     return count;

// }

// const data2 = { model: 'Bugatti', steer: { model: 'HANKOOK', size: 30 } };
// console.log(countOccurrencesIterative(data2, 'model'));

// *************************************************************************************************
// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin.
//  Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//     return arr1.filter(num => arr2.includes(num));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// *************************************************************************************************
// TASK Z

// Shunday function yozing. Bu function sonlardan iborat arrayqabul qilsin.
// Function'ning vazifasi array tarkibidagi juft sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya berilayotgan array tarkibidagi sonlar ichidan
// faqatgina juft bo'lgan sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

// 1-usul: For loop bilan
// function sumEvensForLoop(numbers: number[]): number {
//     let sum = 0;
//     for (let num of numbers) {
//         if (num % 2 === 0) {
//             sum += num;
//         }
//     }
//     return sum;
// }

// console.log(sumEvensForLoop([1, 2, 3]));
// console.log(sumEvensForLoop([1, 2, 3, 2]));

// 2-usul: Filter va reduce bilan
// function sumEvensFilterReduce(numbers: number[]): number {
//    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
// }

// console.log(sumEvensFilterReduce([1, 2, 3]));
// console.log(sumEvensFilterReduce([1, 2, 3, 2]));

// *************************************************************************************************
// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin.
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// function sortByAge(arr: { age: number }[]): { age: number }[] {
//     return arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge([{ age: 23 }, { age: 21 }, { age: 13 }]));

// *************************************************************************************************
// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function qabul parametrni
// selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(0));

// *************************************************************************************************
// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va
// berilgan 1-parametr numberga teng indexni array ichidan topib
// 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeNumberInArray(
//   target: number,
//   arr: number[],
//   newValue: number
// ): number[] {
//   const newArr = [...arr];
//   const index = newArr.indexOf(target);
//   if (index !== -1) {
//     newArr[index] = newValue;
//   }
//   return newArr;
// }

// // call
// console.log(changeNumberInArray(1, [1, 3, 7, 2], 2));

// *************************************************************************************************
// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida 
// takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

function removeDuplicate(str: string): string {
    return [...new Set(str)].join('');
}

console.log(removeDuplicate('stringg'));
