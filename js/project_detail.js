$(document).ready(function(){
    $('header').load('../header.html');
    $('footer').load('../footer.html');
    $('#header_bottom').load('../header_bottom.html');

    $('#prev_btn, .prev_angle').on('mouseenter', function(){
        $('.prev_angle').attr('src', './assets/img/icon/angle-left.svg')
    })
    $('#prev_btn, .prev_angle').on('mouseleave', function(){
        $('.prev_angle').attr('src', './assets/img/icon/angle-left-gray-detail.svg')
    })

    $('#next_btn, .next_angle').on('mouseenter', function(){
        $('.next_angle').attr('src', './assets/img/icon/angle-right.svg')
    })
    $('#next_btn, .next_angle').on('mouseleave', function(){
        $('.next_angle').attr('src', './assets/img/icon/angle-right-gray-detail.svg')
    })
});