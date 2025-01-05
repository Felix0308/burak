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
 * Traditional Api
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

function palindromCheck(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(palindromCheck("dad"));   // true
console.log(palindromCheck("son"));   // false