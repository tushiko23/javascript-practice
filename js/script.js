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
// const PI = 3
// let radius = 6
// let circleArea = radius * radius * PI
// console.log(circleArea);

// // 関数で円周率を求める計算
// function calcCircleArea (radius) {
//   const PI = 3
//   let circleArea = radius * radius * PI
//   return circleArea
// }

// console.log(calcCircleArea(5));

// function addNumbers (num1, num2) {
//   return num1 + num2
// }
// console.log(addNumbers(5, 6));

// let message;
// function hello () {
//   message = "こんにちは" //グローバルスコープ
// }

// hello();
// console.log(message);

// let score = 91;
// // スコアが89越えの場合最高
// if ( score > 89 ) {
//   console.log("最高");
// }
// // スコアが89以上の場合、"89以上"
// if ( score >= 89 ) {
//   console.log("89以上");
// }
// // スコアが89の場合 "89点"
// if ( score === 89) {
//   console.log("89点");
// }

// // スコアが60未満の場合頑張ろう
// if ( score < 60 ) {
//   console.log("頑張ろう");
// }

// // スコアが89でない場合 "89点ではない"
// if (score !== 89 ) {
//   console.log("89点ではない");
// }

// // スコアが20越えかつ90未満の場合　"20越えかつ90未満"
// if (score > 20 && score < 90) {
//   console.log("20越えかつ90未満");
// }

// // スコアが89または0の場合 "89または0"
// if (score === 89 || score === 0) {
//   console.log("89または0");
// }

// // スコアが89の場合　頑張ったね　それ以外の場合　頑張ろう
// if (score === 89) {
//   console.log("頑張ったね");
// } else {
//   console.log("頑張ろう");
// }

// // スコアが89越えの場合　頑張ったね
// // それ以外の場合で、スコアが30越えの場合 "まあまあ"
// // それ以外の場合 頑張ろう
// if (score > 89 ) {
//   console.log("頑張ったね");
// } else if (score > 30 ) {
//   console.log("まあまあ");
// } else {
//   console.log("頑張ろう");
// }

// // スコアが0以上かつ100以内の場合で
// // スコアが89越えの場合　"頑張ったね"　それ以外の場合　"頑張ろう"
// if (score >= 0 && score <= 100 ) {
//   if (score > 89) {
//     console.log("頑張ったね");
//   } else {
//     console.log("頑張ろう");
//   }
// }

// スコアが1なら1 2なら2 10なら10 その他ならその他と表示
let score = 4;
if (score === 1) {
  console.log("1");
} if (score === 2) {
  console.log("2");
} if (score === 10) {
  console.log("10");
} else {
  console.log("その他");
}

switch (score) {
  case 1:
  console.log("1");
  break;

  case 2:
  console.log("2");
  break;

  case 10:
  console.log("10");
  break;

  default:
  console.log("その他");
  break;
}

