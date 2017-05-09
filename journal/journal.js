$(document).ready(function () {
    
    $('.pageButton').fadeIn(1000);
    
    var isHovering = $('.pageButton').mouseenter(function () {
        console.log('yay');
        return true;
    });
        
    var isHovering = $('.pageButton').mouseleave(function () {
        console.log('nay');
        return false;
    });
});