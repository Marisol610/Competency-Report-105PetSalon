function increaseImg(){
    $(this).animate({"width":'80%'});
}

function decreaseImg(){
    $(this).animate({'width':'150px'});

}

//$('.cover-img').on('mouseenter',increaseImg);
//$('.cover-img').on('mouseleave',decreaseImg);

$('.cover-img').on('click', function(){
    $('.container').slideUp(1000);
});

$('.heading1').on('click', function(){
    $('.container').slideUp(1000);
});
