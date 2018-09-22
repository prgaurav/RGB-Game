
var numSquares=6;
var colors= randomColorGenerator(6);
var question= randomPicker();		
var reset=document.getElementById("reset");
var easyMode=document.getElementById("easy");
var hardMode=document.getElementById("hard");
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=question;
var displayMessage=document.querySelector("#message")
var squares= document.querySelectorAll(".square");
var h1Background=document.getElementById("h1Back");
easyMode.addEventListener("click",function() {
	numSquares=3;
	reset.textContent="New Colors";
	displayMessage.textContent= "Let's Start this!";
	easyMode.classList.add("selected");
	hardMode.classList.remove("selected");
	colors=randomColorGenerator(numSquares);
	question=randomPicker();
	colorDisplay.textContent=question;
	for(i=0;i<numSquares;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.background===question)
	{	
		for(i=numSquares;i<6;i++)
		{
			squares[i].style.background="#232323";
		}
	}
		
});
}	

	for(i=numSquares;i<6;i++)
	{
		squares[i].style.background="#232323";
	}
});	
hardMode.addEventListener("click",function(){
	numSquares=6;
	displayMessage.textContent= "Let's Start this!";
	reset.textContent="New Colors";
	easyMode.classList.remove("selected");
	hardMode.classList.add("selected");
	colors=randomColorGenerator(numSquares);
	question=randomPicker();
	colorDisplay.textContent=question;
	for(i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
		
}
})
reset.addEventListener("click", function(){

		displayMessage.textContent= "Let's Start this!";
		h1Background.style.background="turquoise";
		reset.textContent="New Colors";
		colors=randomColorGenerator(numSquares);
		question=randomPicker();
		colorDisplay.textContent=question;
		for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
		
}
});
for(var i=0;i<squares.length;i++)
{	displayMessage.textContent= "Let's Start this!";
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
	if(this.style.background===question)
	{	
		displayMessage.textContent="Correct";
		for(i=0;i<squares.length;i++)
			squares[i].style.background= question;
		h1Background.style.background = this.style.background;
		reset.textContent="Play Again?";
	}	
	else
	 {
		this.style.background= "#232323";
		displayMessage.textContent= "Try Again";

	}
		
})
}
function randomPicker(){
	var randomColor=Math.floor(Math.random() * colors.length);
	return(colors[randomColor]);
}

function randomColorGenerator(num)
{
	var array=[];
	for(i=0;i<num;i++)
	{
		var randomRed = Math.floor(Math.random() * 256);
		var randomBlue = Math.floor(Math.random() * 256);
		var randomGreen = Math.floor(Math.random() * 256);
		var element ="rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
		array.push(element);

	}
	return array;
}
	