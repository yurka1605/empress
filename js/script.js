$(document).ready(function () {
    $('.masters__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    acardeonChange();
    $('.usluga__head').on('click', function () {
        const current = $(this).parent().data('num');
        $('.usluga').each((_, el) => {
            current === $(el).data('num') ? $(el).addClass('active') : $(el).removeClass('active');
        });
        acardeonChange();
    });
});

function acardeonChange() {
    $('.usluga').each((_, el) => {
        const height = ($(el).hasClass('active') ? $(el)[0].scrollHeight : $(el).children('.usluga__head').outerHeight()) + 'px';
        $(el).css('height', height);
    });  
}