$(document).ready(function(){
    $('footer').load('../footer.html');
    $('header').load('../header.html');
    $('#header_bottom').load('../header_bottom.html');
    AOS.init();

    var swiper = new Swiper(".mySwiper", { //mainbenner slide
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        allowTouchMove: true,
        on: {
            slideChange: function(){
                if($('.swiper-pagination span:nth-child(1)').hasClass('swiper-pagination-bullet-active')){
                    $('#page_btn1').trigger('click');
                }else if($('.swiper-pagination span:nth-child(2)').hasClass('swiper-pagination-bullet-active')){
                    $('#page_btn2').trigger('click');
                }else if($('.swiper-pagination span:nth-child(3)').hasClass('swiper-pagination-bullet-active')){
                    $('#page_btn3').trigger('click');
                }else if($('.swiper-pagination span:nth-child(4)').hasClass('swiper-pagination-bullet-active')){
                    $('#page_btn4').trigger('click');
                }
            }
        }
    });

    setTimeout(function(){ //start slide
        $('#page_btn1').find('.loading_bar').animate({
            left: 0,
        }, 5000).css({
            left: '-100%'
        });
        $('#page_btn1').find('.btn_text').removeClass('page_btn_disable');
    }, 50)
    
    $('#page_btn1').on('click', function(){ //slide btn1
        btnReset();
        $('.swiper-pagination span:nth-child(1)').trigger('click');
        $(this).find('.loading_bar').animate({
            left: 0,
        }, 5000);
        $(this).find('.btn_text').removeClass('page_btn_disable');
        textOff();
        textOn('.main_title1_text');
    });
    $('#page_btn2').on('click', function(){ //slide btn2
        btnReset();
        $('.swiper-pagination span:nth-child(2)').trigger('click');
        $(this).find('.loading_bar').animate({
            left: 0,
        }, 5000);
        $(this).find('.btn_text').removeClass('page_btn_disable');
        textOff();
        textOn('.main_title2_text');
    });
    $('#page_btn3').on('click', function(){ //slide btn3
        btnReset();
        $('.swiper-pagination span:nth-child(3)').trigger('click');
        $(this).find('.loading_bar').animate({
            left: 0,
        }, 5000);
        $(this).find('.btn_text').removeClass('page_btn_disable');
        textOff();
        textOn('.main_title3_text');
    });
    $('#page_btn4').on('click', function(){ //slide btn4
        btnReset();
        $('.swiper-pagination span:nth-child(4)').trigger('click');
        $(this).find('.loading_bar').animate({
            left: 0,
        }, 5000);
        $(this).find('.btn_text').removeClass('page_btn_disable');
        textOff();
        textOn('.main_title4_text');
    });

    function btnReset() { //pagination btn reset
        $('.loading_bar').stop().css({
            left: '-100%'
        })
        $('.btn_text').addClass('page_btn_disable');
    }

    function textOff() {
        $('.main_title').removeClass('textUp').css({
            opacity: 0,
        })
    }

    function textOn(target) {
        $(target).addClass('textUp');
    }

    gsap.set('#content02 h3:first-child', { x: '-100%' });
    gsap.set('#content02 h3:last-child', { x: '100%' });
    gsap.to('#content02 h3:first-child', { //text moving
        duration: 1, x: '70%',
        scrollTrigger: {
            trigger: '#content02',
            start: "50% 100%",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    });

    gsap.to('#content02 h3:last-child', { //text moving
        duration: 1, x: '-60%',
        scrollTrigger: {
            trigger: '#content02',
            start: "50% 100%",
            end: "bottom top",
            scrub: 1,
            markers: false,
        }
    });

    $(window).on('scroll', function(){
        imgScrollEvent('img1', 'span_focus1')
        imgScrollEvent('img2', 'span_focus2')
        imgScrollEvent('img3', 'span_focus3')
        imgScrollEvent('img4', 'span_focus4')
        imgScrollEvent('img5', 'span_focus5')
        // if(scrollState >= 900 && scrollState < 1300){
        //     $('#organizationText_sec ul li:nth-child(2) span').addClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(2) img').show(200)
        //     $('#organizationImg_sec img:nth-child(1)').css({
        //         opacity: 1,
        //     })
        // }else{
        //     $('#organizationText_sec ul li:nth-child(2) span').removeClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(2) img').hide(200)
        //     $('#organizationImg_sec img:nth-child(1)').css({
        //         opacity: .4,
        //     })
        // }

        // if(scrollState >= 1300 && scrollState < 1700){
        //     $('#organizationText_sec ul li:nth-child(3) span').addClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(3) img').show(200)
        //     $('#organizationImg_sec img:nth-child(2)').css({
        //         opacity: 1,
        //     })
            
        // }else{
        //     $('#organizationText_sec ul li:nth-child(3) span').removeClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(3) img').hide(200)
        //     $('#organizationImg_sec img:nth-child(2)').css({
        //         opacity: .4,
        //     })
        // }

        // if(scrollState >= 1700 && scrollState < 2100){
        //     $('#organizationText_sec ul li:nth-child(4) span').addClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(4) img').show(200)
        //     $('#organizationImg_sec img:nth-child(3)').css({
        //         opacity: 1,
        //     })
            
        // }else{
        //     $('#organizationText_sec ul li:nth-child(4) span').removeClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(4) img').hide(200)
        //     $('#organizationImg_sec img:nth-child(3)').css({
        //         opacity: .4,
        //     })
        // }

        // if(scrollState >= 2100 && scrollState < 2500){
        //     $('#organizationText_sec ul li:nth-child(5) span').addClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(5) img').show(200)
        //     $('#organizationImg_sec img:nth-child(4)').css({
        //         opacity: 1,
        //     })
            
        // }else{
        //     $('#organizationText_sec ul li:nth-child(5) span').removeClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(5) img').hide(200)
        //     $('#organizationImg_sec img:nth-child(4)').css({
        //         opacity: .4,
        //     })
        // }

        // if(scrollState >= 2500 && scrollState < 2900){
        //     $('#organizationText_sec ul li:nth-child(6) span').addClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(6) img').show(200)
        //     $('#organizationImg_sec img:nth-child(5)').css({
        //         opacity: 1,
        //     })
            
        // }else{
        //     $('#organizationText_sec ul li:nth-child(6) span').removeClass('organization_select')
        //     $('#organizationText_sec ul li:nth-child(6) img').hide(200)
        //     $('#organizationImg_sec img:nth-child(5)').css({
        //         opacity: .4,
        //     })
        // }
    })

    function imgScrollEvent(e, s){
        let scrollCenter = window.innerHeight / 2;
        let img = document.getElementById(e)
        let imgTop = img.getBoundingClientRect().top;
        let imgH = img.getBoundingClientRect().height;
        let scrollEnd = scrollCenter-imgH;
        let spanTarget = document.getElementById(s)
        // console.log('imgTop'+imgTop)
        // console.log('scrollCenter'+scrollCenter)
        // console.log('scrollEnd'+scrollEnd)
        console.log(spanTarget.querySelector('img'))
        if(scrollCenter > imgTop && scrollEnd < imgTop){
            img.style.opacity = 1;
            spanTarget.querySelector('img').style.display = "inline-block"
            spanTarget.querySelector('span').classList.add('organization_select')
        }else{
            img.style.opacity = .4;
            spanTarget.querySelector('img').style.display = "none"
            spanTarget.querySelector('span').classList.remove('organization_select')
        }
    }

    $('#project_sec ul li').on('mouseenter', function(){ // project img on/off
        $(this).find('img').stop().fadeIn(200);
    });
    $('#project_sec ul li').on('mouseleave', function(){
        $(this).find('img').stop().fadeOut(200);
    });

    $(document).on('mousemove', function(e){ //img move
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let imgH = $('#project_sec ul li img').height()
        
        $('#project_sec ul li img').css({
            right: -mouseX * 0.1 + "px",
            top: (mouseY * 0.1)-imgH/2 + "px",
        })
    })
});