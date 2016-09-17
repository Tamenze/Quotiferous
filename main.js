//array of quotes
//array of images
//upon load, pick randomly from quotes and randomly from images 
//images correspond to background of main div
//quotes correspond to text of inside div of main div (font stylized, spaced well)

$(document).ready(function(){


var remarks = [
"<span> Swag. <br> <span style='color:black'> Anonymous </span> </span>",
"<span> Don't quit. <br> <span style='color:black'> Anonymous </span> </span>",
"<span> Seek self-improvement. <br> <span style='color:black'> Anonymous </span> </span>",
"<span> To not act is to be amongst the living dead. <br> <span style='color:black'> Anonymous </span> </span>",
"<span> You made the right plans, now all you have to do is keep doing what you're doing. <br> <span style='color:black'> Anonymous </span> </span>",
"<span> Not only is it possible for you to have your dream, but it is necessary. <br> <span style='color:black'> Les Brown </span> </span>",

"<span> Every person is the form taken by a stream -- a marvelous torrent of milk, water, bread, beefsteak, fruit, vegetables, air, light, radiation -- all of which are streams in their own turn. <br> <span style='color:black'> Alan Watts </span> <span>",

"<span> How is it possible that a being with such sensitive jewels as the eyes, such enchanted musical instruments as the ears, and such a fabulous arabesque of nerves as the brain can experience itself as anything less than a god? And, when you consider that this incalculably subtle organism is inseparable from the still more marvelous patterns of its environment--from the minutest electrical designs to the whole company of the galaxies--how is it conceivable that this incarnation of all eternity can be bored with being? <br> <span style='color:black'> Alan Watts </span> <span>",

"<span> You need the tiniest bit of bravery. <br> <span style='color:black'> Mindy Kaling </span> <span>",

"<span> Work hard, know your shit, show your shit, and then feel entitled. Listen to no one except the two smartest and kindest adults you know, and that doesn't aways mean your parents. If you do that, you will be fine. <br> <span style='color:black'> Mindy Kaling </span> <span>",

"<span> Sometimes, I feel discriminated against, but it does not make me angry. It merely astonishes me. How can any deny themselves the pleasure of my company? It’s beyond me. <br> <span style='color:black'> Zora Neale Hurston </span>  <span>",

"<span> If you've got it, flaunt it. And if you don't got it? Flaunt it. 'Cause what are we even doing here if we're not flaunting it?  <br> <span style='color:black'> Mindy Kaling </span> <span>",

"<span> Jack fought down the guilty overwhelming surge of relief, that he was not going to have to marry this beautiful dead girl and spend the rest of his life with her. <br> <span style='color:black'> Maeve Binchy </span> <span>",

"<span> Sweet like licorice, dangerous like syphillis. <br> <span style='color:black'> Lauryn Hill </span> <span>"
];

var graphics = [
	"linear-gradient(to left, #FF7533, #FF757E, #FF75F0)",
	"linear-gradient(to bottom right, red, yellow)",
	"linear-gradient(to right, #240801, #8A2103, #FF3C06)",
	"linear-gradient(to bottom right, #1A0833, #441487, #7924F2)",
	"linear-gradient(to bottom left, #48A80F, #48A893, #48A8FF)",
	"linear-gradient(to top left, #F5195C, #90195C, #18195C)",
	"linear-gradient(to right, #009343, #839343, #FE9343)",
	"linear-gradient(45deg, rgba(255,13,227,1) 0%, rgba(0,128,128,1) 100%)",
	"linear-gradient(135deg, #1900bc 0%,#f47200 100%)",
	"linear-gradient(to bottom, #00e8e4 0%,#8f0222 56%,#a90329 100%)",
	"repeating-linear-gradient(to bottom right,rgb(17, 0, 169) -2.9%,rgb(1, 150, 0) 9%,rgba(0, 0, 0, 0) 10%,rgba(0, 0, 0, 0) 18.5%,rgb(132, 0, 81) 20%,rgb(219, 248, 0) 29%,rgba(0, 0, 0, 0) 30%,rgba(0, 0, 0, 0) 39%,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0) 49%,rgba(0, 0, 0, 0) 50%,rgba(0, 0, 0, 0) 59%,rgb(219, 248, 0) 60%,rgb(132, 0, 81) 69%,rgba(0, 0, 0, 0) 70%,rgba(0, 0, 0, 0) 79%,rgb(1, 150, 0) 80%,rgb(17, 0, 169) 89%,rgb(0, 0, 0) 90%,rgb(0, 0, 0) 100%)"

];


//Randomizes quote and background image selection from above arrays
$("#quote_text").html(remarks[Math.floor(Math.random()*(remarks.length))]);
$(".still_good_tho").css("background-image", graphics[Math.floor(Math.random()*(graphics.length))]);


//Refreshes page when refresh image is clicked
$("#refresh").click(function(){
	document.location.reload(true);
});

   	
   	


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


