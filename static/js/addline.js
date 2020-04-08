$("#add_row_ingredient").click(function() {
  $("#ingredients-item").clone().insertAfter($(".new-ingredients:last")).find("input[type='text']").val("");
});


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



//$('.test').on('click', '#deleteRow', function() {
//    $('#deleteRow').closest('.test').find('.new-ingredients').not(':first').last().remove();
//});

//$(document).ready(function(e) {
//    e.preventDefault();
//  $("#deleteRow").click(function(){
//    $(".new-ingredients").not(':first').last().remove();






























//var html = '<div class="form-group row"><label for="ingredients" class="col-sm-2 col-form-label">Ingredient</label><div class="col-sm-10"><input type="text" class="form-control" id="ingredients" name="ingredients"></div></div>';

// document.getElementById("addRow").addEventListener("click", function(){
//     document.getElementById("trial").appendChild(html);
// });

//$(function() {
//    $("#addRow").click(function(){
//        console.log("function called") //checker to see if JQ listener listened
//        $(".trial").append(html);
//    });   
//});


// Tim's code 04-Feb-2020
//$("#addRow").on("click", function (e) {
//    e.preventDefault();  // prevents the page from reloading on button-clicks
//    $(".form-group").after(html);
//});


// https://stackoverflow.com/questions/4766941/dynamically-adding-textboxes-to-a-form-by-the-click-of-a-button
// var label, textbox;
// label = document.createElement('label');
// label.appendChild(document.createTextNode('Another email address: '));
// textbox = document.createElement('input');
// textbox.type = 'text';
// label.appendChild(textbox);
// document.getElementById('theForm').appendChild(label);




// https://stackoverflow.com/questions/4766941/dynamically-adding-textboxes-to-a-form-by-the-click-of-a-button  see live example at https://jsbin.com/otedi5/156/edit?html,js,output


// var i = 0;

// $('#addRow').click(addAnotherTextBox);



// function addAnotherTextBox() {
//     $("#theForm").append("<div class='form-group row'><label for='ingredients' class='col-sm-2 col-form-label'>Ingredient</label><div class='col-sm-10'><input type='text' class='form-control' id='' name='ingredients_" + i + "'></div></div>");
//     i++;
// }