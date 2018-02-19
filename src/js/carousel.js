var carousel = document.querySelector('.carousel');
var list = carousel.querySelector('ul');

carousel.querySelector('#prev').onclick = function() {
    list.style.marginLeft = 0;
}

carousel.querySelector('#next').onclick = function() {
    list.style.marginLeft = -230 + 'px'
}
