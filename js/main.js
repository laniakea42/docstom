// wow = new WOW({
//     boxClass:     'wow',      
//     animateClass: 'animated', 
//     offset:       0,          
//     mobile:       false,       
//     live:         true        
// })
// wow.init();

function sliders() {
    var time = 3;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;
    

    $slick = $('.slider');
    $slick.slick({
        arrows: true,
        autoplay: false,
        speed: 1200,
        dots: true,
        draggable: false,
        swipe: false,
        // touchMove: false,
        customPaging: function (slider, i) {
            console.log(slider);
            return (i + 1) + '<span> / '+slider.slideCount+'</span>';
        }
    });

    $bar = $('.slider-progress .progress');

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 30);
    }

    function interval() {
        if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            $slick.slick('slickNext');
            startProgressbar();
        }
        }
    }

    function resetProgressbar() {
        $bar.css({
        width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();

    $('.slick-next, .slick-prev').click(function() {
        startProgressbar();
    });

    $slick1 = $('.slider1');
    $slick1.slick({
        arrows: true,
        speed: 1200,
        dots: true,
        draggable: false,
        accesibility: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        customPaging: function (slider, i) {
            console.log(slider);
            return (i + 1) + '<span> / '+slider.slideCount+'</span>';
        }
    });
    

    $('.cat--unit__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cat--unit__nav'
    });
    $('.cat--unit__nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.cat--unit__for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
}



$('.docs-slider').slick({
    arrows: true,
    autoplay: false,
    speed: 1200,
    dots: true,
    draggable: false,
    swipe: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // touchMove: false,
    customPaging: function (slider, i) {
        console.log(slider);
        return (i + 1) + '<span> / '+slider.slideCount+'</span>';
    },
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 533,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$slick2 = $('.certificate-slider');
$slick2.slick({
    arrows: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 9400,
    dots: true,
    draggable: false,
    swipe: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // touchMove: false,
    customPaging: function (slider, i) {
        console.log(slider);
        return (i + 1) + '<span> / '+slider.slideCount+'</span>';
    },
    responsive: [
        {
            breakpoint: 533,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$slick3 = $('.docs-rews-slider');
$slick3.slick({
    arrows: true,
    autoplay: false,
    speed: 1200,
    dots: true,
    draggable: false,
    swipe: false,
    // touchMove: false,
    customPaging: function (slider, i) {
        console.log(slider);
        return (i + 1) + '<span> / '+slider.slideCount+'</span>';
    }
});


sliders();

$(function(){
    $('.open--modal').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.modal .close, .modal__layer').on('click', function(){
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $('.nav--btn').on('click', function(){
        if ($('header .nav').is(':visible')) {
            $('header .nav').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .nav').slideDown();
            $(this).addClass('open');
        }
        return false;
    });

    $('.faq__title').on('click', function(){
        $(this).next().slideToggle().not(this).parent().siblings().children('.faq__txt').slideUp().siblings().removeClass('open');
        $(this).toggleClass('open');
    });

    $('.tel').inputmask('+7 (999) 999-99-99');

    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.5, 
        no_overlay: true, 
        move_with_handle_only: true,  
        click_to_move: false 
    });
    

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(".qt input[type=text]").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('.phone--btn').on('click', function(){
        $('.phones').slideDown();
        $('.close').on('click', function(){
            $(this).parent().slideUp();
            return false;
        });
        return false;
    });

    $(".scroll").mCustomScrollbar({
        axis: 'x',
    });

    
$('.ctf-input').focus(function() {
    $(this).siblings('.redstar').hide();
});

$('.ctf-input').blur(function() {
    if ($(this).val().trim() === '') {
        $('.redstar').show();
    }
});



    easydropdown.all();
});

$(window).on("load",function(e){
    if ($(window).width() <= '1025'){
        $('header .submenu > a').on('click', function(){
            $(this).next().slideToggle();
            $('.preload').addClass('load').removeClass('loadR');
            return false;
        });
        $('header .submenu > a').attr('href', '#');
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp();
        });
        $('.nav > ul > li a').on('click', function(){
            $('.nav').slideUp();
            $('.nav--btn').removeClass('open');
        });
    } else {
        $('header .submenu > a').on('mouseover', function(){
            $(this).next().fadeIn();
        });
        $('.submenu__block').on('mouseleave', function(){
            $(this).fadeOut();
        });
    }
});

setTimeout(function(){
    $('.preload').addClass('load');
    wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       false,       
        live:         true        
    })
    wow.init();
}, 600);

$('a:not([href^="mailto\\:"], [href$="\\#"], [href^="tel\\:"], [target="_blank"], [data-fancybox], [data-anch])').click(function(e) {
    var anchor = $(this), h;
    h = anchor.attr('href');
    e.preventDefault();
    setTimeout(function(){
        window.location = h;
    }, 250);
    $('.preload').addClass('loadR');
});

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};

$(function(){
    
    $('[data-anch]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top-70
            }, 1200);
            return false;
          }
        }
      });

    $(window).scroll(function(){
        var bo = $(this).scrollTop();
        var a = $(".btn--up").css('opacity')
        if ( bo >= 200 && a == 0) {$(".btn--up").stop().animate({'opacity':'1'},400)};
        if ( bo < 200 && a == 1) {$(".btn--up").stop().animate({'opacity':'0'},400)};
    });
});

var lastId,
    topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()-22
    menuItems = topMenu.find("a"),  
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

$(window).scroll(function(){
   var fromTop = $(this).scrollTop();
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop) 
       return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});



    /**
    * Merge two or more objects. Returns a new object.
    * @private
    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
    * @param {Object}   objects  The objects to merge together
    * @returns {Object}          Merged values of defaults and options
    */
    const extend = function ()  {

        let extended = {};
        let deep = false;
        let i = 0;
        let length = arguments.length;

        /* Check if a deep merge */
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }

        /* Merge the object into the extended object */
        let merge = function (obj) {
            for (let prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    /* If deep merge and property is an object, merge properties */
                    if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        /* Loop through each object and conduct a merge */
        for (; i < length; i++) {
            let obj = arguments[i];
            merge(obj);
        }

        return extended;
    };




$('[data-src]').lazyload();
