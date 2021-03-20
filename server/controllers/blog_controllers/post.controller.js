const db = require("../../models");
const Post = db.post;
const User = db.user;

const Op = db.Sequelize.Op;

exports.createPost = (req, res) => {
  const { userId, title, content, slug, summary, publishDate } = req.body;

  Post.create({
    title,
    content,
    slug,
    summary,
    publishDate,
  }).then(post => {
    User.findByPk(userId).then(user => {
      post.setUser(user).then(() => {
        res.send({ messsage: "Post Sucessfully created!"})
      });
    });
  }).catch(err => {
    res.status(500).send({message: err.message})
  })
};

exports.editPost = (req, res) => {};

exports.deletePost = (req, res) => {};
