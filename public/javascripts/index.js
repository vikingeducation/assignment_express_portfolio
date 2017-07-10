
$(document).ready(function(){

var q = {
  back: $(".back-button"),
}


q.back.on("click", function() {
  window.history.back();
})


});
