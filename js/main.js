function rand(min, max) {
	return (max - min) * Math.random() + min;
}

var main = function() {
	var numbers = [666, 777, 888, 999];
	var i = 0;

	console.info('AntiRandoMe v1.0 activated!');

	$("#true-random-integer-generator-button").remove();
	var fakeButton = $('<input type="button" value="Generate" name="true-random-integer-generator-button" id="true-random-integer-generator-button">');
	$('#true-random-integer-generator-max-button-span').append(fakeButton);

	$('#true-random-integer-generator-button').click(function(event) {
		event.preventDefault();
		document.getElementById('true-random-integer-generator-result').innerHTML = '<img src="/util/cp/images/ajax-loader.gif">';
		setTimeout(function() {
			document.getElementById('true-random-integer-generator-result').innerHTML = numbers[i]; i++; },
			rand(1000, 1200));
	});
};

$(document).ready(main);