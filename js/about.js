$(document).ready(function(){
    $('header').load('../header.html');
    $('footer').load('../footer.html');
    $('#header_bottom').load('../header_bottom.html');

    $('#showreel_btn').on('mouseenter', () => { //btn angle
        $('#showreel_btn img').attr('src', './assets/img/icon/angle-right-black.svg')
    })
    $('#showreel_btn').on('mouseleave', () => {
        $('#showreel_btn img').attr('src', './assets/img/icon/angle-right.svg')
    })
    
    $(window).on('wheel', function(e){ //scroll event
        let scrollVal = $(window).scrollTop()
        let wheelOn = e.originalEvent.deltaY
        if(scrollVal <= 100){
            if(wheelOn > 0){
                $('html').stop().animate({
                    scrollTop: '1000',
                }, 200)
            }
        }else if(scrollVal >= 900 && scrollVal <= 1100){
            if(wheelOn < 0){
                $('html').stop().animate({
                    scrollTop: '0',
                }, 200)
            }
        }

        console.log(scrollVal)
        if(scrollVal >= 1100 && scrollVal <= 1800){
            $('#about_content h3:first-child').stop().animate({
                opacity: 1,
            }, 300)
        }else{
            $('#about_content h3:first-child').stop().animate({
                opacity: 0,
            }, 300)
        }
        if(scrollVal >= 1500 && scrollVal <= 2300){
            $('#about_content h3:last-child').stop().animate({
                opacity: 1,
            }, 300)
        }else{
            $('#about_content h3:last-child').stop().animate({
                opacity: 0,
            }, 300)
        }
    })
    
    $('#showreel_btn').on('click', function(){ //madal On
        $('#about_modal').css({
            display: 'none',
        }).fadeIn(500)
        $('html').css({
            overflowY: 'hidden'
        })
        $('.play-icon').trigger('click');
        $('#modal_content iframe').attr('src', 'https://player.vimeo.com/video/317414590?h=dd71baa3d5?enablejsapi=1&version=3&playerapiid=ytplayer&muted=true')
    });
    
    $('#modal_close_btn').on('click', function(){ //modal Off
        $('#about_modal').css({
            display: 'flex',
        }).fadeOut(500)
        $('html').css({
            overflowY: 'scroll'
        })
        $('#modal_content iframe').attr('src', '')
    });

    $('.swiper-slide').on('mouseenter', function(){ //swiper hover
        $(this).find('.slide_hover').fadeIn(200)
    })
    $('.swiper-slide').on('mouseleave', function(){
        $(this).find('.slide_hover').fadeOut(200)
    })

    $('.clients_logo').on('mouseenter', ()=>{ // logo hover
        $('.clients_logo').addClass('logo_opacity');
    });

    $('.clients_logo').on('mouseleave', ()=>{
        $('.clients_logo').removeClass('logo_opacity');
    });

    let ww = window.innerWidth;

    responsiveSwiper();
    window.addEventListener('resize', function(){
        ww = window.innerWidth;
        responsiveSwiper();
    })

    function responsiveSwiper() {
        if (ww >= 1440){
            var swiper = new Swiper(".cont1Swiper", {
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false,
                slidesOffsetBefore: 540,
                freeMode : true,
            });
            var swiper = new Swiper(".history_swiper", {
                slidesPerView: 4,
                spaceBetween: 70,
                centeredSlides: false,
                slidesOffsetBefore: 540,
                freeMode : true,
            });
        }else if(ww < 1440){
            var swiper = new Swiper(".cont1Swiper", {
                slidesPerView: 1.4,
                spaceBetween: 12,
                centeredSlides: false,
                slidesOffsetBefore: 24,
                freeMode : false,
            });
            var swiper = new Swiper(".history_swiper", {
                slidesPerView: 1.4,
                spaceBetween: 54,
                centeredSlides: false,
                slidesOffsetBefore: 24,
                freeMode : true,
            });
        }
    }
});