	$('#two').hide();
	$('#three').hide();
	
$('li:contains("One")').on('click', function () {
	// body...
	$('#one').show();
	$('#two').hide();
	$('#three').hide();
});
$('li:contains("Two")').on('click', function () {
	// body...
	$('#two').show();
	$('#one').hide();
	$('#three').hide();
});
$('li:contains("Three")').on('click', function () {
	// body...
	$('#three').show();
	$('#one').hide();
	$('#two').hide();
})