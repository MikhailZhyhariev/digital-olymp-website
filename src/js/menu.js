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
