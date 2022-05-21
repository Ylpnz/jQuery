$(document).ready(function () {

    //load

    //$("#datos").load("https://reqres.in/");

    // Get y post
	     $.get("https://reqres.in/api/users", {page: 3}, function(response){
           response.data.forEach((element,index) =>{
             $("#datos").append("<p>"+element.first_name+" "+ element.last_name+"</p>");
           });
        });

       
       $("#formulario").submit(function(e){
        e.preventDefault();

            var usuario= {
            name: $('input[name="name"]').val(),
            web:$('input[name="web"]').val(),
           };

           console.log(usuario);


         /*$.post($(this).attr("action"), usuario, function(response){
           console.log(response);
         }).done(function(){
            alert("Usuario creado correctamente");
         });
         */

         $.ajax({
             type: 'POST',
             url: $(this).attr("action"),
             data:usuario,
             beforeSend: function(){
              console.log("Enviando usuario...");
             },
             success: function(response){
              console.log(response);
             },
             error: function(){
              console.log("A ocurrido un error");
             }
             timeOut:2000,

         });

         return false;
      });


	});