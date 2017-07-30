$(document).ready(function(){
		
	$.ajax({
		url: 'sample.xml',
		dataType: 'xml',
		success: function(data){
			//console.log(data);
			var output = '<ul>';
			//var $this = $(this);
			$(data).find('books book').each(function(){
				output += '<li>';
				output += '<h3>' + $(this).find("title").text() + '</h3>';
				output += '<p>' + $(this).find("description").text() + '</p>';
				output += '</li>';
			});
	
			output += '</ul>';

			$('.content').html(output);
			$('.content li:odd').css('background-color','#efefef');
		}
	});
	
});