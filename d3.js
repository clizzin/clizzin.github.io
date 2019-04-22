let data = [4, 8, 15, 16, 23, 42];

let width = 420;
let barHeight = 20;
let x = d3.scaleLinear().domain([0, d3.max(data)]).range([0, width]);

let divChart = d3.select('#bar-chart');
divChart.selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width', function(d) { return x(d) + 'px'; })
    .text(d => d);

let chart = d3.select('.chart').attr('width', width).attr('height', barHeight * data.length);
let bar = chart.selectAll('g').data(data).enter().append('g');

// Position each bar at a different vertical point.
bar.attr('transform', (d, i) => 'translate(0,' + i * barHeight + ')');

bar.append('rect').attr('width', x).attr('height', barHeight - 1);
bar.append('text')
  .attr('x', d => x(d) - 3)
  .attr('y', barHeight / 2)
  .attr('dy', '.35em') // Vertically center the text within the bar.
  .text(d => d);
