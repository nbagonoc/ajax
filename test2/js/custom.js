$(document).ready(function(){
	
	$('input').keyup(function(){
		var searchValue = $('input').val();
		var myRegExp = new RegExp(searchValue,'i');
		
		$.getJSON('data.json', function(data){
		
		var output = '<ul>';
		
		$.each(data, function(key, val){
			if(((val.name.search(myRegExp) != -1) || (val.bio.search(myRegExp) != -1)) && (searchValue != ""))  {
				output += '<li>';
				output += '<h2>' + val.name + '</h2>';
				output += '<p>' + val.bio + '</p>';
				output += '</li>';
			}
		});
		
		output += '</ul>';

		$('.update').html(output);
		$('li:even').css('background-color','#efefef');

		});

	});
	
});