//global variables go here
var username;
var favcity;
var favcolor;
var usernamefield;
var favcityfield;
var favcolorfield;


function setup() {

  noCanvas();

  //set up your form here
  username = createElement("h2", "What's your name?");
  	usernamefield = createInput();
  	username.style("font-family","Courier");
  	username.style("background-color", "grey");                

  favcity = createElement("h2", "What's your favorite city?");
  	favcityfield = createInput();
  	favcity.style("font-family","Courier");
  	favcity.style("background-color", "grey");

  favcolor = createElement("h2", "What's your favorite color?");
  	favcolorfield = createInput();
  	favcolor.style("font-family","Courier");
  	favcolor.style("background-color", "grey");


  button = createButton("Submit")

  button.mousePressed(makeProfile);
  button.mouseOver(hover);
  button.mouseOut(nohover);

			  function makeProfile(){
			  //code goes here
			  var submittedName = usernamefield.value();
			  var submittedCity = favcityfield.value();
			  var submittedColor = favcolorfield.value();
			  
			  	username.hide();
			  	favcity.hide();
			  	favcolor.hide();
			  	usernamefield.hide();
			  	favcityfield.hide();
			  	favcolorfield.hide();
			  	button.hide();

			  	for (var x=10; x<windowWidth; x = x+100){
			  		for(var y=0; y<windowHeight; y=y+50){
			  	

					var nameElement = createElement('h2', submittedName);
						nameElement.style("font-size","40px");
		 				nameElement.position(random(windowWidth),random(windowHeight));
		 				


		 			var nameElement = createElement('h2', submittedCity);
		 				nameElement.position(100,100);
		 				nameElement.style("font-size","30px");
		 				nameElement.style("color","white");

		 			var nameElement = createElement('h2', submittedColor);
		 				nameElement.position(100,145);
		 				nameElement.style("font-size","20px");
		 				nameElement.style("color",submittedColor);

		 		}
		 	}

			  	
  	
}

					function hover(){


					}

					function nohover(){



					}

  





}


//write your custom functions here