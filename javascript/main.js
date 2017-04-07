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
        $('<iframe class="trailerEmbed" src="https://player.vimeo.com/video/211130315?autoplay=1&title=0&byline=0&portrait=0"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>').insertBefore('#stop');
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
        $('.description').hide();
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
        $('.description').show();
        $('.infoButton').show();
    });
    
    //data
    var ratingData = {
        labels: ['Very Ineffective', 'Ineffective', 'Semi-Effective', 'Effective', 'Very Effective'],
        datasets: [
            {
            data: [0, 0, 22, 61, 17],
            backgroundColor: ['#E3F2FD', '#90CAF9', '#42A5F5', '#1E88E5', '#1565C0'],
            }
        ]   
    }
    var opinionData = {
        labels: ['No Change', 'Slight Change', 'Little Change', 'Some Change', 'Large Change'],
        datasets: [
            {
            data: [4, 17, 30, 39, 9],
            backgroundColor: ['#FFE0B2', '#FFB74D', '#FF9800', '#F57C00', '#ef661c'],
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
    
});