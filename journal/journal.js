$(document).ready(function () {
    //navigation buttons appearing and fading
    $('.pageButton').fadeIn(1000).delay(5000).fadeOut(500);
    $('.hitbox').mouseenter(function () {
        $('.pageButton').stop(true).fadeIn(100);
    });
    $('.hitbox').mouseleave(function () {
        $('.pageButton').stop(true).fadeOut(100);
    });
    
    //recording click events
    
    var totalLogs = 22;
    var currentLog = 0;
    var progressPercent = 0; 
    
    function progressBar() {
        progressPercent = currentLog/totalLogs*100;
        return String(progressPercent + '%');
    };
    
    $('#nextPage').click(function () {
        nextLog(1);
        console.log(progressBar());
        
        $('#progressBar').width(progressBar());
    });
    
    function nextLog(i) {
        if (currentLog < totalLogs) {
            currentLog = currentLog + i;
        } else {
            currentLog;
        };
        console.log(currentLog);
    }
    
    $('#lastPage').click(function () {
        lastLog(1);
        console.log(progressBar());
        
        $('#progressBar').width(progressBar());
    });
    
    function lastLog(i) {
        if (currentLog > 0) {
            currentLog = currentLog - i;
        } else {
            currentLog;
        };
        console.log(currentLog);
    }
    
});