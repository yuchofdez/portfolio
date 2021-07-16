$(function(){
    $('#slick-box').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        autoplay: true,
        autoplayspeed: 5000,
        centerMode: true,
        centerPadding: '102px',
        responsive:[
            {
                breakpoint:767,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });
});
$(function(){
$('.faq-item .question').on('click', function(){
    $(this).next().slideToggle();
    return false;
});
});
$(function(){
    $('#nav-btn').on('click', function(){
        $(this).toggleClass('-active');
        $('#mobile-nav').toggleClass('-active');
    });
});

$(function(){
    AOS.init();
});

