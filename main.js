//array of quotes
//array of images
//upon load, pick randomly from quotes and randomly from images 
//images correspond to background of main div
//quotes correspond to text of inside div of main div (font stylized, spaced well)

$(document).ready(function(){
	// window.load
var yurps = [
"Swag.",
"Don't quit.",
"Seek self-improvement.",
"To not act is to be amongst the living dead.",
"You made the right plans, now all you have to do is keep doing what you're doing.",
"Not only is it possible for you to have your dream, but it is necessary.",
"Every person is the form taken by a stream -- a marvelous torrent of milk, water, bread, beefsteak, fruit, vegetables, air, light, radiation -- all of which are streams in their own turn.",
"How is it possible that a being with such sensitive jewels as the eyes, such enchanted musical instruments as the ears, and such a fabulous arabesque of nerves as the brain can experience itself as anything less than a god? And, when you consider that this incalculably subtle organism is inseparable from the still more marvelous patterns of its environment--from the minutest electrical designs to the whole company of the galaxies--how is it conceivable that this incarnation of all eternity can be bored with being?",
"You need the tiniest bit of bravery.",
"Work hard, know your shit, show your shit, and then feel entitled. Listen to no one except the two smartest and kindest adults you know, and that doesn't aways mean your parents. If you do that, you will be fine.",
"Sometimes, I feel discriminated against, but it does not make me angry. It merely astonishes me. How can any deny themselves the pleasure of my company? It’s beyond me.",
"If you've got it, flaunt it. And if you don't got it? Flaunt it. 'Cause what are we even doing here if we're not flaunting it?",
"Jack fought down the guilty overwhelming surge of relief, that he was not going to have to marry this beautiful dead girl and spend the rest of his life with her.",
"Sweet like licorice, dangerous like syphillis."
];

var graphics = [
	"linear-gradient(to left, #FF7533, #FF757E, #FF75F0)",
	"linear-gradient(to bottom right, red, yellow)",
	"linear-gradient(to right, #240801, #8A2103, #FF3C06)",
	"linear-gradient(to bottom right, #1A0833, #441487, #7924F2)",
	"linear-gradient(to bottom left, #48A80F, #48A893, #48A8FF)",
	"linear-gradient(to top left, #F5195C, #90195C, #18195C)",
	"linear-gradient(to right, #009343, #839343, #FE9343)"
];

//insert strings that are url("file paths") or linear gradients


	$("#quote_text").html(yurps[Math.floor(Math.random()*(yurps.length))]);
	$(".still_good_tho").css("background-image", graphics[Math.floor(Math.random()*(graphics.length))]);
   console.log("what's good?")

   	
   	


//BELOW CODE ONLY CENTERS UPON PAGE LOAD, REPLACED WITH CSS3 TEXT-CENTER
	// var divH = $(".quoty").height();
	// var windowH = $(window).height();
	// var beCenterVertically = (windowH - divH)/2;
	// $(".quoty").css("top", beCenterVertically);

	// var divW = $(".quoty").width();
	// var windowW = $(window).width();
	// var beCenterHorizontally = (windowW - divW)/2;
	// $(".quoty").css("left", beCenterHorizontally);

});


