$(document).ready(function() {
    
    $('#scene').parallax();
    
    //Starting States
    $('.moreInfo').hide();
    $('#collapse').hide();
    $('#parallaxLogoOpen').hide();
    $('#stop').hide();
    $('.data').hide();
    
    //Load Animation
    $('body').fadeIn(1000);
    $('#parallaxLogoClosed').hide(function () {
        $(this).delay(1000).fadeIn(500);
    });
    $('#parallaxLogoText').hide(function () {
        $(this).delay(1500).fadeIn(500);
    });
    $('#reveal').hide(function () {
        $(this).delay(2000).fadeIn(500);
    });
    
    //moreInfo Hide/Show
    $('#reveal').click(function () {
        $('.moreInfo').show();
        $('.moreInfo').ScrollTo();
        $(this).fadeOut(80);
        $('#collapse').fadeIn(80);
        $('#parallaxLogoClosed').hide();
        $('#parallaxLogoOpen').show();
    });
    $('#collapse').click(function () {
        $('.moreInfo').slideUp();
        $(this).fadeOut(80);
        $('#reveal').fadeIn(80);
        //Stop trailer if playing:
        $('#stop').hide();
        $('.data').hide();
        $('.trailerEmbed').remove();
        $('.infoButton').show();
        $('.description').show();
    });
    
    //trailer Hide/Show
    $('#play').click(function () {
        //hide the following:
        $('.description').hide();
        $('.infoButton').hide();
        //show the following:
        $('<iframe class="trailerEmbed" style="box-shadow: 0 0 50px 5px #e6e6e6;" src="https://player.vimeo.com/video/211130315?autoplay=1&title=0&byline=0&portrait=0"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').insertBefore('#stop');
        $('#stop').show();
        //other stuff:
        $('.infoBox').ScrollTo();
    });
    $('#stop').click(function () {
        //hide the following:
        $(this).hide();
        $('.trailerEmbed').remove();
        //show the following:
        $('.description').show();
        $('.infoButton').show();
    });
    
    //data Hide/Show
    $('.dataButton').click(function () {
        //hide the following
        //$('.description').hide();
        $('.infoButton').hide();
        //show the following
        $('.data').show();
        //other stuff:
        $('.infoBox').ScrollTo();
    });
    $('#hideData').click(function () {
        //hide the following
        $('.data').hide();
        //show the following
        //$('.description').show();
        $('.infoButton').show();
    });
    
    //load shortSurvey data
    $.ajax({
        url: "data/shortSurvey.csv",
        async: false,
        success: function (csvd) {
            shortSurvey = $.csv.toArrays(csvd);
        },
        dataType: "text",
        complete: function () {}
    });
    shortSurvey[0].shift();
    shortSurvey[1].shift();
    var ratingData = {
        labels: ['Very Ineffective', 'Ineffective', 'Semi-Effective', 'Effective', 'Very Effective'],
        datasets: [
            {
            //data: [0, 0, 22, 61, 17],
            data: shortSurvey[0],
            backgroundColor: ['#E3F2FD', '#90CAF9', '#42A5F5', '#1E88E5', '#1565C0'],
            }
        ]   
    }
    var opinionData = {
        labels: ['No Change', 'Slight Change', 'Little Change', 'Some Change', 'Large Change'],
        datasets: [
            {
            //data: [4, 17, 30, 39, 9],
            data: shortSurvey[1],
            backgroundColor: ['#FF8A81', '#D43229', '#BF0D00', '#940300', '#7F030F'],
            }
        ]   
    }
    var sampleSize = shortSurvey[2][1];
    $('.sampleSize').text(sampleSize);
    //load sceneReactions data
    $.ajax({
        url: "data/sceneReactions.csv",
        async: false,
        success: function (csvd) {
            sceneReactions = $.csv.toArrays(csvd);
        },
        dataType: "text",
        complete: function () {}
    });
    var motionSickness = {
        labels: sceneReactions[0],
        datasets: [
            {
                borderColor: '#1E88E5',
                fill: false,
                data: sceneReactions[1],
                pointBorderColor: '#1565C0',
                pointBackgroundColor: '#1565C0',
                fill: true,
                backgroundColor: '#E3F2FD',
            }]
    }
    var impact = {
        labels: sceneReactions[0],
        datasets: [
            {
                data: sceneReactions[2],
                backgroundColor: '#FF8A81',
                borderColor: '#7F030F',
                borderWidth: 1.5,
            }
        ]
    }
    //charts formatting
    Chart.defaults.global.defaultFontFamily = 'Dosis';
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.tooltips.cornerRadius = 15;
    Chart.defaults.global.tooltips.xPadding = 15;
    Chart.defaults.global.tooltips.yPadding = 15;
    Chart.defaults.global.tooltips.backgroundColor = '#f2f2f2';
    Chart.defaults.global.tooltips.bodyFontColor = '#000000';
    Chart.defaults.global.tooltips.titleFontColor = '#000000';
    Chart.defaults.global.tooltips.displayColors = false;
    //charts
    var ratingChart = new Chart($("#ratingChart"), {
        type: 'doughnut',
        data: ratingData,
        options: {
            cutoutPercentage: 60,
            legend: {
                onClick: function(event, legendItem) {null},
                position: 'left',
            },
        },
    });
    var opinionChart = new Chart($('#opinionChart'), {
        type: 'doughnut',
        data: opinionData,
        options: {
            cutoutPercentage: 60,
            legend: {
                onClick: function(event, legendItem) {null},
                position: 'left',
            },
        },
    });
    var motionSicknessChart = new Chart($('#motionSicknessChart'), {
        type: 'line',
        data: motionSickness,
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: 5,
                    },
                }],
                xAxes: [{
                    display: false,
                }],
            },
        }
    });
    var impactChart = new Chart($('#impactChart'), {
        type: 'bar',
        data: impact,
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: true, 
                    },
                    ticks: {
                        suggestedMax: 15,
                    },
                }],
                xAxes: [{
                    display: false,
                }]
            }
        }
    });
    //Word Clouds
    $.ajax({
        url: "data/preList.csv",
        async: false,
        success: function (csvd) {
            preList = $.csv.toArrays(csvd);
        },
        dataType: "text",
        complete: function () {}
    });
    $.ajax({
        url: "data/postList.csv",
        async: false,
        success: function (csvd) {
            postList = $.csv.toArrays(csvd);
        },
        dataType: "text",
        complete: function () {}
    });
    //document.write(preList[0]);
    WordCloud($("#preCloud")[0], {
        list: preList,
        //Styling
        fontFamily: 'Dosis',
        color: function (word, weight) {
            return weight >= 10 ? '#D43229' : '#FF8A81';
        },
        weightFactor: 15,
        //Spacing
        gridSize: 20,
        rotationSteps: 2,
        shuffle: true,
    });
    WordCloud($("#postCloud")[0], {
        list: postList,
        //Styling
        fontFamily: 'Dosis',
        color: function (word, weight) {
            return weight >= 10 ? '#1565C0' : '#90CAF9';
        },
        weightFactor: 15,
        //Spacing
        gridSize: 20,
        rotationSteps: 2,
        shuffle: true,
    });
    
});