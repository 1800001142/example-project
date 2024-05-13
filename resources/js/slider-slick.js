$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});

var functionListerClick = function() {
    // get all implement has class bg-hidden
    let bgHidden = document.querySelectorAll('.image-bg');
// get data-slick-index implement has class slick-active
    let slickActive = document.querySelector('.slick-active');
    let slickActiveIndex = slickActive.getAttribute('data-slick-index');
    let bgHiddenIndex = bgHidden[slickActiveIndex];
// get data-url of implement bgHiddenIndex
    if (bgHiddenIndex) {
        var bgHiddenUrl = bgHiddenIndex.dataset.src;
        // set background-image for body
        document.body.style.backgroundImage = `url(${bgHiddenUrl})`;
    }
}

// on click implement has class slick-slide
$('.slick-slide').click(function() {
    functionListerClick();
});

functionListerClick();
