$(document).ready(function(){

  var elemento= $(".elemento");
  //mover 

  elemento.draggable();

  //Redimensionar

  elemento.resizable();

  //seleccionar
 // $(".lista-seleccionable").selectable();

 //ordenar
 $(".lista-seleccionable").sortable({
  update: function(event, ui){
     console.log("Ha cambiado la lista");
       }
    });

 //drop

 $("#elemento-movido").draggable();
 $("#area").droppable({
    drop: function(){
      console.log("Elemento movido")
    }
 });

 //efectos

   $("#mostrar").click(function(){
     $(".caja-efectos").toggle("shake");
   });

   //tooltip

   $(document).tooltip();

   //dialog
   $("#lanzar-popup").click(function(){
     $("#popup").dialog();
   });

   //datepicker

   $("#calendario").datepicker();

   //tabs

   $("#pestanas").tabs();
   
}); 