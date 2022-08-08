$(document).ready(function(){
    $('footer').load('../footer.html');
    $('header').load('../header.html');
    $('#header_bottom').load('../header_bottom.html');

    let ww = window.innerWidth;

    titleText();
    window.addEventListener('resize', function(){
        ww = window.innerWidth;
        titleText();
    })

    function titleText() {
        if(ww >= 1440){

            $('.news').slice(10, $('.news').length).addClass('display_none'); //more view slice
            if(!$('.news.display_none').length){  
                $('#learn_more_btn span').hide();
            }
            $('#learn_more_btn span').on('click', () => { //more view btn
                $('.news.display_none').slice(0, 10).removeClass('display_none');
                if(!$('.news.display_none').length){
                    $('#learn_more_btn span').hide();
                }
            });

            $(window).on('scroll', ()=>{ //title motion
                let scrollVal = $(document).scrollTop();
                if(scrollVal > 0){
                    $('#content01 h3').css({
                        fontSize: '2.4em',
                        margin: '67px 0 13px',
                    })
                    $('#content01 ul li').css({
                        marginRight: '24px'
                    })
                    $('#content01_bg').css({
                        height: '185px',
                    })
                    $('#content01 input').css({
                        display: 'none'
                    })
                }else if(scrollVal < 1){
                    $('#content01 h3').css({
                        fontSize: '19.6em',
                        margin: '222px 0 47px',
                    })
                    $('#content01 ul li').css({
                        marginRight: '50px',
                    })
                    $('#content01_bg').css({
                        height: '520px',
                    })
                    $('#content01 input').css({
                        display: 'block'
                    })
                }
            })
        }else if(ww < 1440){

            $('.news').slice(10, $('.news').length).addClass('display_none'); //more view slice
            if(!$('.news.display_none').length){  
                $('#learn_more_btn span').hide();
            }
            $('#learn_more_btn span').on('click', () => { //more view btn
                $('.news.display_none').slice(0, 5).removeClass('display_none');
                if(!$('.news.display_none').length){
                    $('#learn_more_btn span').hide();
                }
            });

            $(window).on('scroll', ()=>{ //title motion
                let scrollVal = $(document).scrollTop();
                if(scrollVal > 0){
                    $('#content01 h3').css({
                        fontSize: '1.6em',
                        margin: '67px 0 13px',
                    })
                    $('#content01 ul li').css({
                        marginRight: '32px'
                    })
                    $('#content01_bg').css({
                        height: '185px',
                    })
                    $('#content01 input').css({
                        display: 'none'
                    })
                    $('#search_btn_mob_pop').css({
                        display: 'none'
                    })
                    $('#news_close_mob_btn').css({
                        display: 'inline-block'
                    })
                }else if(scrollVal < 1){
                    $('#content01 h3').css({
                        fontSize: '5.4em',
                        margin: '100px 0 25px',
                    })
                    $('#content01 ul li').css({
                        marginRight: '32px',
                    })
                    $('#content01_bg').css({
                        height: '256px',
                    })
                    $('#content01 input').css({
                        display: 'block'
                    })
                    $('#search_btn_mob_pop').css({
                        display: 'inline-block'
                    })
                }
            })
        }
    }

    $('#content01 ul li').on('click', function (){ //news_menu select
        $('#content01 ul li').removeClass('menu_select');
        $(this).addClass('menu_select');
    });

    $('.news .news_sec').on('mouseenter', function(){ //news_sec hover
        $(this).parent().css({
            borderColor: '#fff',
        })
        $(this).find('span').addClass('focus')
        $(this).find('.news_name').addClass('focus')
    });
    $('.news .news_sec').on('mouseleave', function(){
        $(this).parent().css({
            borderColor: '#666',
        })
        $(this).find('span').removeClass('focus')
        $(this).find('.news_name').removeClass('focus')
    });
    
    $('.news .news_sec').on('click', function(){ //news click slide
        $('.close_btn').trigger('click')
        $(this).parent().toggleClass('select')
        $('.news.select').not($(this).parent()).removeClass('select')
        if($(this).parent().hasClass('select')){
            $(this).find('.news_name').addClass('hide')
            $(this).find('span').addClass('clickfocus')
            $(this).find('.news_name').addClass('clickfocus')
            $(this).parent().find('.news_info').stop().slideDown();
            $(this).find('.angle').css({
                'transform': 'rotate(-90deg)'
            }).attr('src', './assets/img/icon/angle-right.svg')
        }else{
            $(this).find('.news_name').removeClass('hide')
            $(this).find('span').removeClass('clickfocus')
            $(this).find('.news_name').removeClass('clickfocus')
            $(this).parent().find('.news_info').stop().slideUp();
            $(this).find('.angle').css({
                'transform': 'rotate(90deg)'
            }).attr('src', './assets/img/icon/angle-right-gray.svg')
        }
    });
    
    $('.news_info .close_btn').on('click', function(){ //news close btn
        $('.news.select .news_info').stop().slideUp()
        $('.news.select .news_name').removeClass('hide')
        $('.news.select .news_sec span').removeClass('clickfocus')
        $('.news.select .news_sec .news_name').removeClass('clickfocus')
        $('.angle').css({
            'transform': 'rotate(90deg)'
        }).attr('src', './assets/img/icon/angle-right-gray.svg')
    });
    



});

function filter(searchInput) { //search filter
    let search = document.getElementById(searchInput).value.toLowerCase();
    let listInner = document.getElementsByClassName('news');

    for(let i = 0; i < listInner.length; i++){
        newsName = listInner[i].getElementsByClassName('news_name');
        if(newsName[0].innerHTML.toLowerCase().includes(search)){
            listInner[i].style.display = "flex"
        }else{
            listInner[i].style.display = "none"
        }
    }
}
function closeBtn() {
    document.querySelector('#search_pop').style.display = "none";
}
function searchPop() {
    document.querySelector('#search_pop').style.display = "flex";
}