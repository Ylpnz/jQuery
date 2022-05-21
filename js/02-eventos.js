$(document).ready(function(){
 
//mouseOver y mouseOut

var caja= $("#caja");

	/*caja.mouseover(function(){
		$(this).css("background","blue");
	});
	caja.mouseout(function(){
	    $(this).css("background","red");
	});

	*/

	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaBlue(){
		$(this).css("background","blue");
	}

	caja.hover(cambiaRojo,cambiaBlue);

	caja.click(function(){
        $(this).css("background","pink")
               .css("color","black");
	});

	caja.dblclick(function(){
        $(this).css("background","green")
               .css("color","white");
	});


	// focus y blur

	var nombre= $("#nombre");
	var datos= $("#datos");

	nombre.focus(function(){
             $(this).css("border","2px solid green");
	});

	nombre.blur(function(){
            $(this).css("border","1px solid #ccc");
            
            datos.text($(this).val()).show();
	});

	//mousedown y mouseup

        datos.mousedown(function(){
          $(this).css("border-color","gray");
        });

        datos.mouseup(function(){
          $(this).css("border-color","black");
        });


        //mousemove

        $(document).mousemove(function() {
              $("body").css("cursor","none");
        	$("#sigueme").css("left",event.clientX)
                           .css("top",event.clientY);
        });
}); 