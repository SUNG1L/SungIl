$(function(){
    // alert('ru')
// gotop
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('.gotop').addClass('on')
        } else {
            $('.gotop').removeClass('on')
        }
    })

    $('.gotop').click(function(){
        $("html, body").animate({scrollTop: 0}, 500)
    })
// gotop
})

$(function(){
    // 스크롤 영역이동
    const menu = $('header .head nav > ul li')
    const contents = $('main .container > section')

    $(window).scroll(function(){
        contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()+50){
                let idx = $(this).index()
                menu.removeClass('on')
                menu.eq(idx).addClass('on')
            }
        })
    })
    menu.click(function(e){
        e.preventDefault()

        let idx = $(this).index()
        let section = contents.eq(idx)
        let sectionD = section.offset().top-(0)
        $('html, body').animate({
  
            scrollTop : sectionD
        })
    })
})

$(document).ready(function() {
    // 스크롤 막기
    $('body').css('overflow', 'hidden');
    
    // 4초 후에 스크롤 해제
    setTimeout(function() {
        $('body').css('overflow', 'auto');
    }, 4000);  // 4000ms = 4초
});

window.onload = function(){
    setTimeout (function(){
        scrollTo(0,0);
    }, 100)
}

$(".ani").ready(function() {
    setTimeout(function() {
      $('.ani').css('display', 'none');
    }, 4000); // 4000ms = 4초
  });