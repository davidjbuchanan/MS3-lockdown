function myFunction() {
    /*var ele = document.getElementsByClassName("strike");            no dice */
    /*var ele = document.getElementsByName("strike");                 no dice */
    /*var ele = document.getElementById("{{ procedure[0] }}");        no dice */
    var ele = document.getElementById("strike");                    
ele.style.setProperty("text-decoration", "line-through");
}

/*-------------------------------- Add Recipe buttons --------------------------------*/
/*$("#add_row_ingredient").click(function() {
  var counter=document.getElementsByClassName("new-ingredients").length;
  var the_label=document.createElement("label");
  var the_input=document.createElement("input");
  the_label.className="col-md-2 col-form-label";
  the_input.className="form-control col-md-10";
  the_input.setAttribute("id","ingredients" + counter);
  the_label.innerHTML="ingredient";
  the_input.setAttribute("type","text");
  the_input.setAttribute("name","ingredients" + counter);
  the_input.setAttribute("placeholder","add an ingredient here, use the carrot above to add more ingredients");
  document.getElementById("ingredients-item").appendChild(the_label);
  document.getElementById("ingredients-item").appendChild(the_input);
});*/

$("#add_row_ingredient").click(function() {
  var counter=document.getElementsByClassName("new-ingredients").length;
  var the_input=document.createElement("input");
  the_input.className="new-ingredients form-control";
  the_input.setAttribute("name","ingredients" + counter);
  the_input.setAttribute("id","ingredients" + counter);
  the_input.setAttribute("placeholder","add an ingredient here, use the carrot above to add more ingredients");
  document.getElementById("ingredient-test").appendChild(the_input);
});

/*
$("#add_row_ingredient").click(function() {
  $("#ingredients-item").clone().insertAfter($(".new-ingredients:last")).find("input[type='text']").val("");
});
*/

$("#delete_row_ingredient").click(function () {
   var div = $('.new-ingredients');
   if (div.length > 1)
    $(".new-ingredients:last").remove();
});

$("#add_row_procedure").click(function() {
   $("#procedures-item").clone().insertAfter($(".new-procedures:last")).find("input[type='text']").val("");
});

$("#delete_row_procedure").click(function () {
   var div = $('.new-procedures');
   if (div.length > 1)
    $(".new-procedures:last").remove();
});
/*--------------------------------          /           --------------------------------*/

/*-------------------------------- Edit Recipe buttons --------------------------------*/
/*$("#edit_add_row_ingredient").click(function() {
  $("#ingredients-item").clone().insertAfter($(".new-ingredients:last")).find("input[type='text']").val("");
});

$("#edit_delete_row_ingredient").click(function () {
   var div = $('.new-ingredients');
   if (div.length > 1)
    $(".new-ingredients:last").remove();
});

$("#edit_add_row_ingredient").click(function() {
  $(".new-ingredients").append("test").insertAfter($("#ingredient-{{ingredient[0]}}:last")).find("input[type='text']").val("");
});*/

/*--------------------------------          /           --------------------------------*/

