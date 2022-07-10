google.charts.load('current', {'packages':['corechart gauge']});

google.charts.setOnLoadCallback(pieChart3d);

function pieChart3d() {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Revenue', 247788],
        ['Leads', 92370],
        ['Orders', 49000],
    ]);
    let options = {'title':'Last 28 days',
                    'width':450,
                    'height':250,
                    is3D: true
                    };
    let chart = new google.visualization.PieChart(document.getElementById('pie-chart-3d'));
    chart.draw(data, options);
};

google.charts.setOnLoadCallback(gaugeChart);

function gaugeChart() {

  let data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Memory', 80],
    ['CPU', 55],
    ['Network', 68]
  ]);

  let options = {
    width: 450, height: 250,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };

  let chart = new google.visualization.Gauge(document.getElementById('gauge'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 13000);
  setInterval(function() {
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    chart.draw(data, options);
  }, 5000);
  setInterval(function() {
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    chart.draw(data, options);
  }, 26000);
};

google.charts.setOnLoadCallback(lineChart);

function lineChart() {
  let data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2019',  1000,      400],
    ['2020',  1170,      460],
    ['2021',  660,       1120],
    ['2022',  1030,      540]
  ]);

  let options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  let chart = new google.visualization.LineChart(document.getElementById('line-chart'));

  chart.draw(data, options);
};