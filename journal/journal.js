$(document).ready(function () {
    
    $('.journal').ready(function () {
        $('.pageButton').ready(function () {
            $('.pageButton').fadeIn(200).delay(3000).fadeOut(500);

            $('#lastPage, #nextPage').mouseenter(function() {
                $('.pageButton').stop().stop().show();
            });

            $('#lastPage, #nextPage').mouseleave(function() {
                $('.pageButton').delay(3000).fadeOut(500);
            })
        });
    });

    
});