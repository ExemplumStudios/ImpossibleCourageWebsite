$(document).ready(function () {

    var totalLogs = 25;
    var currentLog = 1;
    var progressPercent = 0;

    //starting states for elements
    $.get('/logs/log1.md', function (data) {
        var converter = new showdown.Converter(),
            text = data,
            html = converter.makeHtml(text);

        $('#logText').html(html);
    });
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
        progressPercent = 100 - (currentLog - 1) / totalLogs * 100;
        return String(progressPercent + '%');
    };

    function loadCurrentLog(i) {
        $.get('/logs/log' + i + '.md', function (data) {
            var converter = new showdown.Converter(),
                text = data,
                html = converter.makeHtml(text);
            $('#logText').html(html);
        });
    };

    $('#nextPage').click(function () {
        nextLog(1);
        console.log(progressBar());

        $('#progressBar').width(progressBar());
        loadCurrentLog(currentLog);
    });
    $('#nextPage').mousedown(function () {
        $(this).css('box-shadow', '0 0 50px 0px #e6e6e6');
    });
    $('#nextPage').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });

    function nextLog(i) {
        if (currentLog > 1) {
            currentLog = currentLog - i;
        } else {
            currentLog = totalLogs;
        };
        console.log(currentLog);
    }

    $('#nextPageExtreme').click(function () {
        nextLogExtreme();
        console.log(progressBar());
        $('#progressBar').width(progressBar());
        loadCurrentLog(currentLog);
    });
    $('#nextPageExtreme').mousedown(function () {
        $(this).css('box-shadow', '0 0 50px 0px #e6e6e6');
    });
    $('#nextPageExtreme').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });

    function nextLogExtreme() {
        if (currentLog > 1) {
            currentLog = 1;
        } else {
            currentLog = totalLogs;
        };
        console.log(currentLog);
    }

    $('#lastPage').click(function () {
        lastLog(1);
        console.log(progressBar());
        $('#progressBar').width(progressBar());
        loadCurrentLog(currentLog);
    });
    $('#lastPage').mousedown(function () {
        $(this).css('box-shadow', '0 0 50px 0px #e6e6e6');
    });
    $('#lastPage').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });

    function lastLog(i) {
        if (currentLog < totalLogs) {
            currentLog = currentLog + i;
        } else {
            currentLog = 1;
        };
        console.log(currentLog);
    }

    $('#lastPageExtreme').click(function () {
        lastLogExtreme();
        console.log(progressBar());
        $('#progressBar').width(progressBar());
        loadCurrentLog(currentLog);
    });
    $('#lastPageExtreme').mousedown(function () {
        $(this).css('box-shadow', '0 0 50px 0px #e6e6e6');
    });
    $('#lastPageExtreme').mouseup(function () {
        $(this).css('box-shadow', '0 0 50px 5px #e6e6e6');
    });

    function lastLogExtreme() {
        if (currentLog < totalLogs) {
            currentLog = totalLogs;
        } else {
            currentLog = 1;
        };
        console.log(currentLog);
    }

});
