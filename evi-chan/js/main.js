document.addEventListener("DOMContentLoaded", function(event) {

  // 画像ファイル
  var bgImages = [
    "birds-in-the-city.png",
    "blue-blosoom.png",
    "carmine-flowers.png",
    "cerulean-lemon.png",
    "cotton-watermelon.png",
    "define-skull.png",
    "english-green.png",
    "feldgrau-lemon.png",
    "gold-christmas-week.png",
    "iceberg-cookies.png",
    "jordy-christmas-week.png",
    "kobi-cookies.png",
    "mustard-diamonds.png",
    "purple-blossom.png",
    "riga.png",
    "spiraea-thunbergii.png",
    "sunset-diamonds.png",
    "violet-watermelon.png",
    "white-diamonds.png",
    "yellow-cookies.png"
  ];
  // 画像数を上限としたランダムな数を作成
  var i = Math.floor(Math.random() * (bgImages.length + 1));
  if (i == bgImages.length) i = 0; // なんかランダムがうまくいかないので
  // 画像名
  var bgImageName = bgImages[i];
  // 画像パス
  var bgImagePath = "images/" + bgImageName;
  // body要素を取得
  var body = document.getElementsByTagName('body')[0];
  // 背景画像を設定
  body.setAttribute("style", "background-image:url(\""+bgImagePath+"\");");

});