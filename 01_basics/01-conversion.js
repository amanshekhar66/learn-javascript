let score = undefined;

let newScore = Number(score);
console.log(typeof newScore);
console.log(newScore);

// 33 => 33
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false =>0;
// null => 0
// undefined => NaN

let isLoggedin = undefined;
let newlog = String(isLoggedin);
console.log(newlog);

// 0 => false; 1 => true
// 5 => true
// "" => false; "Aman" => true
// null => false
// undefined => false

let val = 12;
let newVal = String(val);
console.log(newVal); // 12 => string value
console.log(newVal+5); // 125
console.log(newVal +5 +10) // 12510
console.log(5+10+newVal); // 1512

console.log(+true);
console.log(+"");