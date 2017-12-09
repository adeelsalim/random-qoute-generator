var gradients = [
	{
		gradient: "linear-gradient(to right, #232526, #414345)",
		colors: "#232526"
	},
	{
		gradient: "linear-gradient(to right, #5c258d, #4389a2)",
		colors: "#5c258d"
	},
	{
		gradient: "linear-gradient(to right, #4776e6, #8e54e9)",
		colors: "#4776e6"
	}, 
	{
		gradient: "linear-gradient(to right, #16222a, #3a6073)",
		colors: "#16222a"
	}, 
	{
		gradient: "linear-gradient(to right, #ff8008, #ffc837)",
		colors: "#ff8008"
	}, 
	{
		gradient: "linear-gradient(to right, #eb3349, #f45c43)",
		colors: "#eb3349"
	}, 
	{
		gradient: "linear-gradient(to right, #4cb8c4, #3cd3ad)",
		colors: "#4cb8c4"
	},
	{
		gradient: "linear-gradient(to right, #1d2b64, #f8cdda)",
		colors: "#1d2b64"
	},
	{
		gradient: "linear-gradient(to right, #1a2980, #26d0ce)",
		colors: "#1a2980"
	},
	{
		gradient: "linear-gradient(to right, #aa076b, #61045f)",
		colors: "#aa076b"
	}
];




$( document ).ready(function() {
	getQoute();
	$('#get-qoute').on('click', function(){
			
		getQoute();
	});	

	$('#tweet-qoute').on('click', function() {
      var qoute = $('#qoute p').text();
      console.log(qoute);
      var author = $("#qoute footer").text();
      console.log(author);
      window.open('http://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + qoute + '" ' + author));
     });
     
    
  });



function getQoute(){
	$.getJSON("https://talaikis.com/api/quotes/random/", function(json){
  			var html="";
  			var x = Math.floor(Math.random() * 10)
  			console.log(x);
  			html += "<blockquote class='blockquote-reverse'>";
 			html += '<p> <i class="fa fa-quote-left" aria-hidden="true"></i>'
 			html += "   " + json.quote + "</p>";
 			html += "<footer>" + json.author + "<cite title='Source Title'> :: " + json.cat +"</cite></footer>";
			html += "</blockquote>";

			$('body').css("background-image", gradients[x].gradient)
			$('#qoute').html(html)




			
	});	
}
