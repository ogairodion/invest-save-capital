import LazyLoad from "vanilla-lazyload";
import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import fancybox from "@fancyapps/fancybox";

global.$ = global.jQuery = $;
window.fancybox = $.fancybox;

// eslint-disable-next-line no-unused-vars
const lazyLoadInstance = new LazyLoad({});
  

let sections = $('section'),
    sectionScroll,
    scrollTop,
    headerHeight = $(".header").height();

scrollTop = $(window).scrollTop();

sections.each(function(i){
    if (i == 1) {
        sectionScroll = $(this);
    }
});

if (scrollTop < sectionScroll.offset().top) {
    $('.arrow-up').addClass('hidden');
} else {
    $('.arrow-up').removeClass('hidden');
}

$('.dropdown-top').on('click', function() {
    let wrapper = $(this).closest('.dropdown');
    
    if (!$(wrapper).hasClass('open')) {
        $('.dropdown').removeClass('open');
        $(wrapper).toggleClass('open');
    } else {
        $(wrapper).removeClass('open');
    }
});

$('.arrow-up').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(window).on('scroll', function() {
    scrollTop = $(window).scrollTop();
    
    if (scrollTop < sectionScroll.offset().top) {
        $('.arrow-up').addClass('hidden');
    } else {
        $('.arrow-up').removeClass('hidden');
    }
});

$("a.scroll").on("click" , function() {  
    let link = $(this);
    $("html, body").animate({
      scrollTop: $(link.attr("href")).offset().top - headerHeight + "px"
    }, {
        duration: 800
    });
    if ($(window).width() < 767) {
        burger();
    }
    return false;
});
