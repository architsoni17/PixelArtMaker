

var color1 =document.getElementById('colorPicker');
var height,width,color;
heightWeight= $('#sizePicker');//selected element conating id sizePicker
heightWeight.submit(function(event){
  event.preventDefault();
  height=document.getElementById('inputHeight').value;
  width=document.getElementById('inputWidth').value;
  makeGrid(height,width);
});

function makeGrid(i,j) {//function to make grid of the table
  var canvas = $('#pixelCanvas');
  var x;
  for(x=1; x<=i; x++){
    canvas.append('<tr></tr>');
  };
    for(x=1; x<=j; x++){
      $('tr').append('<td></td>');
    };
  };

$('body').on('click', 'td', function cellColor() {//jQuery to change color of pixel when clicked.
  	color = color1.value;
    $(this).css('background-color', color);
  });
// Your code goes here!
