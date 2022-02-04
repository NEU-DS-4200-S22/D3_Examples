d3.select('.house')
d3.select('.house').size()
d3.select('.house').node()
d3.select('.house').text('Targaryen')
d3.select('.name').text('Aegon')
d3.select('tr:nth-child(4) .char').text('Evil')
d3.selectAll('.rate').text('3')

d3.select('tr:nth-child(4) .char')
    .html('<strong>Evil<strong>')

// Let's add a span to this

d3.select('tr:nth-child(4) .char')
    .html('<strong>Evil<strong>')
  .append('span')
    .html(' Surprise!');

// beginning of the element
d3.select('tr:nth-child(4) .char')
    .html('<strong>Evil<strong>')
  .insert ('span',':first-child')
    .html('SO ');

d3.selectAll('tr:nth-child(5)')
	.remove()

// Styles

d3.select('h1')
  .style('color','red');

d3.select('tr:nth-child(4) .char')
    .html('<strong>Evil<strong>')
  .append('span')
    .html(' Surprise!')
    .style('background','red')
    .style('padding','4px')
    .style('margin-left','2px')
    .style('border-radius','2px')
    .style('color','white');

    
d3.selectAll('tr')
  .insert('td',':first-child')
  .append('input')
    .attr('type','checkbox')
    .property('checked','true');
      