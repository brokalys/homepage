$(function() {
    Highcharts.chart('container', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Vidējā dzīvokļu cena Ziepniekkalnā un Agenskalnā Q2 - Q3  2017'
    },
    xAxis: {
        categories: [
            'Aprīlis',
            'Maijs',
            'Jūnijs',
            'Jūlijs',
            'Augusts',
            'Septembris'
        ],
        plotBands: [{ // visualize the weekend
            from: 10000,
            to: 175000,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: 'Vidējā cena'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' EUR'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Āgenskalns',
        data: [133884, 133585, 117197, 104862, 125595, 166514]
    }, {
        name: 'Ziepniekkalns',
        data: [67410, 80279, 63084, 64955, 66377, 78878]
    }]
});
});
