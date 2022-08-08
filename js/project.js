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

            $('.project').slice(10, $('.project').length).addClass('display_none'); //more view slice
            if(!$('.project.display_none').length){
                $('#learn_more_btn span').hide();
            }
            $('#learn_more_btn span').on('click', () => { //more view btn
                $('.project.display_none').slice(0, 10).removeClass('display_none');
                if(!$('.project.display_none').length){
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

            $('.project').slice(10, $('.project').length).addClass('display_none'); //more view slice
            if(!$('.project.display_none').length){
                $('#learn_more_btn span').hide();
            }
            $('#learn_more_btn span').on('click', () => { //more view btn
                $('.project.display_none').slice(0, 5).removeClass('display_none');
                if(!$('.project.display_none').length){
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

    $('#content01 ul li').on('click', function (){ //project_menu select
        $('#content01 ul li').removeClass('menu_select');
        $(this).addClass('menu_select');
    });
    


    $('li.project').on('mouseenter', function(){ //project img on/off
        $(this).find('.project_img').stop().fadeIn(200);
    })
    $('li.project').on('mouseleave', function(){
        $(this).find('.project_img').stop().fadeOut(200);
    })

    $(document).on('mousemove', function(e){ //img move
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let imgH = $('.project_img').height()

        $('.project_img').css({
            right: -mouseX * 0.1 + "px",
            top: (mouseY * 0.1)-imgH/2 + "px",
        })
    })

});

function filter(searchInput) { //search filter
    let search = document.getElementById(searchInput).value.toLowerCase();
    let listInner = document.getElementsByClassName('project');

    for(let i = 0; i < listInner.length; i++){
        projectName = listInner[i].getElementsByClassName('project_name');
        customer = listInner[i].getElementsByClassName('customer');
        if(projectName[0].innerHTML.toLowerCase().includes(search) || customer[0].innerHTML.toLowerCase().includes(search)){
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