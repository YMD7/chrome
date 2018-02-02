document.addEventListener("DOMContentLoaded", function(event) {

  //--------------------------------
  // 中央画像のランダム表示
  //--------------------------------
  // 画像ファイル
  var pentosBgImages = [
    "pentos-01@500.png",
    "pentos-02@500.png",
    "pentos-03@500.png",
    "pentos-04@500.png",
    "pentos-05@500.png",
    "pentos-06@500.png",
    "pentos-07@500.png"
  ];
  // 画像数を上限としたランダムな数を作成
  var i = Math.floor(Math.random() * (pentosBgImages.length + 1));
  if (i == pentosBgImages.length) i = 0; // なんかランダムがうまくいかないので
  // 画像名
  var pentosBgImageName = pentosBgImages[i];
  // 画像パス
  var pentosBgImagePath = "images/" + pentosBgImageName;
  // 画像を持っているdiv要素を取得
  var container = document.getElementsByClassName('pentos-container')[0];
  // 背景画像を設定
  container.setAttribute("style", "background-image:url(\""+pentosBgImagePath+"\");");


  //--------------------------------
  // bodyの背景画像のランダム表示
  //--------------------------------
  // 画像ファイル
  var bodyBgImages = [
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
  var j = Math.floor(Math.random() * (bodyBgImages.length + 1)) ;
  if (j == pentosBgImages.length) j = 0; // なんかランダムがうまくいかないので
  // 画像名
  var bodyBgImageName = bodyBgImages[j];
  // 画像パス
  var bodyBgImagePath = "images/" + bodyBgImageName;
  // body要素を取得
  var body = document.getElementsByTagName('body')[0];
  // 背景画像を設定
  body.setAttribute("style", "background-image:url(\""+bodyBgImagePath+"\");");

});