$(document).ready(function () {
    
    var totalLogs = 3;
    var currentLog = totalLogs;
    var progressPercent = 0;
    
    //starting states for elements
    $('#logText').load('/logs/log'+currentLog+'.txt');
    $('#progressBar').width(progressBar());
    
    //navigation buttons appearing and fading
    /*$('.pageButton').fadeIn(1000).delay(5000).fadeOut(500);
    $('.hitbox').mouseenter(function () {
        $('.pageButton').stop(true).fadeIn(100);
    });
    $('.hitbox').mouseleave(function () {
        $('.pageButton').stop(true).fadeOut(100);
    });*/
    
    //turning pages in the logs
    function progressBar() {
        progressPercent = 100-(currentLog-1)/totalLogs*100;
        return String(progressPercent + '%');
    };
    
    $('#nextPage').click(function () {
        nextLog(1);
        console.log(progressBar());
        
        $('#progressBar').width(progressBar());
        $('#logText').load('/logs/log'+currentLog+'.txt');
    });
    $('#nextPage').mousedown(function () {
        $(this).css('box-shadow' , '0 0 50px -10px #e6e6e6');
    });
    $('#nextPage').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });
    
    function nextLog(i) {
        if (currentLog > 1) {
            currentLog = currentLog - i;
        } else {
            currentLog;
        };
        console.log(currentLog);
    }
    
    $('#nextPageExtreme').click(function () {
        nextLogExtreme();
        console.log(progressBar());
        
        $('#progressBar').width(progressBar());
        $('#logText').load('/logs/log'+currentLog+'.txt');
    });
    $('#nextPageExtreme').mousedown(function () {
        $(this).css('box-shadow' , '0 0 50px -10px #e6e6e6');
    });
    $('#nextPageExtreme').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });
    
    function nextLogExtreme() {
        if (currentLog > 1) {
            currentLog = 1;
        } else {
            currentLog;
        };
        console.log(currentLog);
    }
    
    $('#lastPage').click(function () {
        lastLog(1);
        console.log(progressBar());
        
        $('#progressBar').width(progressBar());
        $('#logText').load('/logs/log'+currentLog+'.txt');
    });
    $('#lastPage').mousedown(function () {
        $(this).css('box-shadow' , '0 0 50px -10px #e6e6e6');
    });
    $('#lastPage').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });
    
    function lastLog(i) {
        if (currentLog < totalLogs) {
            currentLog = currentLog + i;
        } else {
            currentLog;
        };
        console.log(currentLog);
    }
    
    $('#lastPageExtreme').click(function () {
        lastLogExtreme();
        console.log(progressBar());
        
        $('#progressBar').width(progressBar());
        $('#logText').load('/logs/log'+currentLog+'.txt');
    });
    $('#lastPageExtreme').mousedown(function () {
        $(this).css('box-shadow' , '0 0 50px -10px #e6e6e6');
    });
    $('#lastPageExtreme').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });
    
    function lastLogExtreme() {
        if (currentLog < totalLogs) {
            currentLog = totalLogs;
        } else {
            currentLog;
        };
        console.log(currentLog);
    }
    
});