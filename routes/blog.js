exports.home = function(req, res){
  res.render('blog/home');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('blog/' + name);
};
