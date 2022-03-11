// ******************************
//  JavaScriptの処理
// ******************************

//ボタン
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

//クリックイベントを追加
scroll_to_top_btn.addEventListener('click', scroll_to_top);

function scroll_to_top(){
  window.scroll({top: 0, behavior: 'smooth'});
};

//スクロール時のイベントを追加
window.addEventListener( 'scroll' , scroll_event );
function scroll_event(){
  if(window.pageYOffset > 400){
    scroll_to_top_btn.style.opacity = '1';
  }else if(window.pageYOffset < 400){
    scroll_to_top_btn.style.opacity = '0';
  }
};

//Jquery(debug)
// $("h1").html("jQueryの動作確認です");

//ハンバーガーメニュで、メニューを選択したらハンバーガーを非表示
$(function() {
  $('#menu-content li a').on('click', function(event) {
    $('#menu-btn-check').prop('checked', false);
  });
});
