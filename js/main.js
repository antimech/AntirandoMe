var Winners = [666, 777, 999];
var i=0;

$( document ).ready(function() {
	$( "#true-random-integer-generator-button" ).remove();
	var r = $('<input type="button" value="Generate" name="true-random-integer-generator-button" id="true-random-integer-generator-button">');
    $( "#true-random-integer-generator-max-button-span" ).append(r);

  $( "#true-random-integer-generator-button" ).click(function(event) {
    event.preventDefault();
	document.getElementById('true-random-integer-generator-result').innerHTML='<img src="/util/cp/images/ajax-loader.gif" />';
   setTimeout(function() { document.getElementById('true-random-integer-generator-result').innerHTML=Winners[i]; i++; }, rand(1000, 1500));
  });
})

console.info('AntiRandoMe');

function rand(min, max){
return (max-min)*Math.random()+min;
}