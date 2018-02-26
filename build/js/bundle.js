;(function() {
  var menu = document.querySelector('.menu');
  var list = menu.querySelector('.menu__list');
  var button = menu.querySelector('.menu__button');
  var triangle = menu.querySelector('.menu__triangle');

  if (window.innerWidth < 768) {
    var listCoord = list.getBoundingClientRect();
    var buttonCoord = button.getBoundingClientRect();
    var triangleCoord = triangle.getBoundingClientRect();

    list.style.display = 'none';
    list.style.left = (buttonCoord.width - listCoord.width) / 2 + 'px';
    list.style.top = 30 + 'px';

    triangle.style.left = (listCoord.width - triangleCoord.width) / 2 + 'px';
  }

  button.onclick = function() {
    if (list.style.display == 'none') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  };
})();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiOyhmdW5jdGlvbigpIHtcbiAgdmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICB2YXIgbGlzdCA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnVfX2xpc3QnKTtcbiAgdmFyIGJ1dHRvbiA9IG1lbnUucXVlcnlTZWxlY3RvcignLm1lbnVfX2J1dHRvbicpO1xuICB2YXIgdHJpYW5nbGUgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190cmlhbmdsZScpO1xuXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgIHZhciBsaXN0Q29vcmQgPSBsaXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBidXR0b25Db29yZCA9IGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgdHJpYW5nbGVDb29yZCA9IHRyaWFuZ2xlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgbGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxpc3Quc3R5bGUubGVmdCA9IChidXR0b25Db29yZC53aWR0aCAtIGxpc3RDb29yZC53aWR0aCkgLyAyICsgJ3B4JztcbiAgICBsaXN0LnN0eWxlLnRvcCA9IDMwICsgJ3B4JztcblxuICAgIHRyaWFuZ2xlLnN0eWxlLmxlZnQgPSAobGlzdENvb3JkLndpZHRoIC0gdHJpYW5nbGVDb29yZC53aWR0aCkgLyAyICsgJ3B4JztcbiAgfVxuXG4gIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxpc3Quc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcbiAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH07XG59KSgpO1xuOyhmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsJyk7XG4gICAgdmFyIGxpc3QgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNTY4KSB7XG4gICAgICBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcjcHJldicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsaXN0LnN0eWxlLm1hcmdpbkxlZnQgPSAwO1xuICAgICAgfVxuXG4gICAgICBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsaXN0LnN0eWxlLm1hcmdpbkxlZnQgPSAtMjQyICsgJ3B4J1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9XG59KSgpOyJdLCJmaWxlIjoiYnVuZGxlLmpzIn0=
