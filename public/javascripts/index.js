
$(document).ready(function(){

var q = {
  back: $(".back-button"),
}


q.back.on("click", function() {
  router.get('/projects/:name', function(req, res, next) {
    res.redirect('/');
  })
})


});
