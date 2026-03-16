// id名で取得
// idで取得　js-title
console.log(document.querySelector("#js-title").
outerHTML); 
console.log(document.getElementById("js-title").
outerHTML);
// classで取得 .text
console.log(document.querySelector(".text").outerHTML);
// 一致する全てのクラス名を表示
const elements = document.querySelectorAll(".text");

elements.forEach((element) => {
  console.log(element.textContent);
});

for (element of elements ) {
  console.log(element.innerText);
};

// タグ名で取得
console.log(document.querySelector("h1").outerHTML);
// 属性で取得
console.log(document.querySelector('[href="https://www.daily-trial.com/"]').outerHTML);


