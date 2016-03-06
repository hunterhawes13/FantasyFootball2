var buttonHolderA = null;

$("button").on("click", function(){
  buttonHolderA = $(this);
  $(this).remove();   
});
