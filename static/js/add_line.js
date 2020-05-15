function myFunction() {
    /*var ele = document.getElementsByClassName("strike");            no dice */
    /*var ele = document.getElementsByName("strike");                 no dice */
    /*var ele = document.getElementById("{{ procedure[0] }}");        no dice */
    var ele = document.getElementById("strike");                    
ele.style.setProperty("text-decoration", "line-through");
}

/*-------------------------------- Add Recipe buttons --------------------------------*/
$("#add_row_ingredient").click(function() {
  var counter=document.getElementsByClassName("new-ingredients").length + 1;
  var outer_div=document.createElement("div");
  var the_label=document.createElement("label");
  var inner_div=document.createElement("div");
  var the_input=document.createElement("input");
  outer_div.className="form-group row new-ingredients";
  outer_div.setAttribute("id","ingredients-item" + counter);
  the_label.setAttribute("for","ingredients" + counter);
  the_label.className="col-md-2 col-form-label";
  the_label.innerHTML="ingredient " + counter;
  the_label.setAttribute("id","ingredient-test" + counter);
  inner_div.className="col-md-10";
  the_input.setAttribute("type","text");
  the_input.className="form-control";
  the_input.setAttribute("id","ingredients" + counter); 
  the_input.setAttribute("name","ingredients" + counter);
  the_input.setAttribute("placeholder","add an ingredient here, use the carrot above to add more ingredients");
  inner_div.appendChild(the_input);
  outer_div.appendChild(the_label);
  outer_div.appendChild(inner_div);
  /*document.getElementById("new-ingredients").appendChild(outer_div);  works for add_recipe*/
  /*document.getElementById("any").appendChild(outer_div);  works for add_recipe*/
});

/*$("#add_row_ingredient").click(function() {
  var counter=document.getElementsByClassName("new-ingredients").length;
  var the_input=document.createElement("input");
  the_input.className="new-ingredients form-control";
  the_input.setAttribute("name","ingredients" + counter);
  the_input.setAttribute("id","ingredients" + counter);
  the_input.setAttribute("placeholder","add an ingredient here, use the carrot above to add more ingredients");
  document.getElementById("ingredient-test").appendChild(the_input);
});*/   /*Stephen_CI*/

/*
$("#add_row_ingredient").click(function() {
  $("#ingredients-item").clone().insertAfter($(".new-ingredients:last")).find("input[type='text']").val("");
});*/   /**Tim_CI*/

$("#delete_row_ingredient").click(function () {
   var div = $('.new-ingredients');
   if (div.length > 1)
    $(".new-ingredients:last").remove();
});

$("#add_row_procedure").click(function() {
  var counter=document.getElementsByClassName("new-procedures").length + 1;
  var outer_div=document.createElement("div");
  var the_label=document.createElement("label");
  var inner_div=document.createElement("div");
  var the_input=document.createElement("textarea");
  outer_div.className="form-group row new-procedures";
  outer_div.setAttribute("id","procedures-item" + counter);
  the_label.setAttribute("for","procedures" + counter);
  the_label.className="col-md-2 col-form-label";
  the_label.innerHTML="Step " + counter;
  the_label.setAttribute("id","procedure-test" + counter);
  inner_div.className="col-md-10";
  the_input.className="form-control";
  the_input.setAttribute("id","procedures" + counter); 
  the_input.setAttribute("name","procedures" + counter);
  the_input.setAttribute("placeholder","add a step here, use the spoon above to add more steps");
  the_input.setAttribute("rows","3");
  inner_div.appendChild(the_input);
  outer_div.appendChild(the_label);
  outer_div.appendChild(inner_div);
  document.getElementById("new-procedures").appendChild(outer_div);
});

/*$("#add_row_procedure").click(function() {
   $("#procedures-item").clone().insertAfter($(".new-procedures:last")).find("input[type='text']").val("");
});*/

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

