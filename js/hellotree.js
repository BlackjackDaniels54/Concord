$('.search-icon').on('click', function() {
    $('.search-menu-wrapper').addClass('show');
});

$('.burger-icon').on('click', function() {
    $('.nav-menu-wrapper').hasClass('show') ? 
                        $('.nav-menu-wrapper').removeClass('show') :
                        $('.nav-menu-wrapper').addClass('show');
});
$('.search-menu-wrapper .closer-btn, .nav-menu-wrapper .closer-btn').on('click', function() {
    console.log('Here it is');
    $(this).parent().removeClass('show');
});
$('ul.lower li.sub').on('click', function(e) {
    $(this).find('ul').slideToggle();
})

$('.insights-index .latest-insights-box').hover(function() {
    $(this).find('.insight-box').find('p').slideToggle('fast');
});

$('.carousel-item').hover(function() {
    $(this).find('.carousel-caption').find('p').slideToggle('fast');
});

$('.link_to_insight').on('click', function() {
    var curindex = $('.link_to_insight').index($(this));
    console.log($(this).data-slug);
    $('.insights-page .latest-insights-box').removeClass('active');
    if ($('.insight-content').eq(curindex).is(':visible')) {
        $('.insight-content').eq(curindex).slideToggle(650);
        //$('.insights-page .latest-insights-box').eq(curindex).toggleClass('active');
    } else {
        $('.insight-content').hide();
        $('.insight-content').eq(curindex).slideToggle(650);
        //$('.insights-page .latest-insights-box').eq(curindex).toggleClass('active');
        $([document.documentElement, document.body]).animate({
            scrollTop: $('.insights-page .latest-insights-box').eq(curindex).offset().top - 52
        }, 400);
    }
});

$(document).ready(function() {
    // $('img.insight-closer').on('click', function() {
    //     console.log(111);
    //     $(this).closest('.insight-content').slideToggle(650);
    //     $('.insights-page .latest-insights-box').removeClass('active');
    // });
    $(document).on('click','img.insight-closer',function() {
        $(this).closest('.insight-content').slideToggle(650);
        $('.insights-page .latest-insights-box').removeClass('active');
    });
});


$(document).on('click', 'a[href="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 250);
});
$('.carousel').carousel({
    interval: false
});





//viewport
$(window).scroll(function() {
  $('.fade-in').each(function(){
    var top_of_element = $(this).offset().top;
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $(this).addClass('show');
    }
  });

}).scroll();