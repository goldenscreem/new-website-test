var bardata = [20, 30, 45, 15, 180, 80, 290, 20, 180, 80, 20, 30, 45,];

var height = 400,
	width = 600,
	barWidth = 50,
	barOffset = 5;

	d3.select('#chart')
		.append('svg')
			.attr('width', width)
			.attr('height', height)
			.style('background', '#C9D7D6')
			.selectAll('rect').data(bardata)
			.enter()
		.append('rect')
			.style('fill', 'olive')
			.attr('width', barWidth)
			.attr('height', function(d){
				return d;
			})
			.attr('x', function(d, i) {
				return i * (barWidth + barOffset);
			})
			.attr('y', function(d){
				return height - d 
				
			} )