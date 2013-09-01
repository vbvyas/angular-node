var data = {
  "posts": [
    {
      "title": "Hello World!",
      "text": "This is a beautiful world."
    },
    {
      "title": "Foo Bar",
      "text": "A foo onces goes to bar."
    }
  ]
};

exports.posts = function (req, res) {
  var posts = [];
  data.posts.forEach(function (post, i) {
    posts.push({
      id: i,
      title: post.title,
      text: post.text.substr(0, 50) + '...'
    });
  });

  res.json({
    posts: posts
  });
};

exports.post = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    res.json({
      post: data.posts[id]
    });
  } else {
    res.json(false);
  }
};

exports.addPost = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};

exports.editPost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

exports.deletePost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};
