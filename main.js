Canvas = document.getElementById('myCanvas');
ctx = Canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 150;
img_y = 150;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			Aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Aplhabet key";
			console.log("Aplhabetkey");
		}
		else if (keyPressed >=48 &&  keyPressed<=57)
		{
			Numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key";
			console.log("Numberkey");
		}
		else if (keyPressed >=37 && keyPressed<=40)
		{
			Arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow key";
			console.log("Arrowkey");
		}
		else if(keyPressed ==17 || keyPressed==18 || keyPressed==27 )
		{
			Specialkey();
			document.getElementById("d1").innerHTML="You pressed Special key";
			console.log("Specialkey");
		}
		else
		{
			Otherkey();
			document.getElementById("d1").innerHTML="You pressed Other key";
			console.log("Otherkey");
		}
}
		
	


function Aplhabetkey()
{
	
	img_image="Alpkey.png";
	add();	
}
function Numberkey()
{
	img_image="numkey.png";
	add();	
}
function Arrowkey()
{
	img_image="arrkey.png";
	add();	
}
	

function Specialkey()
{
	img_image="spkey.png";
	add();	
}
function Otherkey()
{
	img_image="otherkey.png";
	add();
}
