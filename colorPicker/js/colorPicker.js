// 色をクリックするとテキストの文言を変更
// 色をクリックするとカラーフィールドの色と背景色が変化する
const colorPicker = document.querySelector('#colorPicker')
const showColorCode = document.querySelector('#showColorCode')

colorPicker.addEventListener('input', function(e) {
  let color = e.target.value;
  document.body.style.backgroundColor = color;
  
  // 白と黒のカラーコードを指定するとテキストの文言にblack whiteを表示
  switch (color) {
    case "#000000":
      showColorCode.textContent = `カラーコード: ${color}` + "(black)";
      break;
    case "#ffffff":
      showColorCode.textContent = `カラーコード: ${color}` + "(white)";
      break;
    default:
      showColorCode.textContent = `カラーコード: ${color}`;
      break;
  }
  
});

