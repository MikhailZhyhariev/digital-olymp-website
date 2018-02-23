;(function () {
  try {
    var carousel = document.querySelector('.carousel');
    var list = carousel.querySelector('ul');

    if (window.innerWidth < 568) {
      carousel.querySelector('#prev').onclick = function() {
          list.style.marginLeft = 0;
      }

      carousel.querySelector('#next').onclick = function() {
          list.style.marginLeft = -242 + 'px'
      }
    }
  } catch (err) {
    console.log(err)
  }
})();
