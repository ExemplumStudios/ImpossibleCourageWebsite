$(document).ready(function() {
    
    $('body').fadeIn(1000);
    
    $('#splashImage').ready(function () {
        var randomNumber = Math.random();
        
        if (randomNumber >= 0.7) {
            $('#splashImage').css("background-image", "url(/eventBanners/banner3.png)");
        } else if (randomNumber >= 0.3 && randomNumber < 0.7) {
            $('#splashImage').css("background-image", "url(/eventBanners/banner2.png)");
        } else {
            $('#splashImage').css("background-image", "url(/eventBanners/banner1.png)");
        };
    });
    
});