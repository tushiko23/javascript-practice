// alert("Hello World!");
// console.log("1 + 2");
// const score = 96


// let firstName = "太郎"
// let lastName = "山田"
// console.log(`${lastName} ${firstName}`);

// 円周率を求める計算と関数を扱う
// 変数 面積 半径　
// 定数 円周率
// console.log(); で出力
const PI = 3
let radius = 6
let circleArea = radius * radius * PI
console.log(circleArea);

// 関数で円周率を求める計算
function calcCircleArea (radius) {
  const PI = 3
  let circleArea = radius * radius * PI
  return circleArea
}

console.log(calcCircleArea(5));

function addNumbers (num1, num2) {
  return num1 + num2
}

console.log(addNumbers(5, 6));


