//ナビの固定

window.addEventListener('scroll',
  () => document.querySelector('#navigation')
  .classList.toggle('colored', window.scrollY > 50)
)

//ナビの固定

//カルーセル//
var mySwiper = new Swiper ('.swiper-container', {
  slidesPerView:1,//画像を何枚表示するか
  speed: 800,
  spaceBetween: 10,//何ピクセル画像の間隔をあけるか
  centeredSlides : true,//見切らせたい場合メイン画像をセンターにもってくるか
  //自動再生する場合
  autoplay: {
  delay: 4000, //4秒後に次の画像に代わる
  },
  loop: true,//最後の画像までいったらループする
  //ページネーションをつける場合
  pagination: {
   el: '.swiper-pagination',
   type: 'bullets',
   clickable: true,
  },
  //左右のナビゲーションをつける場合
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
  }
 });
//カルーセル//

//トップへ戻るボタン

  const pagetopBtn = document.querySelector('#page-top');
  pagetopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  window.addEventListener('scroll',
  () => document.querySelector('#page-top')
  .classList.toggle('top-btn', window.scrollY > 250)
)
//トップへ戻るボタン

//ハンバーガーメニュー//
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.sp');
 
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')
  if (btn.innerHTML === 'メニュー') {
    btn.innerHTML = '閉じる';
  } else {
    btn.innerHTML = 'メニュー';
  }
});
