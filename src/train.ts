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

function getDigits(str: string): string {
  return str.replace(/\D/g, "");
}

// call
console.log(getDigits("m14i1t")); // "141"
console.log(getDigits("abc"));    // ""
console.log(getDigits("a1b2c3")); // "123"

// \D bilan raqam bo'lmagan belgilar topiladi.
// g (global flag)- butun string bo'ylab qo'llanadi.
// / — Regulyar ifoda chegaralari