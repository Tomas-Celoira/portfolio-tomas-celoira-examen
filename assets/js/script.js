$(function(){

$("a").click(function(event){
  if (this.hash !== "") {

    event.preventDefault();

    var suave = this.hash;

    $('html, body').animate({
      scrollTop: $(suave).offset().top
    }, 800, function(){
      window.location.hash = suave;
  });
 }
});

$('.example-popover').popover({
  container: 'body'
})

$('[data-toggle="tooltip"]').tooltip();

});
