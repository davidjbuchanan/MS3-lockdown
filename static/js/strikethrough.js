/*-------------------------------- Strike through steps as user completes --------------------------------*/
$(".myFunction").click(function(){
  $(this).parent().next("div").children("p.card-text").css({"text-decoration": "line-through", "text-decoration-color": "#077979", "text-decoration-style": "wavy"});
});
