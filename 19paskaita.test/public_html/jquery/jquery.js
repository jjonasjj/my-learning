$(".paslepti").mouseover(function(){
  $('p.parag').hide();
}).mouseleave(function(){
  //$('p.parag:last').show();
  $('p.parag').show();
  $('p').css({'font-size': '1.5rem', 'color': 'red'});
})

//$('p').css('font-size', '2em');

$('.circles div').on('click', function(){

  let clickedElementClass = $(this).attr('class');
  console.log(clickedElementClass)

  $('.circles div:not(.'+clickedElementClass+')').hide(2000);
})

$('.circles div').on('dblclick', function(){

  let clickedElementClass = $(this).attr('class');
  console.log(clickedElementClass)

  $('.circles div:not(.'+clickedElementClass+')').show(500);
})

$(document).ready(function(){
  console.log('test')
})
