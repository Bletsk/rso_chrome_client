// const axios = require("axios");

$(document).ready( () => {
	console.log('document ready');
	axios.get('http://localhost:3000')
	.then( (res) => {
		console.log('response');
		console.log(res.data);
		$('#test').text(res.data[0].title);
	})
	.catch( (error) => {
		console.log(error);
		$('#test').text("Error");
	});
});