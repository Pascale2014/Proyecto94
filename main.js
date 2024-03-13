var canvas = new fabric.Canvas("myCanvas");
//Establece las posiciones iniciales para las imágenes de la pelota y el hoyo.
 var ball_y=0;
 var ball_x=0;
 var hole_y=400;
 var hole_x=800;

 var block_image_width = 5;
 var block_image_height = 5;
 var top_hole_y=0;
 var ball_obj="";
 var hole_obj="";
//var top_hole_x=0;


// escribe código para cargar la imagen del golf en el lienzo
function load_img(){
  
    fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
           canvas.add(hole_obj);
	    });
        new_image();
}

function new_image()
{
fabric.Image.fromURL("ball.png", function(Img){
	ball_obj = Img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball_obj);
});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    
    /* Revisa las coordenadas de las imágenes de la pelota y el hoyo para finalizar el juego. 
	Y las coordenadas del id coordinates coinciden, entonces elimina la pelota.  
	muestra "¡FIN DEL JUEGO!" 
	y haz el borde del lienzo "rojo".*/
	if((ball_x==hole_x)&&(ball_y==hole_y)){
    canvas.remove(ball_obj);
    document.getElementById("hd3").innerHTML="¡Metiste la pelota!";
	document.getElementById("myCanvas").style.borderColor="red";
	}

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("arriba");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("abajo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("izquierda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("derecha");
		}
	}
	
	function up()
	{
		// Escribe código para mover la pelota hacia arriba

        if(ball_y >=0)
        {
           ball_y = ball_y - block_image_height;
           console.log("altura de la imagen = " + block_image_height);
           console.log("Cuando se presiona la flecha  hacia abajo, X = " + ball_x +" , Y = " + ball_y);
           canvas.remove(ball_obj);
           new_image();
        }
	}
	/*ball_y = ball_y + block_image_height;
	console.log("altura de la imagen = " - block_image_height);
	console.log("Cuando se presiona la flecha de abajo, X = " +" , Y = "+ball_y);
	canvas.remove(ball_obj);
	new_image();*/


	function down()
	{
		 if(ball_y <=450)
		 {
			ball_y = ball_y + block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log("Cuando se presiona la flecha hacia abajo, X = " + ball_x +" , Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("ancho de la imagen =" - block_image_width);
			console.log("Cuando se presiona la tecla hacia la izquierda, X = " + ball_x +" , Y = " + ball_y);
            canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Escribe código para mover la pelota a la derecha.ball_x = ball_x + block_image_height;
            ball_x = ball_x + block_image_width;
			console.log("ancho de la imagen =" - block_image_width);
			console.log("Cuando se presiona la tecla hacia la derecha, X = " + ball_x +" , Y = " + ball_y);
            canvas.remove(ball_obj);
			new_image();
		}
	}
	
}